// src/Hooks/useAnalysisData.js
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import moment from 'moment';

export const useAnalysisData = (deviceId) => {
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');

        const response = await axios.get('/api/analysis-data', {
          params: { 
            deviceId,
            token,
            username
          }
        });

        setRawData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [deviceId]);

  const aggregateData = useMemo(() => {
    return {
      aggregate1Day: () => aggregateByPeriod(rawData, '1day'),
      aggregate1Week: () => aggregateByPeriod(rawData, '1week'),
      aggregate15Days: () => aggregateByPeriod(rawData, '15days'),
      aggregate1Month: () => aggregateByPeriod(rawData, '1month'),
      aggregate3Months: () => aggregateByPeriod(rawData, '3month'),
      aggregate6Months: () => aggregateByPeriod(rawData, '6month')
    };
  }, [rawData]);

  return {
    rawData,
    loading,
    error,
    aggregateData
  };
};

const aggregateByPeriod = (data, period) => {
  if (!data || data.length === 0) return null;

  const aggregationStrategies = {
    '1day': {
      interval: 15 * 60 * 1000, // 15 minutes
      maxPoints: 96 // 24 hours * 4 points per hour
    },
    '1week': {
      interval: 60 * 60 * 1000, // 1 hour
      maxPoints: 168 // 7 days * 24 hours
    },
    '15days': {
      interval: 6 * 60 * 60 * 1000, // 6 hours
      maxPoints: 60 // 15 days * 4 points per day
    },
    '1month': {
      interval: 6 * 60 * 60 * 1000, // 6 hours
      maxPoints: 120 // 30 days * 4 points per day
    },
    '3month': {
      interval: 12 * 60 * 60 * 1000, // 12 hours
      maxPoints: 90 // 90 days * 1 point per day
    },
    '6month': {
      interval: 24 * 60 * 60 * 1000, // 1 day
      maxPoints: 180 // 180 days
    }
  };

  const strategy = aggregationStrategies[period];
  const sortedData = data.sort((a, b) => new Date(a.time) - new Date(b.time));
  const startTime = new Date(sortedData[0].time);
  const endTime = new Date(sortedData[sortedData.length - 1].time);

  const aggregatedData = {
    temperature: [],
    soh: [],
    soc: [],
    voltage: [],
    current: [],
    power: []
  };

  let currentInterval = startTime.getTime();
  let intervalData = {
    temperature: [],
    soh: [],
    soc: [],
    voltage: [],
    current: []
  };

  sortedData.forEach(dataPoint => {
    const dataTime = new Date(dataPoint.time).getTime();

    if (dataTime >= currentInterval && dataTime < currentInterval + strategy.interval) {
      // Collect data for current interval
      intervalData.temperature.push(dataPoint.SHT30?.Temperature);
      intervalData.soh.push(dataPoint.GCE_RS485?.SOH);
      intervalData.soc.push(dataPoint.GCE_RS485?.SOC);
      intervalData.voltage.push(dataPoint.GCE_RS485?.VoltageMV);
      intervalData.current.push(dataPoint.GCE_RS485?.CurrentMA);
    }

    if (dataTime >= currentInterval + strategy.interval || 
        dataTime >= endTime.getTime()) {
      // Aggregate and store interval data
      aggregatedData.temperature.push(calculateAverage(intervalData.temperature));
      aggregatedData.soh.push(calculateAverage(intervalData.soh));
      aggregatedData.soc.push(calculateAverage(intervalData.soc));
      aggregatedData.voltage.push(calculateAverage(intervalData.voltage));
      aggregatedData.current.push(calculateAverage(intervalData.current));
      
      // Calculate power
      const avgVoltage = calculateAverage(intervalData.voltage);
      const avgCurrent = calculateAverage(intervalData.current);
      aggregatedData.power.push(
        avgVoltage && avgCurrent 
          ? Math.abs(avgVoltage * avgCurrent) / 1000000 
          : null
      );

      // Reset for next interval
      currentInterval += strategy.interval;
      intervalData = {
        temperature: [],
        soh: [],
        soc: [],
        voltage: [],
        current: []
      };
    }
  });

  // Limit to max points if exceeded
  Object.keys(aggregatedData).forEach(key => {
    if (aggregatedData[key].length > strategy.maxPoints) {
      aggregatedData[key] = aggregatedData[key].slice(0, strategy.maxPoints);
    }
  });

  return aggregatedData;
};

const calculateAverage = (values) => {
  const numericValues = values.filter(v => v !== null && !isNaN(parseFloat(v)));
  return numericValues.length > 0 
    ? numericValues.reduce((a, b) => a + b, 0) / numericValues.length 
    : null;
};

export default useAnalysisData;
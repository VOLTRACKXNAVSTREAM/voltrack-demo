import React, { useState, useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const getBaseColorFromRgba = (rgbaColor) => {
  const rgba = rgbaColor.match(/\d+/g);
  return `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`;
};

const VariableLineGraph = ({ 
  name = 'SOC', 
  name2 = 'SOH', 
  data1 = [], 
  data2 = [], 
  gradientColors1 = ['rgba(139, 0, 0, 0.5)', 'rgba(139, 0, 0, 0)'], 
  gradientColors2 = ['rgba(75, 192, 192, 0.5)', 'rgba(75, 192, 192, 0)'], 
  lineColors = ['rgb(139, 0, 0)', 'rgb(75, 192, 192)'] 
}) => {
  const duration = 180 * 60 * 1000; // 3 hours in milliseconds

  const now = new Date();
  const labels = [];
  for (let i = 2; i >= 0; i--) {
    const label = new Date(now.getTime() - i * 60 * 60 * 1000);
    labels.push(label);
  }

  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: name,
        data: data1.length > 0 ? data1 : Array(3).fill(null),
        borderColor: lineColors[0],
        lineTension: 0.5,
        borderWidth: 1.5,
        pointBorderColor: lineColors[0],
        pointBackgroundColor: lineColors[0],
        pointRadius: 0,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, gradientColors1[0]);
          gradient.addColorStop(1, gradientColors1[1]);

          return gradient;
        },
      },
      {
        label: name2,
        data: data2.length > 0 ? data2 : Array(3).fill(null),
        borderColor: lineColors[1],
        lineTension: 0.5,
        borderWidth: 1.5,
        pointBorderColor: lineColors[1],
        pointBackgroundColor: lineColors[1],
        pointRadius: 0,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, gradientColors2[0]);
          gradient.addColorStop(1, gradientColors2[1]);

          return gradient;
        },
      },
    ],
  });

  const chartRef = useRef();

  useEffect(() => {
    if (!data1 || !data2) return;

    const newData = Math.abs(data1); // Ensure positive data
    const newData2 = Math.abs(data2);

    setChartData((prevData) => {
      const updatedLabels = [...prevData.labels, now];
      const updatedData = [...prevData.datasets[0].data, newData];
      const updatedData2 = [...prevData.datasets[1].data, newData2];

      const cutTime = new Date(now.getTime() - duration);

      // Filter out data older than the 3-hour window
      const filteredLabels = updatedLabels.filter((label) => label >= cutTime);
      const filteredData = updatedData.slice(updatedData.length - filteredLabels.length);
      const filteredData2 = updatedData2.slice(updatedData2.length - filteredLabels.length);

      return {
        labels: filteredLabels,
        datasets: [
          {
            label: name,
            data: filteredData,
            fill: true,
            borderColor: lineColors[0],
            borderWidth: 1.5,
            lineTension: 0.5,
            pointBorderColor: lineColors[0],
            pointRadius: 1,
            backgroundColor: (context) => {
              const chart = context.chart;
              const { ctx, chartArea } = chart;

              if (!chartArea) {
                return null;
              }

              const gradient = ctx.createLinearGradient(
                0,
                chartArea.top,
                0,
                chartArea.bottom
              );
              gradient.addColorStop(0, gradientColors1[0]);
              gradient.addColorStop(1, gradientColors1[1]);
              return gradient;
            },
          },
          {
            label: name2,
            data: filteredData2,
            fill: true,
            borderColor: lineColors[1],
            borderWidth: 1.5,
            lineTension: 0.5,
            pointBorderColor: lineColors[1],
            pointRadius: 1,
            backgroundColor: (context) => {
              const chart = context.chart;
              const { ctx, chartArea } = chart;

              if (!chartArea) {
                return null;
              }

              const gradient = ctx.createLinearGradient(
                0,
                chartArea.top,
                0,
                chartArea.bottom
              );
              gradient.addColorStop(0, gradientColors2[0]);
              gradient.addColorStop(1, gradientColors2[1]);
              return gradient;
            },
          },
        ],
      };
    });

    if (chartRef.current) {
      chartRef.current.update(); // Update chart with new data
    }
  }, [data1, data2, name, name2]);

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "second",
          stepSize: 5,
          tooltipFormat: "HH:mm:ss",
        },
        min: now.getTime() - 3 * 60 * 60 * 1000,
        max: now.getTime(),
        ticks: {
          color: lineColors[0],
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          callback: function (val, index) {
            return index % 2 === 0 ? this.getLabelForValue(val) : "";
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: Math.max(...chartData.datasets[0].data, 100),
        ticks: {
          color: lineColors[1],
        },
      },
    },
    animation: {
      duration: 0, // No animation between data updates
    },
    maintainAspectRatio: false,
    resizeDelay: 200,
    plugins: {
      tooltip: {
        intersect: false,
        mode: "index",
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.data;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} ref={chartRef} options={options} />
    </div>
  );
};

export default VariableLineGraph;

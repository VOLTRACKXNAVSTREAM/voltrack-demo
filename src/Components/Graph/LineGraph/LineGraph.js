import React, { useState, useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController
);

function getBaseColorFromRgba(rgbaColor) {
  const rgba = rgbaColor.match(/\d+/g);
  return `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`;
}

const LineGraph = ({ name, data, gradientColors, lineColor, referenceTime, labelCount, timeFrame }) => {
  const baseLineColor = getBaseColorFromRgba(gradientColors[0]);

  const now = new Date();
  const labels = [];

  // Create dynamic labels based on labelCount and timeFrame (in minutes)
  const interval = timeFrame / (labelCount - 1);  // calculate the interval between each label
  for (let i = 0; i < labelCount; i++) {
    const label = new Date(now.getTime() - i * interval * 60 * 1000); // labels spaced apart by interval
    labels.push(label);
  }

  const initialData = Array(labelCount).fill(null);

  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: name,
        data: initialData,
        borderColor: lineColor || baseLineColor,
        lineTension: 0.5,
        borderWidth: 1.5,
        pointBorderColor: lineColor || baseLineColor,
        pointBackgroundColor: lineColor || baseLineColor,
        pointRadius: 0,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, gradientColors[0]);
          gradient.addColorStop(1, gradientColors[1]);

          return gradient;
        },
      },
    ],
  });

  const chartRef = useRef();

  useEffect(() => {
    if (!data) return;

    const newData = Math.abs(data);

    setChartData((prevData) => {
      const updatedLabels = [...prevData.labels, now];
      const updatedData = [...prevData.datasets[0].data, newData];

      // Maintain only the last 'labelCount' labels and data points
      const filteredLabels = updatedLabels.slice(-labelCount);
      const filteredData = updatedData.slice(-labelCount);

      return {
        labels: filteredLabels,
        datasets: [
          {
            label: name,
            fill: true,
            data: filteredData,
            borderColor: lineColor || baseLineColor,
            borderWidth: 1.5,
            lineTension: 0.5,
            pointBorderColor: lineColor || baseLineColor,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            backgroundColor: (context) => {
              const chart = context.chart;
              const { ctx, chartArea } = chart;

              if (!chartArea) {
                return null;
              }

              const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
              gradient.addColorStop(0, gradientColors[0]);
              gradient.addColorStop(1, gradientColors[1]);

              return gradient;
            },
          },
        ],
      };
    });

    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [data, name, referenceTime]);

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute", // Set unit to minute for the fixed time intervals
          displayFormats: {
            minute: "hh:mm a",
          },
        },
        min: now.getTime() - timeFrame * 60 * 1000, // Start from 'timeFrame' minutes ago
        max: now.getTime(),
        ticks: {
          color: 'black',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: Math.max(...chartData.datasets[0].data) * 1.5,
        ticks: {
          color: 'black',
        },
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 0,
    },
    maintainAspectRatio: false,
    resizeDelay: 200,
    plugins: {
      tooltip: {
        intersect: false,
        mode: "index",
        callbacks: {
          label: function (tooltipItem) {
            if (tooltipItem.raw === null) {
              return "";
            }
            return tooltipItem.data;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const labelColor = isDarkMode ? 'white' : 'black';

    options.scales.x.ticks.color = labelColor;
    options.scales.y.ticks.color = labelColor;
  }, []);

  return <Line data={chartData} ref={chartRef} options={options} />;
};

export default LineGraph;

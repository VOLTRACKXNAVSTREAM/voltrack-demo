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

const LineGraph = ({ name, data, gradientColors, lineColor, referenceTime }) => {
  const baseLineColor = getBaseColorFromRgba(gradientColors[0]);
  const duration = 180 * 60 * 1000; // 3 hours in milliseconds
  
  const now = new Date();
  const labels = [];
  for (let i = 2; i >= 0; i--) {
    const label = new Date(now.getTime() - i * 60 * 60 * 1000);
    labels.push(label);
  }

  const initialData = Array(3).fill(null);

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

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
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

      const cutTime = new Date(now.getTime() - duration);

      const filteredLabels = updatedLabels.filter((label) => label >= cutTime);
      const filteredData = updatedData.slice(updatedData.length - filteredLabels.length);

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

              const gradient = ctx.createLinearGradient(
                0,
                chartArea.top,
                0,
                chartArea.bottom
              );
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
          unit: "hour",
          displayFormats: {
            hour: "hh:mm a",
          },
        },
        min: now.getTime() - 3 * 60 * 60 * 1000,
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
            return tooltipItem.data; // Show local time in tooltip
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


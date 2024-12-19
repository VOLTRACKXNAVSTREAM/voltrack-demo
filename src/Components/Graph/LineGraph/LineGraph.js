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

const LineGraph = ({ name, data, gradientColors, lineColor, timeFrame, labelCount }) => {
  const baseLineColor = getBaseColorFromRgba(gradientColors[0]);

  const now = new Date();
  const interval = timeFrame / (labelCount - 1);  // Time between each label in minutes
  const labels = [];
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Listen for theme changes
    const handleThemeChange = () => {
      setTheme(document.body.classList.contains("dark") ? "dark" : "light");
    };

    // Set initial theme based on the body class
    handleThemeChange();
    window.addEventListener("change", handleThemeChange);

    return () => {
      window.removeEventListener("change", handleThemeChange);
    };
  }, []);

  // Create labels for the x-axis, evenly spaced within the given timeFrame
  for (let i = 0; i < labelCount; i++) {
    const label = new Date(now.getTime() - i * interval * 60 * 1000);
    labels.push(label);
  }

  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: name,
        data: Array(labelCount).fill(null),
        borderColor: lineColor || baseLineColor,
        lineTension: 0,
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

      // Do not filter the old data, just keep appending
      return {
        labels: updatedLabels,
        datasets: [
          {
            label: name,
            fill: true,
            data: updatedData,
            borderColor: lineColor || baseLineColor,
            borderWidth: 1.5,
            lineTension: 0,
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
  }, [data, name, timeFrame, gradientColors, lineColor]);

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute", // Display the x-axis in minutes
          displayFormats: {
            minute: "hh:mm a",
          },
        },
        min: now.getTime() - timeFrame * 60 * 1000, // Starting point based on time frame
        max: now.getTime(), // End the graph at the current time
        ticks: {
          color: theme === "dark" ? "white" : "black",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: Math.max(...chartData.datasets[0].data) * 1.5,
        ticks: {
          color: theme === "dark" ? "white" : "black",
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

  return <Line data={chartData} ref={chartRef} options={options} />;
};

export default LineGraph;

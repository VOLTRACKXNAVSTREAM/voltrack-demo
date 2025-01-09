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

const LineGraphStatic = ({ 
  name, 
  data, 
  gradientColors, 
  lineColor, 
  timeFrame, 
  labelCount = 30,  
  isMonthlyView = false  
}) => {
  const baseLineColor = getBaseColorFromRgba(gradientColors[0]);
  const [theme, setTheme] = useState("light");

  const generateLabels = () => {
    if (isMonthlyView) {
      return Array.from({ length: labelCount }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (labelCount - 1 - i));
        return date;
      });
    } else {
      const now = new Date();
      const interval = timeFrame / (labelCount - 1);
      return Array.from({ length: labelCount }, (_, i) => 
        new Date(now.getTime() - i * interval * 60 * 1000)
      );
    }
  };

  const labels = generateLabels();

  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: name,
        data: isMonthlyView ? data : Array(labelCount).fill(null),
        borderColor: lineColor || baseLineColor,
        lineTension: 0.4,
        borderWidth: 1.5,
        pointBorderColor: lineColor || baseLineColor,
        pointBackgroundColor: lineColor || baseLineColor,
        pointRadius: isMonthlyView ? 3 : 0,
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
      const updatedLabels = [...prevData.labels, new Date()];
      const updatedData = [...prevData.datasets[0].data, newData];

      return {
        labels: updatedLabels,
        datasets: [
          {
            label: name,
            fill: true,
            data: updatedData,
            borderColor: lineColor || baseLineColor,
            borderWidth: 1.5,
            lineTension: 0.4,
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
        type: isMonthlyView ? "time" : "time",
        time: {
          unit: isMonthlyView ? "day" : "minute",
          displayFormats: {
            day: "MMM dd",
            minute: "hh:mm a",
          },
        },
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

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(document.body.classList.contains("dark") ? "dark" : "light");
    };

    handleThemeChange();
    window.addEventListener("change", handleThemeChange);

    return () => {
      window.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return <Line data={chartData} ref={chartRef} options={options} />;
};

export default LineGraphStatic;

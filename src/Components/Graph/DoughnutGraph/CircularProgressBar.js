import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJs.register(ArcElement, Tooltip, Legend, Title);

function CircularProgressBar({ value, max }) {
  const [progressData, setProgressData] = React.useState({
    labels: ['Yes', 'No'], 
    datasets: [
      {
        label: 'Poll Results', 
        data: [value, max - value], 
        backgroundColor: ['rgb(59 130 246)', 'rgb(209, 213, 219)'], 
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },

    },
  };

  return (
    <>
      <Doughnut data={progressData} options={options} />
    </>
  );
}

export default CircularProgressBar;

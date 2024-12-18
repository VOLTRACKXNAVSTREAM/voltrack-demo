import React, { useState, useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJs,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  TimeScale,
} from "chart.js";


ChartJs.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

function DoughnutGraph({arr}) {
  const [doughnutData, setDoughnutData] = useState({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [20, 75, 20],
        backgroundColor: (context)=>{
          const chart= context.chart;
          const{ctx,chartArea}=chart;
          if(!chartArea) return null;
          const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
          gradient.addColorStop(0, 'rgba(75, 192, 192, 0.3)'); // Start color with transparency
          gradient.addColorStop(1, 'rgba(166, 53, 52, 0.6)');
          return gradient;
        },
        cutout:'80%',
        hoverOffset: 4,
        circumference: 180,
        rotation: 270,
      },
    ],
  });
    const [index, setIndex] = useState(0)
  const chartRef = useRef();
  const [currentValue, setCurrentValue] = useState(arr[0]);
  useEffect(() => {
    const interval = setInterval(() => {

        setDoughnutData({
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [20, 75, 20],
              backgroundColor: (context)=>{
                const chart= context.chart;
                const{ctx,chartArea}=chart;
                if(!chartArea) return null;
                const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
                gradient.addColorStop(0, 'rgba(75, 192, 192, 0.3)'); // Start color with transparency
                gradient.addColorStop(1, 'rgba(166, 53, 52, 0.6)');
                return gradient;
              },
              hoverOffset: 4,
              cutout:'80%',
              circumference: 180,
              rotation: 270,
              needleValue:arr[index%arr.length],
            },
          ],
        });
        setIndex((prevIndex)=>prevIndex+1);
        
    

      if (chartRef.current) {
        chartRef.current.update();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [arr,index]);
  useEffect(() => {
    const animate = () => {
      setCurrentValue((prevValue) => {
        const targetValue = doughnutData.datasets[0].needleValue;
        const difference = targetValue - prevValue;
        if (Math.abs(difference) < 0.01) {
          return targetValue;
        }
        return prevValue + difference * 0.1;
      });
    };

    const animationInterval = setInterval(animate, 50);

    return () => {
      clearInterval(animationInterval);
    };
  }, [doughnutData.datasets[0].needleValue]);

  // Custom plugin to draw a needle pointing to a specific value
  const needlePlugin = {
    id: 'needle-plugin',
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      const data=chart.data;
      

      // setting the values
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const innerRadius=chart.getDatasetMeta(0).data[0].innerRadius;
      const widthSlice=(outerRadius-innerRadius)/2;
      const radius=5;
      const angle=Math.PI/180;
        // needle rotation
          const needleValue=data.datasets[0].needleValue;
          const dataTotal=data.datasets[0].data.reduce((a,b)=>a+b,0);
          const circumference= ((chart.getDatasetMeta(0).data[0].circumference/Math.PI)/data.datasets[0].data[0])*needleValue;
        // ...x....

      ctx.save();
      ctx.translate(centerX,centerY);
      ctx.rotate(Math.PI*(circumference+1.5));
      ctx.beginPath(); 
      ctx.strokeStyle='black';
      ctx.fillStyle='grey';
      ctx.lineWidth=1;
      ctx.moveTo(0-radius, 0);
      ctx.lineTo(0, 0-innerRadius-widthSlice);
      ctx.lineTo(0+radius,0);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      // dot
      ctx.beginPath();
      ctx.arc(0,0,radius,0,angle*360,false);
      ctx.fill();
      
      ctx.restore();
    }
  };
  const options = {
    responsive: true,
    aspectRatio:1,
    plugins: {
      legend: {
        display: false // Disable the legend
      },
      tooltip: {
        enabled: true // Enable tooltips if needed
      }
    }
  }
  const needleFlowMeter={
    id:'needle-FlowMeter',
    afterDraw:(chart)=>{
      const ctx=chart.ctx;
      const data=chart.data;
      ctx.save();
      const needleValue= data.datasets[0].needleValue;
      const centerX= chart.getDatasetMeta(0).data[0].x;
      const centerY= chart.getDatasetMeta(0).data[0].y;
      

      // flow meter
      ctx.font='bold 20px sans-serif';
      ctx.fillStyle='grey';
      ctx.textAlign='center';
      ctx.fillText(needleValue+"°C",centerX,centerY+30);

    }
  }

  return (
    <div className="w-full h-auto ">
      <Doughnut data={doughnutData} ref={chartRef} options={options} plugins={[needlePlugin,needleFlowMeter]}  />
      {/* plugins={[needlePlugin]}  */}
    </div>
  );
}

export default DoughnutGraph;

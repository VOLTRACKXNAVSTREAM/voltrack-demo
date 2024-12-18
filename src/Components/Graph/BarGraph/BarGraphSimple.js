import React from 'react'
import { Bar } from 'react-chartjs-2'
import{
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
}from 'chart.js'

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);


function BarGraphSimple() {
    const data={
        labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        datasets:[
            {
                label:'Packs1',
                data:[12,15,17,21,18,40,15],
                backgroundColor:"#0096DC",
                barPercentage:0.4,
                barThickness: 10

            },
            {
                label:'Packs2',
                data:[10,12,10,1,11,40,12],
                backgroundColor:"green",
                barPercentage:0.4,
                barThickness: 10

            },
            {
                label:'Packs3',
                data:[1,2,15,7,18,8,15],
                backgroundColor:"Red",
                barPercentage:0.4,
                barThickness: 10

            }
        ]
    }
    const options={
        scale:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                }
            }
        }
    }
  return (
    <>
      <Bar
      data={data}
      options={options}
      />
    </>
  )
}

export default BarGraphSimple

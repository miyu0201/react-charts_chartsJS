import React, { useMemo,useState,useEffect } from "react";


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
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const supply = [2326,3435, 1245, 1452, 5643, 3274, 5346, 1224, 2245,4232,3221,553];
const electricity = [1623,2115, 2213, 2325, 4223,2154, 6249, 7324, 6125,4524,2221,3211];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];

const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Regional Budget 2022'
    }
  },
};

export default function LineChart() {

  const [dataA,setDataA]= useState([])
  const [dataB,setDataB]= useState([])

React.useEffect(() => {
  async function getData() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const rawdata = await res.json()
      setDataA(rawdata.data.memes.map((item)=> item.width))
      setDataB(rawdata.data.memes.map((item)=> item.height))
      console.log(rawdata)
  }
  getData()
  
}, [])

  const data = {
    
      datasets: [
        {
          label: "Supply",
          data: dataA,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(70, 152, 132,0.8)",
        },

        {
          label: "Eleciricity",
          data: dataB,
          
          borderColor:"rgb(755, 152, 152)",
          backgroundColor:"rgba(745, 142, 132, 0.8)",
          
        },
      ],
      labels,
    };

  return <Line data={data} options={options} />;
}

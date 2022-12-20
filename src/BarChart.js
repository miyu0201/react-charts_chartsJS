import React, { useMemo, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);



//const departmentA = [226,345, 125, 142, 543, 324, 546, 124, 245,432,321,553];
//const departmentB = [163,115, 213, 325, 423,154, 649, 734, 615,454,221,311];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];

const options = {
  fill: true,
  animations: false,
  scales: {
    y: {
      min: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Regional Sales 2022'
    }
  },
 
};

export default function BarChart() {

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


  const ChartData = {
   
      datasets: [
        {
          label: "Department B",
          tension: 0.3,
          data: dataA,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
        {
          label: "Department A ",
          tension: 0.3,
          data:dataB,
          borderColor: "rgb(175, 152, 192)",
          backgroundColor: "rgba(725, 132, 192, 0.5)",
        },
      ],
      labels,
    };

  return (
    <div className="App">
   
      <Bar data={ChartData} options={options} />
    </div>
  );
}

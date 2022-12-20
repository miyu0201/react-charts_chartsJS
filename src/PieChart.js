
import { useMemo } from "react";
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
import { Pie } from "react-chartjs-2";

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

const supply = [2326,3435, 1245, 1452];

const labels = ["European", "America", "Asian","Australia", ];

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
      text: 'Global Market Share 2022'
    },
    
  },
};

export default function PieChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Supply",
          data: supply,
          borderColor: "white",
          backgroundColor: ["#C78283", "#F3D9DC", "#D7BEA8", "#744253"],
        },

   
      ],
      labels,
    };
  }, []);

  return <Pie data={data} options={options} />;
}

/*
const PieChart = () => {
  const pieChartData = {
    labels: ["European", "America", "Asian","Australia", ],
    datasets: [{
        data: [8137119, 9431691, 10266674,6662881],
        label: "Infected People",
        backgroundColor: ["#C78283", "#F3D9DC", "#D7BEA8", "#744253"],
        hoverBackgroundColor: ["#175000", "#003350", "#993d00"]
    }]
  };
  const pieChart = (
    <Pie
      type="pie"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 15
        },
        plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Global Market Share'
    },
    
  },
      }}
      data={pieChartData}
    />
  );
  return pieChart;
};
export default PieChart;*/
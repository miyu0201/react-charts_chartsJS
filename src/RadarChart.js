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
  RadialLinearScale,
} from "chart.js";
import { Radar} from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const growth = [236,345, 245, 252, 563, 274, 346, 424, 245,422,221,353];

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];

const options = {
  fill: true,
  responsive: true,
  
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Annual Growth 2022'
    }
  },
};

export default function RadarChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Supply",
          data: growth,
          borderColor: "rgb(244, 178, 97)",
          backgroundColor: "rgba(244, 178, 97,0.8)",
        },

       
      ],
      labels,
    };
  }, []);

  return <Radar data={data} options={options} />;
}

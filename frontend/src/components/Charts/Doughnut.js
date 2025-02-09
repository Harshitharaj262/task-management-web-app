import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Legend, ArcElement } from "chart.js";
ChartJs.register(Tooltip, Legend, ArcElement);

export default function DoughnutChart({data}) {
  const options = {
    maintainAspectRatio: false,
    cutout: "60%",
  };
  if (!data || !data.datasets || !data.labels) {
    return <div>Loading Chart...</div>; 
  }
  return (
    <div>
      
      <Doughnut data={data} options={options} />
    </div>
  );
}

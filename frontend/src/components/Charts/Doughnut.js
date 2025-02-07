import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Legend, ArcElement } from "chart.js";
import DoughnutMockData from "../../mocks/doughnutMockData";
ChartJs.register(Tooltip, Legend, ArcElement);

export default function DoughnutChart() {
  const options = {
    maintainAspectRatio: false,
    cutout: "60%",
  };
  return (
    <div>
      <Doughnut data={DoughnutMockData} options={options} />
    </div>
  );
}

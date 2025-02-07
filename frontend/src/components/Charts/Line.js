import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LineMockData from "../../mocks/lineMockData";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph() {
  const options = { maintainAspectRatio: false, cutout: "60%" };
  const data = LineMockData;
  return (
    <div className="w-[80rem] h-[28rem] p-3">
      <Line options={options} data={data} />
    </div>
  );
}

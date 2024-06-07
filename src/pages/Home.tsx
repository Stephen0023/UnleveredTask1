import CandleStickChart from "../components/CandleStickChart/CandleStickChart";
import KeyRatioTable from "../components/KeyRationTable/KeyRatioTable";
import AnalystEstimates from "../components/AnalystEstimates/AnalystEstimates";
import News from "../components/news/News";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <CandleStickChart />
      <KeyRatioTable />
      <AnalystEstimates />
      <News />
    </main>
  );
}

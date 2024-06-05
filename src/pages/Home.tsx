import React from "react";
import { useFinancialData } from "../hooks/useFinancialData";
import CandleStickChart from "../components/CandleStickChart";
import StockChart from "../components/Chart";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <CandleStickChart />
      {/* <StockChart /> */}
    </main>
  );
}

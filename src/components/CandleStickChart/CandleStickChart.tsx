import React, { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";
import { useStockData } from "../../hooks/useStockData";
import { useSectionInView } from "../../hooks/useSectionInView";
import Loading from "../Loading/Loading";
import "./CandleStickChart.css";
import { useTheme } from "../../context/theme-context";

export default function CandleStickChart() {
  const { data, loading, error } = useStockData();
  const { ref } = useSectionInView("Chart");
  const { theme } = useTheme();

  const series = [
    {
      name: "Candlestick",
      data: data,
    },
  ];

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="container" id="chart" ref={ref}>
      <div className="title">
        AAPL
        <a
          href="https://www.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Inc
        </a>
      </div>

      <Chart
        options={{
          chart: {
            type: "candlestick",
            height: 350,
          },
          title: {
            text: "Stock",
            align: "left",
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
          },
          theme: {
            mode: theme,
          },
        }}
        series={series}
        type="candlestick"
        width="1400"
        height="450"
      />
    </section>
  );
}

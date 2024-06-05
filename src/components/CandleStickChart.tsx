import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";
import "./CandleStickChart.css";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
  elderRay,
  ema,
  discontinuousTimeScaleProviderBuilder,
  ChartCanvas,
  CurrentCoordinate,
  BarSeries,
  CandlestickSeries,
  ElderRaySeries,
  LineSeries,
  MovingAverageTooltip,
  OHLCTooltip,
  SingleValueTooltip,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons,
  withDeviceRatio,
  withSize,
} from "react-financial-charts";
import { initialData, StockDataType } from "./data";

// type detailedStockType = StockDataType & {
//   bullPower: number;
//   bearPower: number;
// };

export default function CandleStickChart() {
  // const ScaleProvider =
  //   discontinuousTimeScaleProviderBuilder().inputDateAccessor(
  //     (d) => new Date(d.date)
  //   );
  // const height = 1000;
  // const width = 2000;
  // const margin = { left: 0, right: 0, top: 0, bottom: 24 };

  // const ema12 = ema()
  //   .id(1)
  //   .options({ windowSize: 12 })
  //   .merge((d: any, c: any) => {
  //     d.ema12 = c;
  //   })
  //   .accessor((d: any) => d.ema12);

  // const ema26 = ema()
  //   .id(2)
  //   .options({ windowSize: 26 })
  //   .merge((d: any, c: any) => {
  //     d.ema26 = c;
  //   })
  //   .accessor((d: any) => d.ema26);

  // const elder = elderRay();

  // const calculatedData = elder(ema26(ema12(initialData)));
  // const { data, xScale, xAccessor, displayXAccessor } =
  //   ScaleProvider(initialData);
  // const pricesDisplayFormat = format(".2f");
  // const max = xAccessor(data[data.length - 1]);
  // const min = xAccessor(data[Math.max(0, data.length - 100)]);
  // const xExtents = [min, max + 5];

  // const gridHeight = height - margin.top - margin.bottom;

  // const elderRayHeight = 100;
  // const elderRayOrigin = (_: any, h: any) => [0, h - elderRayHeight];
  // const barChartHeight = gridHeight / 4;
  // const barChartOrigin = (_: any, h: any) => [
  //   0,
  //   h - barChartHeight - elderRayHeight,
  // ];
  // const chartHeight = gridHeight - elderRayHeight;
  // const yExtents = (data: StockDataType) => {
  //   return [data.high, data.low];
  // };
  // const dateTimeFormat = "%d %b";
  // const timeDisplayFormat = timeFormat(dateTimeFormat);

  // const barChartExtents = (data: StockDataType) => {
  //   return data.volume;
  // };

  // const candleChartExtents = (data: StockDataType) => {
  //   return [data.high, data.low];
  // };

  // const yEdgeIndicator = (data: StockDataType) => {
  //   return data.close;
  // };

  // const volumeColor = (data: StockDataType) => {
  //   return data.close > data.open
  //     ? "rgba(38, 166, 154, 0.3)"
  //     : "rgba(239, 83, 80, 0.3)";
  // };

  // const volumeSeries = (data: StockDataType) => {
  //   return data.volume;
  // };

  // const openCloseColor = (data: StockDataType) => {
  //   return data.close > data.open ? "#26a69a" : "#ef5350";
  // };

  const stockData = [
    {
      x: new Date("2023-01-01").getTime(),
      y: [174, 174.26, 171.12, 172.5],
    },
    {
      x: new Date("2023-01-02").getTime(),
      y: [172.37, 174.99, 171.72, 174.25],
    },
    {
      x: new Date("2023-01-03").getTime(),
      y: [173.91, 175.25, 173.6, 174.81],
    },
    {
      x: new Date("2023-01-04").getTime(),
      y: [174.66, 176.24, 174.33, 176.24],
    },
    // Add more data points here
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "Stock Price Movement",
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
  };

  const series = [
    {
      name: "Candlestick",
      data: stockData,
    },
  ];

  return (
    <section className="container">
      <div>
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
            height: 400,
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
        }}
        series={series}
        type="candlestick"
        width="1500"
      />

      {/* <ChartCanvas
        height={height}
        ratio={3}
        width={width}
        margin={margin}
        data={data}
        displayXAccessor={displayXAccessor}
        seriesName="Data"
        xScale={xScale}
        xAccessor={xAccessor}
        xExtents={xExtents}
        zoomAnchor={lastVisibleItemBasedZoomAnchor}
      >
        <Chart
          id={2}
          height={barChartHeight}
          origin={barChartOrigin}
          yExtents={barChartExtents}
        >
          <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
        </Chart>
        <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
          <XAxis showGridLines showTickLabel={false} />
          <YAxis showGridLines tickFormat={pricesDisplayFormat} />
          <CandlestickSeries />
          <LineSeries
            yAccessor={ema26.accessor()}
            strokeStyle={ema26.stroke()}
          />
          <CurrentCoordinate
            yAccessor={ema26.accessor()}
            fillStyle={ema26.stroke()}
          />
          <LineSeries
            yAccessor={ema12.accessor()}
            strokeStyle={ema12.stroke()}
          />
          <CurrentCoordinate
            yAccessor={ema12.accessor()}
            fillStyle={ema12.stroke()}
          />
          <MouseCoordinateY
            rectWidth={margin.right}
            displayFormat={pricesDisplayFormat}
          />
          <EdgeIndicator
            itemType="last"
            rectWidth={margin.right}
            fill={openCloseColor}
            lineStroke={openCloseColor}
            displayFormat={pricesDisplayFormat}
            yAccessor={yEdgeIndicator}
          />
          <MovingAverageTooltip
            origin={[8, 24]}
            options={[
              {
                yAccessor: ema26.accessor(),
                type: "EMA",
                stroke: ema26.stroke(),
                windowSize: ema26.options().windowSize,
              },
              {
                yAccessor: ema12.accessor(),
                type: "EMA",
                stroke: ema12.stroke(),
                windowSize: ema12.options().windowSize,
              },
            ]}
          />

          <ZoomButtons />
          <OHLCTooltip origin={[8, 16]} />
        </Chart>
        <Chart
          id={4}
          height={elderRayHeight}
          yExtents={[0, elder.accessor()]}
          origin={elderRayOrigin}
          padding={{ top: 8, bottom: 8 }}
        >
          <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" />
          <YAxis ticks={4} tickFormat={pricesDisplayFormat} />

          <MouseCoordinateX displayFormat={timeDisplayFormat} />
          <MouseCoordinateY
            rectWidth={margin.right}
            displayFormat={pricesDisplayFormat}
          />

          <ElderRaySeries yAccessor={elder.accessor()} />

          <SingleValueTooltip
            yAccessor={elder.accessor()}
            yLabel="Elder Ray"
            // yDisplayFormat={(d) =>
            //   `${pricesDisplayFormat(d.bullPower)}, ${pricesDisplayFormat(
            //     d.bearPower
            //   )}`
            // }
            origin={[8, 16]}
          />
        </Chart>
        <CrossHairCursor />
      </ChartCanvas> */}
    </section>
  );
}

// type tickerType = {
//   Date: Date;
//   Open: number;
//   High: number;
//   Low: number;
//   Close: number;
//   AdjClose: number;
//   Volume: number;
// };
// export default function CandleStickChart() {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const [data, setData] = useState([]);
//   const ticker: tickerType[] = [
//     {
//       Date: new Date("2017-11-03"),
//       Open: 174,
//       High: 174.259995,
//       Low: 171.119995,
//       Close: 172.5,
//       AdjClose: 170.526596,
//       Volume: 59398600,
//     },
//     {
//       Date: new Date("2017-11-06"),
//       Open: 172.369995,
//       High: 174.990005,
//       Low: 171.720001,
//       Close: 174.25,
//       AdjClose: 172.256577,
//       Volume: 35026300,
//     },
//     {
//       Date: new Date("2017-11-07"),
//       Open: 173.910004,
//       High: 175.25,
//       Low: 173.600006,
//       Close: 174.809998,
//       AdjClose: 172.810165,
//       Volume: 24361500,
//     },
//     {
//       Date: new Date("2017-11-08"),
//       Open: 174.660004,
//       High: 176.240005,
//       Low: 174.330002,
//       Close: 176.240005,
//       AdjClose: 174.223831,
//       Volume: 24409500,
//     },
//     {
//       Date: new Date("2017-11-09"),
//       Open: 175.110001,
//       High: 176.100006,
//       Low: 173.139999,
//       Close: 175.880005,
//       AdjClose: 173.86795,
//       Volume: 29482600,
//     },
//     {
//       Date: new Date("2017-11-10"),
//       Open: 175.110001,
//       High: 175.380005,
//       Low: 174.270004,
//       Close: 174.669998,
//       AdjClose: 173.292511,
//       Volume: 25145500,
//     },
//     {
//       Date: new Date("2017-11-13"),
//       Open: 173.5,
//       High: 174.5,
//       Low: 173.399994,
//       Close: 173.970001,
//       AdjClose: 172.598022,
//       Volume: 16982100,
//     },
//     {
//       Date: new Date("2017-11-14"),
//       Open: 173.039993,
//       High: 173.479996,
//       Low: 171.179993,
//       Close: 171.339996,
//       AdjClose: 169.988754,
//       Volume: 24782500,
//     },
//     {
//       Date: new Date("2017-11-15"),
//       Open: 169.970001,
//       High: 170.320007,
//       Low: 168.380005,
//       Close: 169.080002,
//       AdjClose: 167.746582,
//       Volume: 29158100,
//     },
//     {
//       Date: new Date("2017-11-16"),
//       Open: 171.179993,
//       High: 171.869995,
//       Low: 170.300003,
//       Close: 171.100006,
//       AdjClose: 169.750671,
//       Volume: 23637500,
//     },
//     {
//       Date: new Date("2017-11-17"),
//       Open: 171.039993,
//       High: 171.389999,
//       Low: 169.639999,
//       Close: 170.149994,
//       AdjClose: 168.808151,
//       Volume: 21899500,
//     },
//     {
//       Date: new Date("2017-11-20"),
//       Open: 170.289993,
//       High: 170.559998,
//       Low: 169.559998,
//       Close: 169.979996,
//       AdjClose: 168.639496,
//       Volume: 16262400,
//     },
//     {
//       Date: new Date("2017-11-21"),
//       Open: 170.779999,
//       High: 173.699997,
//       Low: 170.779999,
//       Close: 173.139999,
//       AdjClose: 171.774567,
//       Volume: 25131300,
//     },
//     {
//       Date: new Date("2017-11-22"),
//       Open: 173.360001,
//       High: 175,
//       Low: 173.050003,
//       Close: 174.960007,
//       AdjClose: 173.580231,
//       Volume: 25588900,
//     },
//     {
//       Date: new Date("2017-11-24"),
//       Open: 175.100006,
//       High: 175.5,
//       Low: 174.649994,
//       Close: 174.970001,
//       AdjClose: 173.590149,
//       Volume: 14026700,
//     },
//     {
//       Date: new Date("2017-11-27"),
//       Open: 175.050003,
//       High: 175.080002,
//       Low: 173.339996,
//       Close: 174.089996,
//       AdjClose: 172.717072,
//       Volume: 20716800,
//     },
//     {
//       Date: new Date("2017-11-28"),
//       Open: 174.300003,
//       High: 174.869995,
//       Low: 171.860001,
//       Close: 173.070007,
//       AdjClose: 171.705139,
//       Volume: 26428800,
//     },
//     {
//       Date: new Date("2017-11-29"),
//       Open: 172.630005,
//       High: 172.919998,
//       Low: 167.160004,
//       Close: 169.479996,
//       AdjClose: 168.143433,
//       Volume: 41666400,
//     },
//     {
//       Date: new Date("2017-11-30"),
//       Open: 170.429993,
//       High: 172.139999,
//       Low: 168.440002,
//       Close: 171.850006,
//       AdjClose: 170.494751,
//       Volume: 41527200,
//     },
//     {
//       Date: new Date("2017-12-01"),
//       Open: 169.949997,
//       High: 171.669998,
//       Low: 168.5,
//       Close: 171.050003,
//       AdjClose: 169.70105,
//       Volume: 39759300,
//     },
//   ];

//   //   const chart = {

//   //   // Declare the chart dimensions and margins.
//   //   const width = 928;
//   //   const height = 600;
//   //   const marginTop = 20;
//   //   const marginRight = 30;
//   //   const marginBottom = 30;
//   //   const marginLeft = 40;

//   //   // Declare the positional encodings.
//   //   const x = d3.scaleBand()
//   //       .domain(d3.utcDay
//   //           .range(ticker.at(0).Date, +ticker.at(-1).Date + 1)
//   //           .filter(d => d.getUTCDay() !== 0 && d.getUTCDay() !== 6))
//   //       .range([marginLeft, width - marginRight])
//   //       .padding(0.2);

//   //   const y = d3.scaleLog()
//   //       .domain([d3.min(ticker, d => d.Low), d3.max(ticker, d => d.High)])
//   //       .rangeRound([height - marginBottom, marginTop]);

//   //   // Create the SVG container.
//   //   const svg = d3.create("svg")
//   //       .attr("viewBox", [0, 0, width, height]);

//   //   // Append the axes.
//   //   svg.append("g")
//   //       .attr("transform", `translate(0,${height - marginBottom})`)
//   //       .call(d3.axisBottom(x)
//   //         .tickValues(d3.utcMonday
//   //             .every(width > 720 ? 1 : 2)
//   //             .range(ticker.at(0).Date, ticker.at(-1).Date))
//   //         .tickFormat(d3.utcFormat("%-m/%-d")))
//   //       .call(g => g.select(".domain").remove());

//   //   svg.append("g")
//   //       .attr("transform", `translate(${marginLeft},0)`)
//   //       .call(d3.axisLeft(y)
//   //         .tickFormat(d3.format("$~f"))
//   //         .tickValues(d3.scaleLinear().domain(y.domain()).ticks()))
//   //       .call(g => g.selectAll(".tick line").clone()
//   //         .attr("stroke-opacity", 0.2)
//   //         .attr("x2", width - marginLeft - marginRight))
//   //       .call(g => g.select(".domain").remove());

//   //   // Create a group for each day of data, and append two lines to it.
//   //   const g = svg.append("g")
//   //       .attr("stroke-linecap", "round")
//   //       .attr("stroke", "black")
//   //     .selectAll("g")
//   //     .data(ticker)
//   //     .join("g")
//   //       .attr("transform", d => `translate(${x(d.Date)},0)`);

//   //   g.append("line")
//   //       .attr("y1", d => y(d.Low))
//   //       .attr("y2", d => y(d.High));

//   //   g.append("line")
//   //       .attr("y1", d => y(d.Open))
//   //       .attr("y2", d => y(d.Close))
//   //       .attr("stroke-width", x.bandwidth())
//   //       .attr("stroke", d => d.Open > d.Close ? d3.schemeSet1[0]
//   //           : d.Close > d.Open ? d3.schemeSet1[2]
//   //           : d3.schemeSet1[8]);

//   //   // Append a title (tooltip).
//   //   const formatDate = d3.utcFormat("%B %-d, %Y");
//   //   const formatValue = d3.format(".2f");
//   //   const formatChange = ((f) => (y0, y1) => f((y1 - y0) / y0))(d3.format("+.2%"));

//   //   g.append("title")
//   //       .text(d => `${formatDate(d.Date)}
//   // Open: ${formatValue(d.Open)}
//   // Close: ${formatValue(d.Close)} (${formatChange(d.Open, d.Close)})
//   // Low: ${formatValue(d.Low)}
//   // High: ${formatValue(d.High)}`);

//   //   return svg.node();
//   // }

//   useEffect(() => {
//     if (!svgRef.current) {
//       return;
//     }

//     const width = 928 * 2;
//     const height = 600 * 2;
//     const marginTop = 20;
//     const marginRight = 30;
//     const marginBottom = 30;
//     const marginLeft = 40;

//     const x = d3
//       .scaleBand()
//       .domain(
//         d3.utcDay
//           .range(ticker[0].Date, ticker[ticker.length - 1].Date)
//           .filter((d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6)
//           .map((d) => d.toISOString().split("T")[0])
//       )
//       .range([marginLeft, width - marginRight])
//       .padding(0.2);

//     const y = d3
//       .scaleLog()
//       .domain([
//         d3.min(ticker, (d) => d.Low) ?? 1,
//         d3.max(ticker, (d) => d.High) ?? 1,
//       ])
//       .rangeRound([height - marginBottom, marginTop]);

//     const svg = d3
//       .select(svgRef.current)
//       .attr("viewBox", `0 0 ${width} ${height}`);

//     svg.selectAll("*").remove(); // Clear existing content

//     const monday = d3.utcMonday.every(width > 720 ? 1 : 2);
//     const dateRange = monday
//       ? monday
//           .range(ticker[0].Date, ticker[ticker.length - 1].Date)
//           .map((d) => d.toISOString().split("T")[0])
//       : [];
//     svg
//       .append("g")
//       .attr("transform", `translate(0,${height - marginBottom})`)
//       .call(
//         d3.axisBottom(x).tickValues(dateRange).tickFormat(null)
//         // .tickFormat(d3.utcFormat("%-m/%-d"))
//       )
//       .call((g) => g.select(".domain").remove());

//     svg
//       .append("g")
//       .attr("transform", `translate(${marginLeft},0)`)
//       .call(
//         d3
//           .axisLeft(y)
//           .tickFormat(d3.format("$~f"))
//           .tickValues(d3.scaleLinear().domain(y.domain()).ticks())
//       )
//       .call((g) =>
//         g
//           .selectAll(".tick line")
//           .clone()
//           .attr("stroke-opacity", 0.2)
//           .attr("x2", width - marginLeft - marginRight)
//       )
//       .call((g) => g.select(".domain").remove());

//     const g = svg
//       .append("g")
//       .attr("stroke-linecap", "round")
//       .attr("stroke", "black")
//       .selectAll("g")
//       .data(ticker)
//       .join("g")
//       .attr("transform", (d) => `translate(${x(String(d.Date))},0)`);

//     g.append("line")
//       .attr("y1", (d) => y(d.Low))
//       .attr("y2", (d) => y(d.High));

//     g.append("line")
//       .attr("y1", (d) => y(d.Open))
//       .attr("y2", (d) => y(d.Close))
//       .attr("stroke-width", x.bandwidth())
//       .attr("stroke", (d) =>
//         d.Open > d.Close
//           ? d3.schemeSet1[0]
//           : d.Close > d.Open
//           ? d3.schemeSet1[2]
//           : d3.schemeSet1[8]
//       );

//     const formatDate = d3.utcFormat("%B %-d, %Y");
//     const formatValue = d3.format(".2f");
//     const formatChange = (
//       (f: (value: number) => string) => (y0: number, y1: number) =>
//         f((y1 - y0) / y0)
//     )(d3.format("+.2%"));

//     g.append("title").text(
//       (d) => `${formatDate(d.Date)}
// Open: ${formatValue(d.Open)}
// Close: ${formatValue(d.Close)} (${formatChange(d.Open, d.Close)})
// Low: ${formatValue(d.Low)}
// High: ${formatValue(d.High)}`
//     );
//   }, []);

//   return <svg ref={svgRef}></svg>;
// }

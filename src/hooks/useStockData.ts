import { useState, useEffect } from "react";
import axios from "axios";

import { mockData } from "../lib/data";

// const API_KEY = "TXMUAN70WIHJ8125";
const API_KEY = "EOAW7SEATSWKM427";

type StockData = {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  "Time Series (Daily)": {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  };
};

function transformData(stockData: StockData): any[] {
  const timeSeries = stockData["Time Series (Daily)"];
  const transformedData = [];

  for (const date in timeSeries) {
    const stockInfo = timeSeries[date];
    const dataPoint = {
      x: new Date(date).getTime(),
      y: [
        parseFloat(stockInfo["1. open"]),
        parseFloat(stockInfo["2. high"]),
        parseFloat(stockInfo["3. low"]),
        parseFloat(stockInfo["4. close"]),
      ],
    };
    transformedData.push(dataPoint);
  }

  return transformedData;
}

export const useStockData = () => {
  const [data, setData] = useState<any | null>(transformData(mockData));
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // const response = await axios.get<StockData>(
        //   `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=${API_KEY}`
        // );

        // const response = await axios.get(
        //   `https://finance.yahoo.com/quote/AAPL/history/`
        // );
        // const html = response.data;
        // const $ = cheerio.load(html);
        // const currentPrice = $('table"]').text();
        // console.log(JSON.stringify(currentPrice));

        const transformedData = transformData(mockData);
        setData(transformedData);
      } catch (error) {
        setError("Failed to fetch financial data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

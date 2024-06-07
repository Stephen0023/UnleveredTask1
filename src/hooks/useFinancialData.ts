import { useState, useEffect } from "react";
import axios from "axios";

type Sentiment = {
  score: number;
  value: string;
};

type Article = {
  sentiment: Sentiment;
  summary: string;
};

type News = {
  article1: Article;
  article2: Article;
  article3: Article;
};

type FinancialData = {
  analyst_estimates: {
    Citibank: number;
    "Goldman Sachs": number;
    "Morgan Stanley": number;
  };
  current_ratio: number;
  debt_to_equity_ratio: number;
  eps: number;
  market_ap: number;
  news: News;
  pb_ratio: number;
  pe_ratio: number;
  peg_ratio: number;
  ps_ratio: number;
  shares_outstanding: number;
  ticker: string;
};

const mockData = {
  analyst_estimates: {
    Citibank: 6.5,
    "Goldman Sachs": 7.9,
    "Morgan Stanley": 9.87,
  },
  current_ratio: 7.1,
  debt_to_equity_ratio: 2.1,
  eps: 1.7,
  market_ap: 2.5,
  news: {
    article1: {
      sentiment: { score: 0.9, value: "positive" },
      summary: "This is Article1",
    },
    article2: {
      sentiment: { score: 0.67, value: "negative" },
      summary: "This is Article2",
    },
    article3: {
      sentiment: { score: 0.559, value: "positive" },
      summary: "This is Article3",
    },
  },
  pb_ratio: 7.9,
  pe_ratio: 1.2,
  peg_ratio: 5.5,
  ps_ratio: 33.5,
  shares_outstanding: 317,
  ticker: "AAPL",
};

export const useFinancialData = () => {
  const [data, setData] = useState<FinancialData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // const response = await axios.get<FinancialData>("financials");
        // console.log(JSON.stringify(response.data));
        setData(mockData);
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

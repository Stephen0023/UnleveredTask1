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

export const useFinancialData = () => {
  const [data, setData] = useState<FinancialData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<FinancialData>("financials");
        setData(response.data);
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

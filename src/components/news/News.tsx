import { useFinancialData } from "../../hooks/useFinancialData";
import Loading from "../Loading/Loading";
import { useSectionInView } from "../../hooks/useSectionInView";
import "./News.css";

export default function News() {
  const { data, loading, error } = useFinancialData();
  const { ref } = useSectionInView("News");

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <section className="news-container" ref={ref} id="news">
      <h2>Latest News</h2>
      {Object.entries(data.news).map(([key, value]) => (
        <div key={key} className="newsArticle">
          <h3>{`Article ${key}`}</h3>
          <p>{value.summary}</p>
          <p>
            Sentiment: {value.sentiment.value} (Score: {value.sentiment.score})
          </p>
        </div>
      ))}
    </section>
  );
}

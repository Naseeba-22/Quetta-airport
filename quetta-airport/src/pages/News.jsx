import { ArrowRight, CalendarDays } from "lucide-react";
import { news } from "../data/mockData";
import SectionTitle from "../components/SectionTitle";

function News() {
  return (
    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            LATEST INFORMATION
          </span>

          <h1>Airport News</h1>

          <p>
            Stay informed about airport announcements and updates.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <SectionTitle
            title="Latest Updates"
            description="Important information for passengers and visitors."
          />

          <div className="news-grid">

            {news.map((item, index) => (

              <article className="news-card" key={index}>

                <div className="news-image">
                  <span>{item.category}</span>
                </div>

                <div className="news-body">

                  <small>
                    <CalendarDays size={14} />
                    {item.date}
                  </small>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button className="text-btn">
                    Read More
                    <ArrowRight size={15} />
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default News;
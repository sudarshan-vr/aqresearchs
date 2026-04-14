import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__image-col">
          <div className="about__img-wrapper">
            <img
              src="/picture.jpg"
              alt="AQ Research Team"
              className="about__img"
              onError={(e) => {
              if (e.target.src.indexOf('aqresearchs.com') === -1) {
                e.target.src = '/picture.jpg';
              } else {
                e.target.style.display = 'none';
              }
            }}
            />
            <div className="about__badge">
              <span className="about__badge-num">15+</span>
              <span className="about__badge-lbl">Years of<br />Experience</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="section-label">About AQ Research</span>
          <h2 className="section-title">Insight-Driven. Accuracy-First. Pan-India.</h2>
          <div className="divider"></div>
          <p className="about__desc">
            AQ Research is a professional market research organization specializing in quantitative and qualitative studies across automobile, FMCG, consumer behavior, and social research sectors.
          </p>
          <p className="about__desc">
            With strong field expertise and a Pan-India operational network, we deliver reliable data collection, structured execution, and insight-driven analysis tailored to client objectives — enabling informed business decisions.
          </p>

          <div className="about__pillars">
            {[
              { title: 'Accuracy & Quality Control', desc: 'Multi-level validation, trained field investigators, and strict respondent screening ensure research integrity.' },
              { title: 'Pan-India Field Network', desc: 'Operational reach across states with structured execution and real-time field monitoring.' },
              { title: 'Deadline-Driven Reporting', desc: 'Transparent communication and consistent project delivery that supports long-term client partnerships.' },
            ].map((item, i) => (
              <div className="about__pillar" key={i}>
                <div className="about__pillar-num">0{i + 1}</div>
                <div>
                  <h4 className="about__pillar-title">{item.title}</h4>
                  <p className="about__pillar-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about__actions">
            <Link to="/about" className="hero__btn hero__btn--primary" style={{display:'inline-flex'}}>Read More</Link>
            <Link to="/contact" className="hero__btn hero__btn--ghost" style={{display:'inline-flex'}}>Get Started</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

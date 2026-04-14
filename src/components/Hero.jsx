import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-text">RESEARCH</div>
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-label">Pan-India Market Research Organization</span>
          <h1 className="hero__title">
            Unlocking<br />
            <em>Insights</em> to Drive<br />
            Growth
          </h1>
          <p className="hero__subtitle">
            Quantitative & qualitative research across automobile, FMCG, consumer behaviour, and social sectors — accuracy-first, deadline-driven, insight-powered.
          </p>
          <div className="hero__actions">
            <Link to="/about" className="hero__btn hero__btn--primary">Explore AQ Research</Link>
            <Link to="/services" className="hero__btn hero__btn--ghost">Our Services</Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--1">
            <div className="hero__card-icon">📊</div>
            <div>
              <div className="hero__card-num">15+</div>
              <div className="hero__card-lbl">Years Experience</div>
            </div>
          </div>
          <div className="hero__card hero__card--2">
            <div className="hero__card-icon">🇮🇳</div>
            <div>
              <div className="hero__card-num">Pan-India</div>
              <div className="hero__card-lbl">Field Network</div>
            </div>
          </div>
          <div className="hero__card hero__card--3">
            <div className="hero__card-icon">✅</div>
            <div>
              <div className="hero__card-num">98%</div>
              <div className="hero__card-lbl">Project Success</div>
            </div>
          </div>
          <div className="hero__blob"></div>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <ArrowDown size={14} />
        <span>Scroll Down</span>
      </a>
    </section>
  );
}

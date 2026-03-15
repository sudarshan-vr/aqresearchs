import { ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-text">RESEARCH</div>
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-label">Market Research & Innovation</span>
          <h1 className="hero__title">
            Unlocking<br />
            <em>Insights</em> to Drive<br />
            Growth
          </h1>
          <p className="hero__subtitle">
            Your success is our priority. Empathy, innovation, and affordable quality — delivering research that improves business and quality of life.
          </p>
          <div className="hero__actions">
            <a href="#about" className="hero__btn hero__btn--primary">Start Your Journey</a>
            <a href="#services" className="hero__btn hero__btn--ghost">Our Services</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--1">
            <div className="hero__card-icon">📊</div>
            <div>
              <div className="hero__card-num">500+</div>
              <div className="hero__card-lbl">Projects Delivered</div>
            </div>
          </div>
          <div className="hero__card hero__card--2">
            <div className="hero__card-icon">🏆</div>
            <div>
              <div className="hero__card-num">10+</div>
              <div className="hero__card-lbl">Years Experience</div>
            </div>
          </div>
          <div className="hero__card hero__card--3">
            <div className="hero__card-icon">🌍</div>
            <div>
              <div className="hero__card-num">15+</div>
              <div className="hero__card-lbl">States Served</div>
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

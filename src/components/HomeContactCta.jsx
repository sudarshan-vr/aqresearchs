import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './HomeContactCta.css';

export default function HomeContactCta() {
  return (
    <section className="home-cta">
      <div className="container home-cta__inner">
        <div className="home-cta__text">
          <span className="section-label">Let's Work Together</span>
          <h2 className="home-cta__title">Ready to Start Your<br /><em>Research Project?</em></h2>
          <p className="home-cta__sub">
            Connect with us to explore research collaborations, get a quote, or simply ask a question.
          </p>
          <div className="home-cta__actions">
            <Link to="/contact" className="hero__btn hero__btn--primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Contact Us <ArrowRight size={14} />
            </Link>
            <Link to="/services" className="hero__btn hero__btn--ghost" style={{ display: 'inline-flex' }}>
              View Services
            </Link>
          </div>
        </div>

        <div className="home-cta__info">
          <div className="home-cta__info-card">
            <div className="home-cta__info-item">
              <div className="home-cta__info-icon"><Phone size={15} /></div>
              <div>
                <span className="home-cta__info-label">Call Us</span>
                <a href="tel:+919168616999" className="home-cta__info-value">+91 9168616999</a>
              </div>
            </div>
            <div className="home-cta__info-item">
              <div className="home-cta__info-icon"><Mail size={15} /></div>
              <div>
                <span className="home-cta__info-label">Email Us</span>
                <a href="mailto:info@aqresearchs.com" className="home-cta__info-value">info@aqresearchs.com</a>
              </div>
            </div>
            <div className="home-cta__info-item">
              <div className="home-cta__info-icon"><MapPin size={15} /></div>
              <div>
                <span className="home-cta__info-label">Head Office</span>
                <span className="home-cta__info-value">Vijaynagar, Bangalore</span>
              </div>
            </div>
            <div className="home-cta__offices">
              <span className="home-cta__offices-label">Also in</span>
              {['Cochin', 'Chennai', 'Hyderabad'].map(city => (
                <span key={city} className="home-cta__offices-tag">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Custom App Development',
  'Strategic Business Planning',
  'Brand & Identity Design',
  'Digital Marketing & SEO',
  'Market Research',
  'Political Research',
];

const socials = [
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Facebook, label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">AQ<span>Research</span></a>
          <p className="footer__tagline">
            Unlocking insights to drive growth. Empathy, innovation, and quality — delivering research that improves business and quality of life.
          </p>
          <div className="footer__socials">
            {socials.map(({ Icon, label }) => (
              <a key={label} href="#" className="footer__social" aria-label={label}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h5 className="footer__col-title">Quick Links</h5>
          <ul className="footer__list">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="footer__link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5 className="footer__col-title">Services</h5>
          <ul className="footer__list">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="footer__link">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5 className="footer__col-title">Contact</h5>
          <ul className="footer__list footer__list--contact">
            <li>
              <span className="footer__contact-label">Phone</span>
              <a href="tel:+919168616999" className="footer__link">+91 9168616999</a>
            </li>
            <li>
              <span className="footer__contact-label">Email</span>
              <a href="mailto:info@aqresearchs.com" className="footer__link">info@aqresearchs.com</a>
            </li>
            <li>
              <span className="footer__contact-label">Hours</span>
              <span className="footer__link">Mon–Sat: 09AM–07PM</span>
            </li>
            <li>
              <span className="footer__contact-label">Sunday</span>
              <span className="footer__link footer__link--muted">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">© 2025 AQ Researchs. All Rights Reserved.</p>
        <p className="footer__credit">Designed & Developed with precision.</p>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Our Team', to: '/about#team' },
  { label: 'Contact', to: '/contact' },
];

const services = [
  { label: 'Quantitative Research', to: '/services' },
  { label: 'Qualitative Research', to: '/services' },
  { label: 'Automobile Studies', to: '/services' },
  { label: 'FMCG Research', to: '/services' },
  { label: 'Social & Political Research', to: '/services' },
  { label: 'Digital Marketing & App Dev', to: '/services' },
];

const socials = [
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">AQ<span>Research</span></Link>
          <p className="footer__tagline">
            Unlocking insights to drive growth. Pan-India market research across quantitative, qualitative, automobile, FMCG, and social sectors.
          </p>
          <div className="footer__socials">
            {socials.map(({ Icon, label, href }) => (
              <a key={label} href={href} className="footer__social" aria-label={label}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h5 className="footer__col-title">Quick Links</h5>
          <ul className="footer__list">
            {quickLinks.map((l) => (
              <li key={l.label}>
                {l.to.startsWith('/#') ? (
                  <a href={l.to} className="footer__link">{l.label}</a>
                ) : (
                  <Link to={l.to} className="footer__link">{l.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5 className="footer__col-title">Services</h5>
          <ul className="footer__list">
            {services.map((s) => (
              <li key={s.label}>
                <Link to={s.to} className="footer__link">{s.label}</Link>
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
        <p className="footer__credit">
          <Link to="/contact" className="footer__contact-cta">Get In Touch →</Link>
        </p>
      </div>
    </footer>
  );
}

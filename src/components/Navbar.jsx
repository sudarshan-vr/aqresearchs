import { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/', type: 'page' },
  { label: 'About', to: '/about', type: 'page' },
  { label: 'Services', to: '/services', type: 'page' },
  { label: 'Portfolio', to: '/#portfolio', type: 'hash' },
  { label: 'Team', to: '/#team', type: 'hash' },
  { label: 'Contact', to: '/contact', type: 'page' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // eslint-disable-next-line
  useLayoutEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (link) =>
    link.type === 'page' ? location.pathname === link.to : false;

  return (
    <nav className={[
      'navbar',
      scrolled ? 'navbar--scrolled' : '',
      menuOpen ? 'navbar--menu-open' : '',
    ].filter(Boolean).join(' ')}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo-link" onClick={() => setMenuOpen(false)}>
          <Logo className="navbar__logo-svg" />
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              {link.type === 'page' ? (
                <Link
                  to={link.to}
                  className={`navbar__link ${isActive(link) ? 'navbar__link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.to}
                  className="navbar__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/contact" className="navbar__cta">Get In Touch</Link>
          <button
            className="navbar__burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

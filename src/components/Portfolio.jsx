import { useState } from 'react';
import './Portfolio.css';

const categories = ['All Projects', 'Research & Surveys', 'Web & App Design', 'Campaign'];

// Images reference /assets/ folder — place your images there with matching names.
// Fallback: if an image fails to load, a styled placeholder is shown.
const projects = [
  {
    title: 'Market Research',
    cat: 'Research & Surveys',
    desc: 'We bridge the gap between customer needs and business solutions.',
    img: '/mkt.webp',
    fallbackImg: '/mkt.webp',
    tag: 'Research',
    color: '#1456A8',
  },
  {
    title: 'Digital Marketing',
    cat: 'Campaign',
    desc: 'Reaching the right audience, at the right time, with the right message.',
    img: '/assets/digital-mkt.webp',
    fallbackImg: '/mkt.webp',
    tag: 'Marketing',
    color: '#1E73D2',
  },
  {
    title: 'Political Research & Survey',
    cat: 'Research & Surveys',
    desc: 'Understanding voters. Influencing outcomes.',
    img: '/assets/political-research.jpg',
    fallbackImg: '/political research.jpg',
    tag: 'Survey',
    color: '#0F4080',
  },
  {
    title: 'App Development',
    cat: 'Web & App Design',
    desc: 'User-centered interface development.',
    img: '/assets/mob-application.webp',
    fallbackImg: '/mob application.webp',
    tag: 'Development',
    color: '#1456A8',
  },
  {
    title: 'Social Media Campaign',
    cat: 'Campaign',
    desc: 'Strategic content to engage audiences, build brand awareness, and drive action.',
    img: '/assets/social-campaign.jpg',
    fallbackImg: '/social campaign.jpg',
    tag: 'Social',
    color: '#1E73D2',
  },
];

function PortfolioImg({ src, fallbackImg, alt, color }) {
  const handleError = (e) => {
    // Try the fallback URL from aqresearchs.com
    if (e.target.src !== fallbackImg) {
      e.target.src = fallbackImg;
    } else {
      // Both failed — hide img and show color placeholder
      e.target.style.display = 'none';
      e.target.parentElement.style.background = color || 'var(--bg-secondary)';
    }
  };
  return (
    <img
      src={src}
      alt={alt}
      className="portfolio-item__img"
      onError={handleError}
    />
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('All Projects');

  const filtered = active === 'All Projects'
    ? projects
    : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <div>
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Portfolio</h2>
            <div className="divider"></div>
          </div>
        </div>

        <div className="portfolio__filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`portfolio__filter ${active === c ? 'portfolio__filter--active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((p, i) => (
            <div className="portfolio-item" key={i}>
              <div className="portfolio-item__img-wrap">
                <PortfolioImg src={p.img} fallbackImg={p.fallbackImg} alt={p.title} color={p.color} />
                <div className="portfolio-item__overlay">
                  <span className="portfolio-item__tag">{p.tag}</span>
                </div>
              </div>
              <div className="portfolio-item__info">
                <h4 className="portfolio-item__title">{p.title}</h4>
                <p className="portfolio-item__desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

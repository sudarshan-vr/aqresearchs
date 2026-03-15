import { useState } from 'react';
import './Portfolio.css';

const categories = ['All Projects', 'Research & Surveys', 'Web & App Design', 'Campaign'];

const projects = [
  {
    title: 'Market Research',
    cat: 'Research & Surveys',
    desc: 'We bridge the gap between customer needs and business solutions.',
    img: 'https://aqresearchs.com/mkt.webp',
    tag: 'Research',
  },
  {
    title: 'Digital Marketing',
    cat: 'Campaign',
    desc: 'Reaching the right audience, at the right time, with the right message.',
    img: 'https://aqresearchs.com/digital mkt.webp',
    tag: 'Marketing',
  },
  {
    title: 'Political Research & Survey',
    cat: 'Research & Surveys',
    desc: 'Understanding voters. Influencing outcomes.',
    img: 'https://aqresearchs.com/political research.jpg',
    tag: 'Survey',
  },
  {
    title: 'App Development',
    cat: 'Web & App Design',
    desc: 'User-centered interface development.',
    img: 'https://aqresearchs.com/mob application.webp',
    tag: 'Development',
  },
  {
    title: 'Social Media Campaign',
    cat: 'Campaign',
    desc: 'Strategic content to engage audiences, build brand awareness, and drive action.',
    img: 'https://aqresearchs.com/social campaign.jpg',
    tag: 'Social',
  },
];

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
                <img
                  src={p.img}
                  alt={p.title}
                  className="portfolio-item__img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'var(--bg-secondary)';
                  }}
                />
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

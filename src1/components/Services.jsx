import { ArrowUpRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'Custom Application Development',
    desc: 'Design and build custom marketing applications tailored to streamline campaign management, analytics, and client engagement.',
    tags: ['Web Apps', 'Mobile', 'Analytics'],
  },
  {
    num: '02',
    title: 'Strategic Business Planning',
    desc: 'Develop data-driven marketing strategies tailored to client goals, leveraging market research and consumer insights.',
    tags: ['Strategy', 'Research', 'Consulting'],
  },
  {
    num: '03',
    title: 'Brand & Identity Design',
    desc: 'Craft compelling brand identities that reflect the client\'s vision, values, and market positioning through strategic design.',
    tags: ['Branding', 'Design', 'Identity'],
  },
  {
    num: '04',
    title: 'Digital Marketing & SEO',
    desc: 'Execute targeted digital marketing campaigns to boost online visibility, engagement, and conversions across multiple channels.',
    tags: ['SEO', 'Campaigns', 'Growth'],
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <div className="divider"></div>
          </div>
          <p className="services__intro">
            End-to-end solutions including branding, digital marketing, SEO, and custom application development.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__top">
                <span className="service-card__num">{s.num}</span>
                <ArrowUpRight size={18} className="service-card__arrow" />
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__tags">
                {s.tags.map((t) => (
                  <span key={t} className="service-card__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

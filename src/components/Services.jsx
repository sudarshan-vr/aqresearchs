import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'Quantitative Research',
    desc: 'Large-sample structured studies — face-to-face, CATI, and online surveys with statistical analysis and insight-driven reporting.',
    tags: ['Surveys', 'CATI', 'Statistical Analysis'],
  },
  {
    num: '02',
    title: 'Qualitative Research',
    desc: 'IDIs, FGDs, and ethnographic sessions exploring behavior, motivations, and consumer attitudes across sectors.',
    tags: ['FGDs', 'IDIs', 'Ethnography'],
  },
  {
    num: '03',
    title: 'Automobile Research',
    desc: 'Vehicle ownership & usage behavior, service satisfaction studies, and brand perception analysis.',
    tags: ['Automobile', 'Brand Perception', 'UX'],
  },
  {
    num: '04',
    title: 'FMCG & Consumer Research',
    desc: 'Purchase drivers, brand switching patterns, consumption habits, and lifestyle behavior studies.',
    tags: ['FMCG', 'Consumer Behavior', 'Segmentation'],
  },
  {
    num: '05',
    title: 'Social & Political Research',
    desc: 'Policy feedback, social impact assessments, awareness & attitude studies, and pre-election surveys.',
    tags: ['Social', 'Political', 'Awareness'],
  },
  {
    num: '06',
    title: 'Digital Marketing & App Dev',
    desc: 'Targeted digital campaigns, SEO, branding, and custom marketing applications for client engagement.',
    tags: ['SEO', 'Campaigns', 'App Dev'],
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
            End-to-end research solutions spanning quantitative, qualitative, automobile, FMCG, social, and digital domains — with strict quality standards across every study.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <Link to="/services" className="service-card" key={i}>
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
            </Link>
          ))}
        </div>

        <div className="services__cta">
          <Link to="/services" className="hero__btn hero__btn--primary" style={{display:'inline-flex'}}>
            View Full Service Details
          </Link>
        </div>
      </div>
    </section>
  );
}

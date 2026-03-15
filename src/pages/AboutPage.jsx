import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { teamData } from '../components/teamData.js';
import './AboutPage.css';

const values = [
  { icon: '🎯', title: 'Accuracy First', desc: 'Every study is built on rigorous methodology, multi-level validation, and strict respondent screening.' },
  { icon: '🤝', title: 'Transparent Communication', desc: 'We believe consistent, open communication is the foundation of every long-term client partnership.' },
  { icon: '⏱️', title: 'Deadline-Driven', desc: 'Timely reporting is non-negotiable. We set realistic timelines and deliver on every commitment.' },
  { icon: '🌍', title: 'Pan-India Reach', desc: 'Our operational field network spans across states, enabling structured execution at scale.' },
  { icon: '🔬', title: 'Research Excellence', desc: 'From questionnaire design to final analysis, every step follows ethical research compliance standards.' },
  { icon: '📈', title: 'Actionable Insights', desc: 'We don\'t just deliver data — we deliver strategic implications that help clients grow.' },
];

const journey = [
  { year: 'Hansa Research', role: 'Founder — 8 years', desc: 'Deep roots in quantitative field research across India.' },
  { year: 'Intage', role: 'Founder — 1 year', desc: 'Exposure to international research methodologies and standards.' },
  { year: 'Market Xcel', role: 'Founder — 3 years', desc: 'Multi-sector project management across FMCG, auto, and social domains.' },
  { year: 'AQ Research', role: 'Founded', desc: 'Bringing together 15+ years of expertise under one focused research organization.' },
];

function BioCard({ member }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bio-card ${open ? 'bio-card--open' : ''}`}>
      <div className="bio-card__top">
        <div className="bio-card__img-wrap">
          <img
            src={member.img}
            alt={member.name}
            className="bio-card__img"
            onError={(e) => {
              e.target.style.display = 'none';
              const init = e.target.parentElement.querySelector('.bio-card__initials');
              if (init) init.style.display = 'flex';
            }}
          />
          <div className="bio-card__initials" style={{ display: 'none' }}>
            {member.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </div>
        </div>
        <div className="bio-card__summary">
          <h3 className="bio-card__name">{member.name}</h3>
          <span className="bio-card__role">{member.role}</span>
          {member.languages && (
            <div className="bio-card__langs">
              {member.languages.map(l => <span key={l} className="bio-card__lang">{l}</span>)}
            </div>
          )}
          <p className="bio-card__short">{member.shortDesc}</p>
          <div className="bio-card__actions">
            <button className="bio-card__toggle" onClick={() => setOpen(!open)}>
              {open ? <><ChevronUp size={13} /> Less</> : <><ChevronDown size={13} /> Full Bio</>}
            </button>
            <button className="bio-card__linkedin" aria-label="LinkedIn"><Linkedin size={13} /></button>
          </div>
        </div>
      </div>
      {open && (
        <div className="bio-card__bio">
          {member.fullBio.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ── Hero Banner ── */}
      <section className="page-hero">
        <div className="page-hero__bg-text">ABOUT</div>
        <div className="container page-hero__inner">
          <span className="section-label">Who We Are</span>
          <h1 className="page-hero__title">About <em>AQ Research</em></h1>
          <p className="page-hero__sub">
            A professional market research organization built on 15+ years of field expertise, pan-India reach, and an unwavering commitment to accuracy.
          </p>
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section className="about-overview">
        <div className="container about-overview__inner">
          <div className="about-overview__img-col">
            <div className="about-overview__img-wrap">
              <img src="https://aqresearchs.com/picture.jpg" alt="AQ Research" className="about-overview__img"
                onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="about-overview__badge">
                <span>15+</span>
                <small>Years of<br />Experience</small>
              </div>
            </div>
          </div>
          <div className="about-overview__content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Insight-Driven Research, Built on Experience</h2>
            <div className="divider"></div>
            <p>
              AQ Research is a professional market research organization specializing in quantitative and qualitative studies across sectors such as automobile, FMCG, consumer behavior, and social research. With strong field expertise and a Pan-India operational network, we deliver reliable data collection, structured execution, and insight-driven analysis tailored to client objectives.
            </p>
            <p>
              Our approach focuses on accuracy, quality control, and timely reporting, enabling clients to make informed business decisions. By providing actionable insights and maintaining strict research standards, AQ Research helps organizations improve strategy, understand market dynamics, and drive sustainable business growth.
            </p>
            <p>
              We believe that consistent project delivery, transparent communication, and deadline-driven reporting are key to building long-term partnerships and supporting our clients' success.
            </p>

            <div className="about-overview__journey">
              <h4 className="about-overview__journey-title">Founder's Professional Journey</h4>
              <div className="about-overview__timeline">
                {journey.map((j, i) => (
                  <div className="about-overview__titem" key={i}>
                    <div className="about-overview__titem-dot" />
                    <div>
                      <strong>{j.year}</strong>
                      <span>{j.role}</span>
                      <p>{j.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values">
        <div className="container">
          <div className="about-values__header">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider"></div>
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-card__icon">{v.icon}</div>
                <h4 className="value-card__title">{v.title}</h4>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Team ── */}
      <section id="team" className="about-team">
        <div className="container">
          <span className="section-label">The People Behind It</span>
          <h2 className="section-title">Meet Our Full Team</h2>
          <div className="divider"></div>
          <p className="about-team__intro">
            Experienced researchers, operators, and developers — united by a commitment to quality, accuracy, and client success.
          </p>
          <div className="about-team__grid">
            {teamData.map((member, i) => (
              <BioCard member={member} key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2 className="about-cta__title">Ready to Work with Us?</h2>
          <p className="about-cta__sub">Let's discuss your research requirements and build a solution tailored to your business goals.</p>
          <div className="about-cta__actions">
            <Link to="/contact" className="hero__btn hero__btn--primary" style={{display:'inline-flex'}}>Get In Touch</Link>
            <Link to="/services" className="hero__btn hero__btn--ghost" style={{display:'inline-flex'}}>View Services</Link>
          </div>
        </div>
      </section>

    </main>
  );
}

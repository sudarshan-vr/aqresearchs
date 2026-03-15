import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import './ServicesPage.css';

const qualSteps = [
  { num: '01', title: 'Objective Alignment', items: ['Define exploration goals', 'Identify research themes'] },
  { num: '02', title: 'Discussion Guide Development', items: ['Create moderator guide', 'Flow: warm-up → core topics → probing'] },
  { num: '03', title: 'Participant Recruitment', items: ['Screen respondents (auto users, FMCG buyers, social segments)', 'Ensure profile accuracy'] },
  { num: '04', title: 'Session Planning', items: ['Arrange venue / online platform', 'Logistics and scheduling'] },
  { num: '05', title: 'Moderation', items: ['Conduct IDIs / FGDs / ethnographic sessions', 'Encourage open discussion', 'Capture emotional & behavioral cues'] },
  { num: '06', title: 'Observation & Documentation', items: ['Note-taking and recordings', 'Observer feedback'] },
  { num: '07', title: 'Thematic Analysis', items: ['Identify patterns and insights', 'Behavioral mapping'] },
  { num: '08', title: 'Insight Reporting', items: ['Narrative storytelling', 'Consumer journeys', 'Strategic implications'] },
];

const quantSteps = [
  { num: '01', title: 'Project Understanding', items: ['Understand client objectives and key research questions', 'Define target audience and geography', 'Finalize sampling framework'] },
  { num: '02', title: 'Questionnaire Design', items: ['Develop structured questionnaire aligned with objectives', 'Include screening, behavioral, usage, and perception metrics', 'Client review and approval'] },
  { num: '03', title: 'Sampling & Field Planning', items: ['Define sample size and quotas', 'Recruit trained field investigators', 'Allocate regions/routes/interview targets'] },
  { num: '04', title: 'Pilot Testing', items: ['Conduct pilot interviews', 'Identify questionnaire gaps or logic issues', 'Refine tools'] },
  { num: '05', title: 'Field Execution', items: ['Face-to-face / CATI / Online surveys', 'Respondent screening as per criteria', 'Real-time monitoring of productivity'] },
  { num: '06', title: 'Quality Control', items: ['Back checks and validations', 'GPS/photo verification where applicable', 'Daily data audits'] },
  { num: '07', title: 'Data Processing', items: ['Cleaning and coding responses', 'Tabulation and statistical analysis'] },
  { num: '08', title: 'Reporting', items: ['Insight-driven analysis', 'Charts, trends, comparisons', 'Actionable recommendations'] },
];

const sectors = [
  {
    icon: '🚗',
    title: 'Automobile Studies',
    items: ['Vehicle ownership & usage behavior', 'Service satisfaction', 'Brand perception'],
  },
  {
    icon: '🛒',
    title: 'FMCG Studies',
    items: ['Purchase drivers', 'Brand switching', 'Consumption habits'],
  },
  {
    icon: '👥',
    title: 'Consumer & Social Research',
    items: ['Lifestyle behavior', 'Awareness & attitude studies', 'Policy/social impact feedback'],
  },
];

const qualityStandards = [
  'Strict respondent screening',
  'Trained investigators/moderators',
  'Multi-level validation',
  'Ethical research compliance',
  'Timely reporting',
  'GPS/photo field verification',
  'Daily data audits',
  'Client review checkpoints',
];

const serviceDetails = [
  { label: 'Duration', value: 'As per project scope' },
  { label: 'Team Size', value: '20+ specialists' },
  { label: 'Delivery', value: 'Bi-weekly reports' },
  { label: 'Support', value: '24/7 monitoring' },
];

const allServices = [
  'Digital Marketing',
  'Market Research',
  'Political Research & Survey',
  'Social Media Campaigns',
  'Mobile Application Development',
  'Automobile Research',
  'FMCG Studies',
  'Consumer Behavior Studies',
];

function ProcessStep({ step, index }) {
  const [open, setOpen] = useState(index < 2);
  return (
    <div className={`process-step ${open ? 'process-step--open' : ''}`}>
      <button className="process-step__header" onClick={() => setOpen(!open)}>
        <div className="process-step__left">
          <span className="process-step__num">{step.num}</span>
          <span className="process-step__title">{step.title}</span>
        </div>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <ul className="process-step__items">
          {step.items.map((item, i) => (
            <li key={i}>
              <CheckCircle2 size={13} className="process-step__check" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const [activeMethod, setActiveMethod] = useState('qualitative');

  return (
    <main className="services-page">

      {/* ── Hero Banner ── */}
      <section className="page-hero">
        <div className="page-hero__bg-text">SERVICES</div>
        <div className="container page-hero__inner">
          <span className="section-label">What We Offer</span>
          <h1 className="page-hero__title">Research <em>Services</em></h1>
          <p className="page-hero__sub">
            End-to-end market research solutions — quantitative and qualitative — across automobile, FMCG, consumer, and social sectors.
          </p>
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* ── Service Overview Cards ── */}
      <section className="svc-overview">
        <div className="container">
          <div className="svc-overview__grid">
            {[
              { icon: '📊', title: 'Quantitative Research', desc: 'Large-scale structured surveys with statistical analysis, GPS field verification, and insight-driven reports.' },
              { icon: '🎙️', title: 'Qualitative Research', desc: 'IDIs, FGDs, and ethnographic sessions to explore deep consumer behaviors, motivations, and attitudes.' },
              { icon: '🚗', title: 'Sector Studies', desc: 'Specialized studies across automobile, FMCG, consumer behavior, and social/political research.' },
              { icon: '📱', title: 'Digital & App Services', desc: 'Digital marketing campaigns, SEO, brand identity, and custom application development.' },
            ].map((card, i) => (
              <div className="svc-overview-card" key={i}>
                <div className="svc-overview-card__icon">{card.icon}</div>
                <h3 className="svc-overview-card__title">{card.title}</h3>
                <p className="svc-overview-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital Marketing Feature ── */}
      <section className="svc-feature">
        <div className="container svc-feature__inner">
          <div className="svc-feature__img-col">
            <div className="svc-feature__img-wrap">
              <img src="https://aqresearchs.com/mar.webp" alt="Digital Marketing" className="svc-feature__img"
                onError={(e) => { e.target.style.display = 'none'; }} />
              <span className="svc-feature__badge">Premium Service</span>
            </div>
          </div>
          <div className="svc-feature__content">
            <span className="section-label">Featured Service</span>
            <h2 className="section-title">Digital Marketing Strategy & Implementation</h2>
            <div className="divider"></div>
            <p className="svc-feature__desc">
              A clear, structured approach — from market research and content planning to campaign execution and optimization. Each step emphasizes measurable outcomes, ensuring creativity aligns with commercial objectives.
            </p>
            <div className="svc-feature__highlights">
              {[
                { title: 'Analytics & Reporting', desc: 'Comprehensive tracking and performance analysis' },
                { title: 'Audience Targeting', desc: 'Precise demographic and behavioral targeting' },
                { title: 'Multi-Channel Campaigns', desc: 'Integrated social media and search marketing' },
                { title: 'Strategy Optimization', desc: 'Continuous refinement for maximum ROI' },
              ].map((h, i) => (
                <div className="svc-feature__highlight" key={i}>
                  <CheckCircle2 size={15} className="svc-feature__check" />
                  <div>
                    <strong>{h.title}</strong>
                    <span>{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="svc-feature__process">
              <h4>Our Process</h4>
              {[
                { n: '01', t: 'Discovery & Analysis', d: 'Craft strategies that attract new audiences while retaining existing ones through value-driven digital interactions.' },
                { n: '02', t: 'Strategy Development', d: 'Audience insights gathered from Meta Audience Manager and Google Analytics to define target segments and personas.' },
                { n: '03', t: 'Implementation', d: 'Deploy balanced organic and paid marketing strategies across selected channels.' },
                { n: '04', t: 'Monitoring & Optimization', d: 'Campaign refinement based on real data — website traffic, conversions, and engagement metrics.' },
              ].map((p, i) => (
                <div className="svc-feature__proc-item" key={i}>
                  <span className="svc-feature__proc-num">{p.n}</span>
                  <div>
                    <strong>{p.t}</strong>
                    <p>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Methodology ── */}
      <section className="svc-methodology">
        <div className="container">
          <div className="svc-methodology__header">
            <span className="section-label">Research Excellence</span>
            <h2 className="section-title">Research Methodology</h2>
            <div className="divider"></div>
            <p className="svc-methodology__intro">
              Our research processes are built on structure, quality control, and insight delivery — whether qualitative or quantitative.
            </p>
          </div>

          {/* Tab toggle */}
          <div className="svc-methodology__tabs">
            <button
              className={`svc-methodology__tab ${activeMethod === 'qualitative' ? 'svc-methodology__tab--active' : ''}`}
              onClick={() => setActiveMethod('qualitative')}
            >
              🎙️ Qualitative Research
            </button>
            <button
              className={`svc-methodology__tab ${activeMethod === 'quantitative' ? 'svc-methodology__tab--active' : ''}`}
              onClick={() => setActiveMethod('quantitative')}
            >
              📊 Quantitative Research
            </button>
          </div>

          <div className="svc-methodology__body">
            <div className="svc-methodology__steps">
              {(activeMethod === 'qualitative' ? qualSteps : quantSteps).map((step, i) => (
                <ProcessStep step={step} index={i} key={`${activeMethod}-${i}`} />
              ))}
            </div>

            <aside className="svc-methodology__sidebar">
              <div className="svc-sidebar-card">
                <h4>Sector Applications</h4>
                {sectors.map((s, i) => (
                  <div className="svc-sidebar-sector" key={i}>
                    <div className="svc-sidebar-sector__head">
                      <span>{s.icon}</span>
                      <strong>{s.title}</strong>
                    </div>
                    <ul>
                      {s.items.map((item, j) => (
                        <li key={j}><CheckCircle2 size={11} />{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="svc-sidebar-card svc-sidebar-card--quality">
                <h4>✅ Quality Standards</h4>
                <ul className="svc-sidebar-quality">
                  {qualityStandards.map((q, i) => (
                    <li key={i}><CheckCircle2 size={12} />{q}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Service Info + List ── */}
      <section className="svc-info">
        <div className="container svc-info__inner">
          <div className="svc-info__details">
            <h3 className="svc-info__title">Service Details</h3>
            <div className="svc-info__grid">
              {serviceDetails.map((d, i) => (
                <div className="svc-info__item" key={i}>
                  <span className="svc-info__label">{d.label}</span>
                  <span className="svc-info__value">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="svc-info__list-wrap">
            <h3 className="svc-info__title">All Our Services</h3>
            <ul className="svc-info__list">
              {allServices.map((s, i) => (
                <li key={i}><span className="svc-info__dot" />{s}</li>
              ))}
            </ul>
          </div>

          <div className="svc-info__contact">
            <h3 className="svc-info__title">Need Help?</h3>
            <p>Contact us for more details and a custom quote.</p>
            <a href="tel:+919168616999" className="svc-info__phone">+91 9168616999</a>
            <a href="mailto:info@aqresearchs.com" className="svc-info__email">info@aqresearchs.com</a>
            <Link to="/contact" className="hero__btn hero__btn--primary" style={{display:'inline-flex', marginTop: '16px', width:'100%', justifyContent:'center'}}>
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

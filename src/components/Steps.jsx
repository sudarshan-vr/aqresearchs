import './Steps.css';

const steps = [
  {
    num: '01',
    title: 'Project Planning',
    desc: 'Develop detailed project plans outlining marketing objectives, target audiences, timelines, and key deliverables.',
  },
  {
    num: '02',
    title: 'Development Phase',
    desc: 'Coordinate resources and track progress to ensure campaigns are executed efficiently and achieve desired outcomes.',
  },
  {
    num: '03',
    title: 'Testing & QA',
    desc: 'Continuously refine campaigns based on data insights to maximize engagement, conversions, and ROI.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'Strategically launch marketing campaigns across selected channels to generate maximum visibility and impact.',
  },
];

export default function Steps() {
  return (
    <section id="steps" className="steps">
      <div className="container">
        <div className="steps__header">
          <span className="section-label">Our Process</span>
          <h2 className="section-title">How We Work</h2>
          <div className="divider"></div>
          <p className="steps__intro">
            From strategy development to execution and optimization, each step is designed to align with client goals.
          </p>
        </div>

        <div className="steps__track">
          <div className="steps__line"></div>
          {steps.map((step, i) => (
            <div className="step" key={i}>
              <div className="step__dot">
                <div className="step__dot-inner"></div>
              </div>
              <div className="step__card">
                <span className="step__num">{step.num}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

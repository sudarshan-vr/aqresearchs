import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__image-col">
          <div className="about__img-wrapper">
            <img
              src="https://aqresearchs.com/picture.jpg"
              alt="AQ Research Team"
              className="about__img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="about__badge">
              <span className="about__badge-num">10+</span>
              <span className="about__badge-lbl">Years of<br />Experience</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Empowering Businesses Through Innovative Solutions</h2>
          <div className="divider"></div>
          <p className="about__desc">
            AQ-Research offers comprehensive market research services, including surveys, advertising, automotive, consumer, and social research. We specialize in qualitative and quantitative studies, online panels, and political analysis.
          </p>
          <p className="about__desc">
            Committed to innovation and excellence, AQ-Research delivers high-quality results, ensuring client satisfaction and sustainable growth.
          </p>

          <div className="about__pillars">
            {[
              { title: 'Expert Consulting', desc: 'Strategic implementation of emerging technologies drives competitive advantage and sustainable growth.' },
              { title: 'Innovative Solutions', desc: 'Cutting-edge frameworks and methodologies to deliver scalable solutions for complex challenges.' },
              { title: 'Growth Strategy', desc: 'Digital transformation approaches that enable sustainable competitive advantages in your market.' },
            ].map((item, i) => (
              <div className="about__pillar" key={i}>
                <div className="about__pillar-num">0{i + 1}</div>
                <div>
                  <h4 className="about__pillar-title">{item.title}</h4>
                  <p className="about__pillar-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about__actions">
            <a href="#services" className="hero__btn hero__btn--primary" style={{display:'inline-flex'}}>Learn More</a>
            <a href="#contact" className="hero__btn hero__btn--ghost" style={{display:'inline-flex'}}>Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Linkedin } from 'lucide-react';
import './Team.css';

const team = [
  {
    name: 'Manjunath Sathya',
    role: 'Founder & Managing Director',
    desc: 'Managing Director @ AQ Research | Digital Strategy | Smart Insights | Market Research.',
    img: 'https://aqresearchs.com/manju.jpg',
  },
  {
    name: 'Jagadish R',
    role: 'Sr. Operations Manager',
    desc: 'Able to work on own initiative and as part of a team. Leadership skills in managing, developing and motivating teams.',
    img: 'https://aqresearchs.com/jagdish.jpg',
  },
  {
    name: 'Hemath Kumar',
    role: 'Operation Director',
    desc: 'Define clear operational directions to align marketing activities with business objectives and client expectations.',
    img: 'https://aqresearchs.com/hemath.png',
  },
  {
    name: 'Jemsy N K',
    role: 'Operation Manager',
    desc: 'Dedicated to maintaining high quality standards. Quality experience in external audits and generating audit reports.',
    img: 'https://aqresearchs.com/jemsy.jpeg',
  },
  {
    name: 'Dhanush S',
    role: 'Business Development Manager',
    desc: 'Involved in generating prospective business leads and driving growth through strategic partnerships.',
    img: 'https://aqresearchs.com/dhanush.jpg',
  },
  {
    name: 'Chandana CL',
    role: 'Project Executive',
    desc: 'We strive to achieve sustainable growth and make a positive impact through our services.',
    img: 'https://aqresearchs.com/chandana.jpeg',
  },
  {
    name: 'Greeshma S',
    role: 'Project Executive',
    desc: 'Our goals are to innovate continuously and deliver exceptional client service to drive long-term success.',
    img: 'https://aqresearchs.com/greeshma.jpeg',
  },
  {
    name: 'Sunil U',
    role: 'Project Executive',
    desc: 'Provide a mix of qualitative and quantitative research for a comprehensive market view.',
    img: 'https://aqresearchs.com/sunil.jpg',
  },
  {
    name: 'Vamshikrishna CH',
    role: 'Project Executive',
    desc: 'Identify and analyze consumer trends, preferences, and behaviors through robust research methodologies.',
    img: 'https://aqresearchs.com/vamshi.jpg',
  },
  {
    name: 'Aneesh B',
    role: 'Project Executive Leader',
    desc: 'Detail-oriented and growth-driven professional with strong communication and interpersonal skills.',
    img: 'https://aqresearchs.com/aneesh.png',
  },
  {
    name: 'Sudarshan VR',
    role: 'Lead Developer',
    desc: 'Self-learner updated with new technologies and trends in IT. Can design & develop software, web and mobile applications.',
    img: 'https://aqresearchs.com/sudarshan.jpg',
  },
  {
    name: 'Sarah Bi Bi R',
    role: 'Developer',
    desc: 'Staying ahead of market changes by continuously monitoring industry developments and emerging trends.',
    img: 'https://aqresearchs.com/sarah.jpg',
  },
  {
    name: 'Alfa Bi',
    role: 'Project Executive',
    desc: 'Focused on optimizing performance, reducing costs, and aligning operations with business objectives.',
    img: 'https://aqresearchs.com/alfa.jpg',
  },
  {
    name: 'D. Avinash',
    role: 'Project Manager Operations',
    desc: 'Driving operational excellence and managing cross-functional teams to deliver outstanding project results.',
    img: 'https://aqresearchs.com/Avinash.png',
  },
];

export default function Team() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team__header">
          <span className="section-label">The People Behind It</span>
          <h2 className="section-title">Our Team</h2>
          <div className="divider"></div>
          <p className="team__intro">
            Collaborators, problem-solvers, and teammates. Our team thrives on creativity, trust, and a shared mission to deliver outstanding results.
          </p>
        </div>

        <div className="team__grid">
          {team.map((member, i) => (
            <div
              className={`team-card ${hovered === i ? 'team-card--hovered' : ''}`}
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="team-card__img-wrap">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-card__img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('team-card__img-wrap--fallback');
                    const initials = e.target.parentElement.querySelector('.team-card__initials');
                    if (initials) initials.style.display = 'flex';
                  }}
                />
                <div className="team-card__initials" style={{ display: 'none' }}>
                  {member.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div className="team-card__hover-layer">
                  <p className="team-card__desc">{member.desc}</p>
                  <button className="team-card__linkedin" aria-label="LinkedIn">
                    <Linkedin size={15} />
                  </button>
                </div>
              </div>
              <div className="team-card__info">
                <h4 className="team-card__name">{member.name}</h4>
                <span className="team-card__role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

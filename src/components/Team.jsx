import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight } from 'lucide-react';
import { teamData } from './teamData.js';
import './Team.css';

export default function Team({ preview = true }) {
  const [hovered, setHovered] = useState(null);
  const displayed = preview ? teamData.slice(0, 5) : teamData;

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team__header">
          <div>
            <span className="section-label">The People Behind It</span>
            <h2 className="section-title">Leadership Team</h2>
            <div className="divider"></div>
          </div>
          <p className="team__intro">
            Collaborators, problem-solvers, and teammates. Our team thrives on creativity, trust, and a shared mission to deliver outstanding results.
          </p>
        </div>

        <div className="team__grid">
          {displayed.map((member, i) => (
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
                    const init = e.target.parentElement.querySelector('.team-card__initials');
                    if (init) init.style.display = 'flex';
                  }}
                />
                <div className="team-card__initials" style={{ display: 'none' }}>
                  {member.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div className="team-card__hover-layer">
                  <p className="team-card__desc">{member.shortDesc}</p>
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

        {preview && (
          <div className="team__footer">
            <Link to="/about#team" className="team__read-more">
              Meet the Full Team <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

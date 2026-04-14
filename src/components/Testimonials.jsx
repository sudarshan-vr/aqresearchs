import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    text: 'Working with AQ Research was a great experience. Their thorough research and timely reports exceeded our expectations.',
    name: 'Darshan I. Gowda',
    role: 'Client',
    initials: 'DG',
  },
  {
    text: 'Cooperative and supportive team. They understood our needs from the very start and delivered exceptional results.',
    name: 'Vanitha Vani',
    role: 'Client',
    initials: 'VV',
  },
  {
    text: 'Nice ambition and great drive. The team is passionate about what they do and it really shows in their work.',
    name: 'Sathyanarayan Sathya',
    role: 'Client',
    initials: 'SS',
  },
  {
    text: 'Expertise team that truly understands the market. Their insights helped us make critical business decisions.',
    name: 'Monisha Manjunath',
    role: 'Client',
    initials: 'MM',
  },
  {
    text: 'Great company with top-quality research and service! Would highly recommend to any organization.',
    name: 'Ajay Priya',
    role: 'Client',
    initials: 'AP',
  },
  {
    text: 'Insightful, accurate, and dependable — everything you want in a market research firm. Truly a cut above the rest.',
    name: 'Prajwal VS',
    role: 'Client',
    initials: 'PV',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <div>
            <span className="section-label">What Clients Say</span>
            <h2 className="section-title">Testimonials</h2>
            <div className="divider"></div>
          </div>
          <div className="testimonials__controls">
            <button className="testimonials__btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <span className="testimonials__count">
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <button className="testimonials__btn" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="testimonials__grid">
          {visible.map((t, i) => (
            <div className={`testimonial-card ${i === 0 ? 'testimonial-card--featured' : ''}`} key={`${current}-${i}`}>
              <Quote size={28} className="testimonial-card__quote" />
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

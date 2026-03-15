import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import './ContactPage.css';

const branches = [
  {
    label: 'Bangalore HQ',
    address: '13/1 17th Main Road, Below KFC, MRCR Layout Vijaynagar, Bangalore, Karnataka 560040, India',
    mapLink: 'https://maps.google.com/?q=MRCR+Layout+Vijaynagar+Bangalore',
  },
  {
    label: 'Cochin',
    address: 'No. 301, The HUB, Third Floor, Paramara Road, Ernakulam North, Cochin – 682018, India',
    mapLink: 'https://maps.google.com/?q=Ernakulam+North+Cochin',
  },
  {
    label: 'Chennai',
    address: 'Flat No S2 Gee Gee Great, Manikandan Nagar, Kundrathur, Chennai 600069',
    mapLink: 'https://maps.google.com/?q=Kundrathur+Chennai',
  },
  {
    label: 'Hyderabad',
    address: 'Flat no-505 Hb Colony, Moual-Ali, Near Unani Bus Stop, 500040 Hyderabad',
    mapLink: 'https://maps.google.com/?q=Moula+Ali+Hyderabad',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1800);
  };

  return (
    <main className="contact-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero__bg-text">CONTACT</div>
        <div className="container page-hero__inner">
          <span className="section-label">Reach Out</span>
          <h1 className="page-hero__title">Get In <em>Touch</em></h1>
          <p className="page-hero__sub">
            For inquiries, research collaborations, and partnerships — we're always open to new ideas. Get in touch with our team across any of our India offices.
          </p>
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* ── Quick Info Bar ── */}
      <div className="contact-bar">
        <div className="container contact-bar__inner">
          <div className="contact-bar__item">
            <Phone size={16} />
            <div>
              <span>Call Us</span>
              <a href="tel:+919168616999">+91 9168616999</a>
            </div>
          </div>
          <div className="contact-bar__item">
            <Mail size={16} />
            <div>
              <span>Email Us</span>
              <a href="mailto:info@aqresearchs.com">info@aqresearchs.com</a>
            </div>
          </div>
          <div className="contact-bar__item">
            <Clock size={16} />
            <div>
              <span>Working Hours</span>
              <span>Mon – Sat: 09AM – 07PM</span>
            </div>
          </div>
          <div className="contact-bar__item">
            <MapPin size={16} />
            <div>
              <span>Head Office</span>
              <span>Bangalore, Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <section className="contact-main">
        <div className="container contact-main__inner">

          {/* Form */}
          <div className="contact-form-col">
            <div className="contact-form-wrap">
              <h2 className="contact-form-wrap__title">Send Us a Message</h2>
              <p className="contact-form-wrap__sub">We're always open to new ideas, partnerships, and research inquiries. Fill in the form and we'll get back to you soon.</p>

              {status === 'sent' ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✓</div>
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="contact-success__reset">Send Another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                    </div>
                    <div className="contact-form__field">
                      <label>Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label>Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required />
                  </div>
                  <div className="contact-form__field">
                    <label>Your Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or research requirements..." rows={6} required />
                  </div>
                  <button type="submit" className="contact-form__submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : <><span>Send Message</span><Send size={14} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Offices */}
          <div className="contact-offices-col">
            <h3 className="contact-offices__title">Our Offices</h3>
            <div className="contact-offices__grid">
              {branches.map((b, i) => (
                <div className="contact-office" key={i}>
                  <div className="contact-office__header">
                    <div className="contact-office__icon"><MapPin size={14} /></div>
                    <strong className="contact-office__label">{b.label}</strong>
                  </div>
                  <p className="contact-office__addr">{b.address}</p>
                  <a href={b.mapLink} target="_blank" rel="noopener noreferrer" className="contact-office__map">
                    View on Maps →
                  </a>
                </div>
              ))}
            </div>

            <div className="contact-social-card">
              <h4>Follow Us</h4>
              <div className="contact-social-links">
                {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map(s => (
                  <a href="#" key={s} className="contact-social-link">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

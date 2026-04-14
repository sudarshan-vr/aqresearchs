import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import './Contact.css';

// TODO: Replace with your Formspree form ID from https://formspree.io
const FORMSPREE_ID = 'YOUR_FORM_ID';

const branches = [
  {
    label: 'Bangalore HQ',
    address: '13/1 17th Main Road, Below KFC, MRCR Layout Vijaynagar, Bangalore, Karnataka 560040, India',
  },
  {
    label: 'Cochin',
    address: 'No. 301, The HUB, Third Floor, Paramara Road, Ernakulam North, Cochin – 682018, India',
  },
  {
    label: 'Chennai',
    address: 'Flat No S2 Gee Gee Great, Manikandan Nagar, Kundrathur, Chennai 600069',
  },
  {
    label: 'Hyderabad',
    address: 'Flat no-505 Hb Colony, Moual-Ali, Near Unani Bus Stop, 500040 Hyderabad',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/maqaygke`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="divider"></div>
          <p className="contact__intro">
            For inquiries, connect with us to explore research collaborations and partnerships.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon"><Phone size={15} /></div>
              <div>
                <div className="contact__detail-label">Call Us</div>
                <a href="tel:+919168616999" className="contact__detail-value">+91 9168616999</a>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><Mail size={15} /></div>
              <div>
                <div className="contact__detail-label">Email Us</div>
                <a href="mailto:info@aqresearchs.com" className="contact__detail-value">info@aqresearchs.com</a>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><Clock size={15} /></div>
              <div>
                <div className="contact__detail-label">Working Hours</div>
                <div className="contact__detail-value">Mon – Sat: 09AM – 07PM</div>
              </div>
            </div>
          </div>

          <div className="contact__branches">
            <h4 className="contact__branches-title">Our Offices</h4>
            {branches.map((b, i) => (
              <div className="contact__branch" key={i}>
                <div className="contact__branch-icon"><MapPin size={13} /></div>
                <div>
                  <div className="contact__branch-label">{b.label}</div>
                  <div className="contact__branch-addr">{b.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__form-wrap">
          <h3 className="contact__form-title">Send Us a Message</h3>
          <p className="contact__form-sub">We're always open to new ideas, partnerships, and inquiries.</p>

          {status === 'sent' ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              {status === 'error' && (
                <p className="contact__error">Something went wrong. Please try again or email us directly.</p>
              )}
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                    className="contact__input" placeholder="John Doe" required />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className="contact__input" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                  className="contact__input" placeholder="How can we help?" required />
              </div>
              <div className="contact__field">
                <label className="contact__label">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange}
                  className="contact__input contact__textarea"
                  placeholder="Tell us about your project..." rows={5} required />
              </div>
              <button type="submit" className="contact__submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <span className="contact__submit-loading">Sending…</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

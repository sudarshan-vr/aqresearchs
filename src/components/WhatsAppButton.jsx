import { Phone } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '9964301866';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
};

export default WhatsAppButton;

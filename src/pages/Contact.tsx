import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactSection } from '../components/contact/ContactSection';
import { HelpCTA } from '../components/home/HelpCTA';

export function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <div className="bg-white">
      <HelpCTA />
      <ContactSection />
    </div>);

}
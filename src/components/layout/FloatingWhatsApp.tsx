import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generateGeneralInquiry } from '../../utils/whatsapp';

function WhatsAppLogo({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="whatsappGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#25d366', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1faa54', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Outer speech bubble */}
      <path
        d="M20.506 3.368A10.234 10.234 0 0 0 5.706 3.368a10.215 10.215 0 0 0 0 14.464L2.324 22.1l5.202-1.664a10.197 10.197 0 0 0 4.878 1.24c5.656 0 10.26-4.595 10.26-10.251 0-2.739-1.093-5.312-3.077-7.247zm-7.174 15.749a8.464 8.464 0 0 1-4.312-1.177l-.309-.186-3.204 1.026 1.044-3.145-.198-.32a8.46 8.46 0 0 1 1.293-4.286c1.94-2.834 5.347-4.614 8.938-4.614 4.72 0 8.564 3.83 8.564 8.562 0 2.293-.899 4.446-2.532 6.065-1.633 1.62-3.802 2.51-6.032 2.51zm4.578-6.438c-.25-.126-1.479-.728-1.71-.81-.23-.084-.398-.125-.565.126-.167.25-.647.815-.794.982-.147.167-.293.188-.543.063-.25-.126-1.058-.39-2.016-1.246-.745-.665-1.248-1.486-1.394-1.738-.147-.25-.015-.387.11-.512.113-.112.25-.293.375-.44.125-.147.167-.25.25-.419.084-.167.042-.313-.021-.438-.063-.126-.565-1.364-.773-1.868-.204-.488-.41-.422-.565-.43-.146-.008-.313-.008-.482-.008-.167 0-.438.063-.668.313-.23.25-.878.857-.878 2.088 0 1.23.898 2.42 1.022 2.586.125.167 1.768 2.704 4.278 3.79.597.257 1.064.41 1.427.526.598.19 1.144.164 1.576.1.481-.072 1.483-.606 1.691-1.19.209-.586.209-1.087.146-1.19-.063-.104-.23-.167-.481-.293z"
        fill="#fff" />
      {/* Background green circle */}
      <circle cx="12" cy="12" r="11" fill="url(#whatsappGradient)" />
      {/* Phone receiver */}
      <g transform="translate(12, 12)">
        <path
          d="M-1.5-2.5c-.4 0-.8.2-.9.6l-.8 2c-.1.3.1.7.4.8l1-.3c-.3.7-.8 1.3-1.5 1.6l-.4-.8c-.2-.3-.6-.4-.9-.3l-2 .7c-.3.1-.5.4-.5.8v1.2c0 .3.2.6.6.6 2.8 0 5.4-1.1 7.3-3 1.9-1.9 3-4.5 3-7.3 0-.4-.2-.6-.6-.6h-1.2c-.4 0-.8.2-.9.6l-.8 2c-.1.3.1.7.4.8l1-.3c-.3.7-.8 1.3-1.5 1.6l-.4-.8c-.2-.3-.6-.4-.9-.3l-2 .7z"
          fill="#fff" />
      </g>
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={generateGeneralInquiry()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-5 right-4 z-[60] flex items-center gap-2 rounded-full bg-[#1faa54] py-3.5 pl-4 pr-4 text-white shadow-lift transition-colors hover:bg-[#178c45] sm:bottom-7 sm:right-6"
      aria-label="Chat with us on WhatsApp">
      
      <WhatsAppLogo size={22} />
      <motion.span
        initial={false}
        animate={{ width: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-wider">
        
        Chat With Us
      </motion.span>
    </motion.a>);

}
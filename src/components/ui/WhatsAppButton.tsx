import React from 'react';

type Variant = 'solid' | 'outline' | 'dark' | 'green';
type Size = 'sm' | 'md' | 'lg';

interface WhatsAppButtonProps {
  href: string;
  label?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  solid: 'bg-accent text-white hover:bg-accent-dark',
  outline:
  'border border-zinc-300 bg-white text-ink hover:border-ink hover:bg-ink hover:text-white',
  dark: 'bg-ink text-white hover:bg-accent',
  green: 'bg-[#1faa54] text-white hover:bg-[#178c45]'
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-[11px] gap-1.5',
  md: 'h-11 px-5 text-xs gap-2',
  lg: 'h-12 px-7 text-sm gap-2.5'
};

function WhatsAppLogo({ size, className }: { size: Size; className?: string }) {
  const iconSize = size === 'sm' ? 14 : 16;
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
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

export function WhatsAppButton({
  href,
  label = 'WhatsApp Inquiry',
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  className = ''
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center rounded-md font-bold uppercase tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-[0.98] ${
      variants[variant]} ${
      sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}>
      
      <WhatsAppLogo
        size={size}
        className="transition-transform duration-200 group-hover:-rotate-6" />
      
      {label}
    </a>);

}
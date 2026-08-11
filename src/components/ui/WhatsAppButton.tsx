import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

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
  green: 'bg-[#25D366] text-white hover:bg-[#1faa54]'
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-[11px] gap-1.5',
  md: 'h-11 px-5 text-xs gap-2',
  lg: 'h-12 px-7 text-sm gap-2.5'
};

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
      
      <FaWhatsapp
        className="transition-transform duration-200 group-hover:-rotate-6" />
      
      {label}
    </a>);

}
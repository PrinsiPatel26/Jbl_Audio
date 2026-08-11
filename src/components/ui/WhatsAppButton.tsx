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
      {/* Green background */}
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="#25d366" />
      {/* Phone icon */}
      <path
        d="M16.6915026,12.4744748 C16.2181407,12.1908626 15.5994036,12.1147654 15.0151496,12.1147654 C14.0543717,12.1147654 13.2455166,12.5400173 12.8191754,12.8231906 C12.4024765,12.1908626 11.8530496,11.4894347 10.0152624,11.4894347 C8.40522491,11.4894347 7.45353159,12.1474346 7.08011796,12.5400173 L7.08011796,5.22513606 C7.08011796,4.99363001 6.94728024,4.82073409 6.73521474,4.82073409 C6.54007956,4.82073409 6.3974225,4.99363001 6.3974225,5.22513606 L6.3974225,17.5315722 C6.3974225,18.0453486 6.81378157,18.4562941 7.32244443,18.4562941 C7.83110729,18.4562941 8.24746635,18.0453486 8.24746635,17.5315722 L8.24746635,14.5144827 C8.58682006,14.7746379 9.38855245,15.3491018 10.4946525,15.3491018 C10.4946525,15.3491018 12.0420126,15.3491018 12.0420126,15.3491018 C12.0420126,15.3491018 12.3634947,15.3491018 12.3634947,15.3491018 C12.4533046,15.8629786 12.9008049,16.2739242 13.4094677,16.2739242 C13.9181305,16.2739242 14.3656308,15.8629786 14.4554407,15.3491018 C14.4554407,15.3491018 15.5618788,15.3491018 16.0151496,15.3491018 C16.0151496,15.3491018 16.9346639,15.3491018 16.9346639,15.3491018 C17.4432974,15.3491018 17.8596564,14.9447764 17.8596564,14.4269766 C17.8596564,13.9100872 17.4432974,13.5057617 16.9346639,13.5057617 L15.0151496,13.5057617 C14.8512025,13.5057617 14.5910821,13.3825829 14.5910821,13.1207126 C14.5910821,13.0360319 14.6106954,12.9522878 14.6554185,12.8752738 C14.8001751,12.6149185 15.3996425,12.0405283 16.0151496,12.0405283 C16.6313403,12.0405283 17.1270118,12.2197548 17.4726869,12.4744748 C17.8596564,12.7562477 18.3662389,12.6129604 18.6274026,12.2197548 C18.8885663,11.8265491 18.7485098,11.3159275 18.3662389,11.034446 Z"
        fill="#fff" />
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
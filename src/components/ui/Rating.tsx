import React from 'react';
import { StarIcon } from 'lucide-react';

interface RatingProps {
  value: number;
  reviews?: number;
  dark?: boolean;
  size?: 'sm' | 'md';
}

export function Rating({ value, reviews, dark = false, size = 'sm' }: RatingProps) {
  const iconSize = size === 'sm' ? 12 : 15;
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="flex items-center gap-0.5"
        aria-label={`Rated ${value} out of 5`}>
        
        {[0, 1, 2, 3, 4].map((i) =>
        <StarIcon
          key={i}
          size={iconSize}
          className={
          i < Math.round(value) ?
          'fill-gold text-gold' :
          dark ?
          'text-white/25' :
          'text-zinc-300'
          } />

        )}
      </div>
      <span
        className={`text-xs font-semibold ${dark ? 'text-white/70' : 'text-zinc-600'}`}>
        
        {value.toFixed(1)}
        {typeof reviews === 'number' &&
        <span className={dark ? 'text-white/40' : 'text-zinc-400'}> ({reviews})</span>
        }
      </span>
    </div>);

}
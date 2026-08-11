import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = 'View All',
  dark = false,
  align = 'left'
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`mb-6 flex flex-wrap items-end gap-x-6 gap-y-3 sm:mb-8 ${
      align === 'center' ? 'flex-col items-center text-center' : 'justify-between'}`
      }>
      
      <div className={align === 'center' ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow &&
        <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            {eyebrow}
          </span>
        }
        <h2
          className={`font-display text-3xl font-extrabold uppercase leading-none tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          dark ? 'text-white' : 'text-ink'}`
          }>
          
          {title}
        </h2>
        {subtitle &&
        <p
          className={`mt-2 max-w-xl text-sm leading-relaxed sm:text-[15px] ${
          dark ? 'text-white/60' : 'text-zinc-600'}`
          }>
          
            {subtitle}
          </p>
        }
      </div>

      {viewAllHref &&
      <Link
        to={viewAllHref}
        className={`group inline-flex shrink-0 items-center gap-1.5 text-sm font-bold uppercase tracking-wide transition-colors ${
        dark ? 'text-white hover:text-accent' : 'text-ink hover:text-accent'}`
        }>
        
          {viewAllLabel}
          <ArrowRightIcon
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1" />
        
        </Link>
      }
    </motion.div>);

}
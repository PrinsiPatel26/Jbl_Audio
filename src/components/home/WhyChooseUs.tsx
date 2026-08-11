import React from 'react';
import { motion } from 'framer-motion';
import {
  BoxesIcon,
  ClipboardCheckIcon,
  HeadphonesIcon,
  TruckIcon,
  UsersIcon,
  WrenchIcon } from
'lucide-react';
import { IMG } from '../../data/images';
import { SectionHeading } from '../ui/SectionHeading';

const REASONS = [
{ Icon: ClipboardCheckIcon, title: 'System Design', text: 'We spec complete systems for your venue size, acoustics and budget.' },
{ Icon: BoxesIcon, title: 'Deep Inventory', text: 'Amplifiers, speakers, lighting, cables, connectors and spares in stock.' },
{ Icon: WrenchIcon, title: 'Installation', text: 'On-site rigging, tuning and commissioning by trained technicians.' },
{ Icon: HeadphonesIcon, title: 'Technical Support', text: 'Direct access to engineers, not a call-centre script.' },
{ Icon: TruckIcon, title: 'Pan-India Dispatch', text: 'Safely packed and shipped anywhere in the country.' },
{ Icon: UsersIcon, title: 'Trade Pricing', text: 'Special rates for rental companies, DJs and integrators.' }];


const STATS = [
{ value: '10+', label: 'Years Experience' },
{ value: '500+', label: 'Products' },
{ value: '1000+', label: 'Customers' },
{ value: '24/7', label: 'Professional Support' }];


export function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div id="why-us-heading">
          <SectionHeading
            eyebrow="About our company"
            title="Why Choose Us"
            subtitle="A professional audio equipment dealer supplying event companies, studios, DJs, houses of worship and commercial installations." />
          
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {REASONS.map(({ Icon, title, text }, i) =>
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i % 2 * 0.06 }}
              className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-accent/60">
              
                <Icon size={20} className="text-accent" />
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">{text}</p>
              </motion.article>
            )}
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src={IMG.heroComplete}
              alt="Professional audio equipment setup in a warehouse"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80 lg:h-[420px]" />
            
            <dl className="grid grid-cols-2 gap-px bg-zinc-200 sm:grid-cols-4 lg:grid-cols-2">
              {STATS.map((stat) =>
              <div key={stat.label} className="bg-ink px-4 py-5 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-extrabold text-accent">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>);

}
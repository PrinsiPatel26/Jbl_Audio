import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { HelpCTA } from '../components/home/HelpCTA';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SITE } from '../config/site';
import { IMG } from '../data/images';
import { getBrands } from '../services/categoryService';

const SERVICES = [
'Professional Audio',
'Event Sound Systems',
'DJ Equipment',
'Installation',
'Technical Support',
'Spare Parts',
'Accessories'];


export function About() {
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
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={IMG.heroStage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30" />
        
        <div className="relative mx-auto w-full max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl">
            
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
              About our company
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-6xl">
              Professional Audio,
              <br />
              End To End.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65">
              {SITE.brand} supplies professional audio equipment and complete sound
              solutions to event companies, DJs, studios, houses of worship and commercial
              venues. From specifying a system to installing and supporting it, our team
              stays with the project.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Our Services"
            subtitle="A single supplier for equipment, installation and after-sales support." />
          
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) =>
            <li
              key={service}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 px-4 py-4 transition-colors hover:border-accent/60">
              
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckIcon size={15} />
                </span>
                <span className="text-sm font-bold uppercase tracking-wide text-ink">
                  {service}
                </span>
              </li>
            )}
          </ul>
        </div>
      </section>

      <WhyChooseUs />

      <section id="brands" className="scroll-mt-24 bg-surface py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our range"
            title="Brands We Supply"
            subtitle="Authorised stock across our own professional line and partner manufacturers." />
          
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {getBrands().map((brand) =>
            <li
              key={brand}
              className="flex h-24 items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 text-center font-display text-lg font-extrabold uppercase tracking-tight text-ink transition-colors hover:border-accent hover:text-accent">
              
                {brand}
              </li>
            )}
          </ul>
        </div>
      </section>

      <HelpCTA />
    </div>);

}
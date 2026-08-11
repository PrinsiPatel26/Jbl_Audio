import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  YoutubeIcon } from
'lucide-react';
import { SITE } from '../../config/site';
import { generateGeneralInquiry } from '../../utils/whatsapp';

const COLUMNS = [
{
  title: 'Products',
  links: [
  { label: 'Amplifiers', to: '/category/amplifiers' },
  { label: 'Speakers', to: '/category/speakers-tweeters' },
  { label: 'Microphones', to: '/category/microphones' },
  { label: 'Mixers', to: '/category/mixers' },
  { label: 'Processors', to: '/category/processors' },
  { label: 'Lighting', to: '/category/lighting-sfx' }]

},
{
  title: 'Support',
  links: [
  { label: 'Contact', to: '/contact' },
  { label: 'Warranty', to: '/contact' },
  { label: 'Spare Parts', to: '/category/spare-parts' },
  { label: 'Product Support', to: '/contact' }]

},
{
  title: 'Company',
  links: [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/about#services' },
  { label: 'Brands', to: '/about#brands' },
  { label: 'Locations', to: '/contact#location' }]

},
{
  title: 'Quick Links',
  links: [
  { label: 'New Arrivals', to: '/products?tag=new' },
  { label: 'Sale', to: '/products?tag=sale' },
  { label: 'All Products', to: '/products' },
  { label: 'Inquiry', to: '/contact' }]

}];


export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
                <span className="font-display text-lg font-extrabold leading-none text-white">
                  J
                </span>
              </span>
              <span className="font-display text-xl font-extrabold uppercase tracking-tight">
                {SITE.brand}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Professional audio equipment, stage lighting and installation support for
              events, studios, DJs and commercial venues across India.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPinIcon size={15} className="mt-0.5 shrink-0 text-accent" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon size={15} className="shrink-0 text-accent" />
                <a href={SITE.phoneHref} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon size={15} className="shrink-0 text-accent" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {COLUMNS.map((column) =>
          <nav key={column.title} aria-label={column.title}>
              <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) =>
              <li key={link.label}>
                    <Link
                  to={link.to}
                  className="text-sm text-white/55 transition-colors hover:text-accent">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 {SITE.brand}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/contact" className="text-xs text-white/50 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-xs text-white/50 hover:text-white">
              Terms &amp; Conditions
            </Link>
            <div className="flex items-center gap-2">
              {[
              { Icon: InstagramIcon, href: SITE.social.instagram, label: 'Instagram' },
              { Icon: FacebookIcon, href: SITE.social.facebook, label: 'Facebook' },
              { Icon: YoutubeIcon, href: SITE.social.youtube, label: 'YouTube' },
              { Icon: MessageCircleIcon, href: generateGeneralInquiry(), label: 'WhatsApp' }].
              map(({ Icon, href, label }) =>
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 text-white/60 transition-colors hover:border-accent hover:bg-accent hover:text-white">
                
                  <Icon size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>);

}
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from 'lucide-react';
import { ANNOUNCEMENTS, SITE } from '../../config/site';

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <p className="no-scrollbar flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[11px] font-medium tracking-wide text-white/70 sm:gap-3">
          {ANNOUNCEMENTS.map((item, i) =>
          <React.Fragment key={item}>
              {i > 0 &&
            <span className="text-white/25" aria-hidden="true">
                  |
                </span>
            }
              <span>{item}</span>
            </React.Fragment>
          )}
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-1.5 text-[11px] font-semibold text-white/70 transition-colors hover:text-accent sm:flex">
            
            <PhoneIcon size={12} />
            {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="text-[11px] font-bold uppercase tracking-wider text-accent transition-colors hover:text-white">
            
            Contact Us
          </Link>
        </div>
      </div>
    </div>);

}
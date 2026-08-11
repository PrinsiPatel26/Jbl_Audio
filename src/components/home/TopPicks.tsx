import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { topPickTabs } from '../../data/products';
import { getProductsByTag } from '../../services/productService';
import type { ProductTag } from '../../types';
import { ProductCard } from '../product/ProductCard';
import { ProductRail } from '../product/ProductRail';
import { SectionHeading } from '../ui/SectionHeading';

export function TopPicks() {
  const [active, setActive] = useState<ProductTag>('new');
  const products = getProductsByTag(active, 10);

  return (
    <section id="top-picks" aria-labelledby="top-picks-heading" className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div id="top-picks-heading">
          <SectionHeading
            eyebrow="Curated Selection"
            title="Top Picks For You"
            subtitle="Handpicked gear our engineers recommend most often, grouped by how you buy."
            viewAllHref="/products" />
          
        </div>

        <div
          role="tablist"
          aria-label="Product collections"
          className="no-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          
          {topPickTabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id as ProductTag)}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                isActive ? 'text-white' : 'text-zinc-600 hover:text-ink'}`
                }>
                
                {isActive &&
                <motion.span
                  layoutId="top-picks-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-ink" />

                }
                <span className="relative">{tab.label}</span>
              </button>);

          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}>
            
            <ProductRail ariaLabel="Top picks">
              {products.map((product) =>
              <ProductCard key={product.id} product={product} />
              )}
            </ProductRail>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

}
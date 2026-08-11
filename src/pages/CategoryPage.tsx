import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRightIcon, MessageCircleIcon, PackageSearchIcon } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { getCategoryBySlug } from '../services/categoryService';
import { getProductsByCategorySlug } from '../services/productService';
import { generateCategoryInquiry } from '../utils/whatsapp';

export function CategoryPage() {
  const { slug = '' } = useParams();
  const category = getCategoryBySlug(slug);
  const products = getProductsByCategorySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!category) {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-4 py-28 text-center">
        <PackageSearchIcon size={34} className="text-zinc-400" />
        <h1 className="font-display text-3xl font-extrabold uppercase text-ink">
          Category not found
        </h1>
        <Link
          to="/products"
          className="rounded-md bg-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent">
          
          Browse All Products
        </Link>
      </div>);

  }

  return (
    <div className="bg-surface">
      <header className="relative isolate overflow-hidden bg-ink">
        <img
          src={category.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25" />
        
        <div className="relative mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs font-semibold text-white/60">
              <li>
                <Link to="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <ChevronRightIcon size={13} aria-hidden="true" />
              <li className="text-white">{category.name}</li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-xl text-[15px] text-white/65">{category.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={generateCategoryInquiry(category.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink">
              
              <MessageCircleIcon size={15} />
              Inquire About {category.name}
            </a>
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              {products.length} products
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1320px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {products.length === 0 ?
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-zinc-300 bg-white px-6 py-20 text-center">
            <PackageSearchIcon size={30} className="text-zinc-400" />
            <h2 className="font-display text-xl font-bold uppercase text-ink">
              Nothing listed here yet
            </h2>
            <p className="max-w-sm text-sm text-zinc-500">
              Message us on WhatsApp — we can source this category on request.
            </p>
          </div> :

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) =>
          <ProductCard
            key={product.id}
            product={product}
            ctaLabel="Send Inquiry"
            showAvailability />

          )}
          </div>
        }
      </div>
    </div>);

}
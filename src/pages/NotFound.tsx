import React from 'react';
import { Link } from 'react-router-dom';
import { CompassIcon } from 'lucide-react';

export function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-4 py-28 text-center">
      <CompassIcon size={34} className="text-accent" />
      <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-ink">
        Page not found
      </h1>
      <p className="text-sm text-zinc-500">
        The page you are looking for does not exist. Browse the catalogue instead.
      </p>
      <div className="mt-2 flex gap-3">
        <Link
          to="/"
          className="rounded-md border border-zinc-300 px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink hover:border-ink">
          
          Home
        </Link>
        <Link
          to="/products"
          className="rounded-md bg-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent">
          
          All Products
        </Link>
      </div>
    </div>);

}
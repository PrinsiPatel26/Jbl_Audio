/**
 * Category data access layer. Swap the bodies for API calls when a backend exists.
 */
import { brands, categories, showcaseCategorySlugs } from '../data/categories';
import type { Category } from '../types';

export function getAllCategories(): Category[] {
  return categories;
}

export function getMegaMenuCategories(): Category[] {
  return categories;
}

export function getShowcaseCategories(): Category[] {
  return showcaseCategorySlugs.
  map((slug) => categories.find((c) => c.slug === slug)).
  filter((c): c is Category => Boolean(c));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBrands(): string[] {
  return [...brands];
}
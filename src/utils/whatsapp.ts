import { WHATSAPP_NUMBER } from '../config/site';
import type { Product } from '../types';
import { formatPrice } from './format';

function buildUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function productUrl(product: Product): string {
  if (typeof window === 'undefined') return `/product/${product.slug}`;
  return `${window.location.origin}/product/${product.slug}`;
}

/** Pre-filled WhatsApp inquiry for a specific product. */
export function generateWhatsAppInquiry(product: Product): string {
  const message = [
  'Hello, I am interested in:',
  '',
  `Product: ${product.name}`,
  `Model: ${product.model}`,
  `Category: ${product.category}`,
  `Price: ${formatPrice(product.price)}`,
  `Link: ${productUrl(product)}`,
  '',
  'Please share availability, specifications and best price.'].
  join('\n');
  return buildUrl(message);
}

/** Pre-filled WhatsApp message for a category or section level inquiry. */
export function generateCategoryInquiry(category: string): string {
  return buildUrl(
    `Hello, I would like to know more about your ${category} range. Please share the catalogue, availability and best price.`
  );
}

/** Generic "chat with us" message used by the floating button and page CTAs. */
export function generateGeneralInquiry(): string {
  return buildUrl(
    'Hello, I would like to know more about your professional audio products.'
  );
}

export function openWhatsApp(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
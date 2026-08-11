/**
 * Central site configuration.
 * Change the WhatsApp number, contact details and brand info here only.
 */

export const WHATSAPP_NUMBER = '919876543210'; // country code + number, digits only

export const SITE = {
  brand: 'JBL Audio Pro',
  brandShort: 'JBL',
  tagline: 'Professional Audio Solutions',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'sales@jblaudiopro.in',
  address: '214, Sound City Complex, Lamington Road, Mumbai, Maharashtra 400007',
  hours: [
  { day: 'Monday – Saturday', time: '10:00 AM – 8:30 PM' },
  { day: 'Sunday', time: '11:00 AM – 5:00 PM' }],

  mapEmbed:
  'https://www.openstreetmap.org/export/embed.html?bbox=72.81%2C18.94%2C72.85%2C18.98&layer=mapnik',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com'
  }
} as const;

export const ANNOUNCEMENTS = [
'Professional Audio Solutions',
'New Products Available',
'Get Expert Assistance'];
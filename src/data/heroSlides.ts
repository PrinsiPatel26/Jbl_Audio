import { IMG } from './images';

export interface HeroSlide {
  id: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export const heroSlides: HeroSlide[] = [
{
  id: 1,
  eyebrow: 'Professional Sound Systems',
  title: 'Professional Sound.\nPowerful Performance.',
  subtitle:
  'Explore professional audio equipment for events, DJs, studios, live performances and commercial installations.',
  image: IMG.heroStage,
  href: '/products'
},
{
  id: 2,
  eyebrow: 'Professional Mixers & Amplifiers',
  title: 'Control Every\nDetail Of Your Sound.',
  subtitle:
  'Analog and digital consoles, touring amplifiers and processors — specified, supplied and supported by our engineers.',
  image: IMG.heroMixer,
  href: '/category/mixers'
},
{
  id: 3,
  eyebrow: 'Stage Lighting & SFX',
  title: 'Create Unforgettable\nExperiences.',
  subtitle:
  'Moving heads, LED PARs, lasers and atmospheric effects to transform any stage, banquet hall or club.',
  image: IMG.heroLighting,
  href: '/category/lighting-sfx'
},
{
  id: 4,
  eyebrow: 'Complete Audio Solutions',
  title: 'Everything You Need\nIn One Place.',
  subtitle:
  'From drivers and cabinets to cables, connectors and spare parts — a full professional catalogue with expert guidance.',
  image: IMG.heroComplete,
  href: '/products'
}];
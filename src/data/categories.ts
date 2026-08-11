import { IMG } from './images';
import type { Category } from '../types';

export const categories: Category[] = [
{ id: 1, name: 'Amplifiers', slug: 'amplifiers', description: 'Powerful amplification solutions', image: IMG.amplifier },
{ id: 2, name: 'Microphones', slug: 'microphones', description: 'Professional vocal and instrument microphones', image: IMG.microphone },
{ id: 3, name: 'Speakers & Tweeters', slug: 'speakers-tweeters', description: 'High-performance audio drivers', image: IMG.activeSpeaker },
{ id: 4, name: 'Lighting & SFX', slug: 'lighting-sfx', description: 'Stage lighting and special effects', image: IMG.movingHead },
{ id: 5, name: 'Spare Parts', slug: 'spare-parts', description: 'Genuine replacement components', image: IMG.spareParts },
{ id: 6, name: 'Processors', slug: 'processors', description: 'Precision signal processing', image: IMG.processor },
{ id: 7, name: 'Wires & Cables', slug: 'wires-cables', description: 'Reliable professional connectivity', image: IMG.cable },
{ id: 8, name: 'Connectors', slug: 'connectors', description: 'Rugged plugs and adapters', image: IMG.connector },
{ id: 9, name: 'Accessories', slug: 'accessories', description: 'Stands, mounts, cases and racks', image: IMG.stand },
{ id: 10, name: 'Speaker Box', slug: 'speaker-box', description: 'Tour-grade empty cabinets', image: IMG.speakerBox },
{ id: 11, name: 'Mixers', slug: 'mixers', description: 'Professional mixing solutions', image: IMG.mixer },
{ id: 12, name: 'Power Amplifiers', slug: 'power-amplifiers', description: 'High current touring amplifiers', image: IMG.amplifier },
{ id: 13, name: 'Active Speakers', slug: 'active-speakers', description: 'Powered loudspeakers with DSP', image: IMG.activeSpeaker },
{ id: 14, name: 'Passive Speakers', slug: 'passive-speakers', description: 'Full range passive enclosures', image: IMG.passiveSpeaker },
{ id: 15, name: 'Subwoofers', slug: 'subwoofers', description: 'Deep low frequency extension', image: IMG.subwoofer },
{ id: 16, name: 'DJ Equipment', slug: 'dj-equipment', description: 'Controllers, players and DJ mixers', image: IMG.dj },
{ id: 17, name: 'Stands & Mounts', slug: 'stands-mounts', description: 'Secure rigging and support', image: IMG.stand },
{ id: 18, name: 'Professional Audio Accessories', slug: 'pro-audio-accessories', description: 'Everything for a complete setup', image: IMG.stand }];


/** Categories highlighted in the homepage "Explore Our Categories" grid. */
export const showcaseCategorySlugs = [
'amplifiers',
'microphones',
'speakers-tweeters',
'mixers',
'processors',
'lighting-sfx',
'wires-cables',
'connectors',
'speaker-box',
'spare-parts',
'accessories',
'subwoofers'];


export const brands = [
'JBL Audio Pro',
'SoundForge',
'Crestline',
'Axiom Pro',
'NovaStage'];
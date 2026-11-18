/* ═══════════════════════════════════════════════
   MEDIA SLOTS
   Drop your files into  public/media/  using the names below
   (or change the paths). Until a file exists, a designed
   placeholder is shown automatically — nothing breaks.

   Recommended sizes
   hero        1920×1080   wide landscape, people/event photo
   intro       1200×1400   portrait
   featured    900×1100    portrait of a speaker / participant
   learning    1200×900    landscape
   insight     1200×900    landscape
   connection  1200×900    landscape
   about       1400×1000   landscape
   service-*   1200×900    landscape (one per service)
   ═══════════════════════════════════════════════ */

export const MEDIA = {
  hero: '/media/hero.jpg',
  intro: '/media/intro.jpg',
  featured: '/media/featured.jpg',
  learning: '/media/learning.jpg',
  insight: '/media/insight.jpg',
  connection: '/media/connection.jpg',
  about: '/media/about.jpg',
  contact: '/media/contact.jpg',
  'service-training': '/media/service-training.jpg',
  'service-mentorship': '/media/service-mentorship.jpg',
  'service-partnership': '/media/service-partnership.jpg',
  'service-consulting': '/media/service-consulting.jpg',
};


/* ═══════════════════════════════════════════════
   STOCK FALLBACKS
   Interim, India-relevant photography from Unsplash and Pexels (free to use,
   attribution not required — unsplash.com/license, pexels.com/license).
   Resolution order per slot:
     1. your own file in /public/media  (MEDIA above)
     2. this stock photo
     3. designed placeholder
   Remove an entry here to fall back to the placeholder.
   `pos` is the CSS object-position used when cropping.
   ═══════════════════════════════════════════════ */
const u = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const STOCK = {
  hero: { src: 'https://images.pexels.com/photos/7581114/pexels-photo-7581114.jpeg?auto=compress&cs=tinysrgb&w=1800', pos: '50% 38%' }, // colleagues mid-discussion at a project board (Pexels)
  intro: { src: u('photo-1656236607879-cd489955e17b', 1400), pos: '28% 40%' },       // innovator reviewing ideas on a tablet
  featured: { src: u('photo-1730315661998-dadff57d7f8c', 1100), pos: '50% 50%' },    // Hyderabad glass towers at night — the city of innovation
  learning: { src: u('photo-1590402494587-44b71d7772f6'), pos: '50% 40%' },          // sticky-note ideation wall
  insight: { src: u('photo-1726074749981-d017a415d56e'), pos: '50% 50%' },           // recorded conversation / conference
  connection: { src: u('photo-1716703742352-0bbdb45f505b'), pos: '50% 45%' },        // community of young founders
  about: { src: u('photo-1750834115164-8c2658f18dd0', 1600), pos: '50% 55%' },       // Charminar, Hyderabad — where InnoMission began
  'service-training': { src: u('photo-1587440871875-191322ee64b0'), pos: '50% 50%' },    // design-thinking hands-on sketching
  'service-mentorship': { src: u('photo-1650880234597-50ab778fa458'), pos: '50% 40%' }, // mentor sharing experience
  'service-partnership': { src: u('photo-1776248783518-400b6d0da64c'), pos: '50% 35%' },// delegation from institutions — partnership
  'service-consulting': { src: u('photo-1624259458752-a2c5922abea0'), pos: '50% 50%' }, // strategy canvas
};

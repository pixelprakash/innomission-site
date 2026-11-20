/* ═══════════════════════════════════════════════
   MEDIA SLOTS
   Drop your files into  public/media/  using the names below
   (or change the paths). Until a file exists, a designed
   placeholder is shown automatically — nothing breaks.

   Recommended sizes
   hero        1920×1080   wide landscape, people/event photo
   intro       1200×1400   portrait
   featured    900×1100    portrait of a speaker / participant
   insight           1200×900  landscape (featured insight on home)
   pillar-inspire    1200×900  landscape (stories, talks, social content)
   pillar-innovate   1200×900  landscape (workshops, design thinking)
   pillar-implement  1200×900  landscape (partnerships, real-world delivery)
   about       1400×1000   landscape
   service-*   1200×900    landscape (one per service)
   ═══════════════════════════════════════════════ */

/* Optional CSS object-position for your own files (where to focus when cropped) */
export const MEDIA_POS = {
  hero: '50% 50%',   // must stay centred — HeroArt is aligned to this
};

/* Only list files that exist in /public/media — each listed path is requested
   before the stock fallback, so an entry for a missing file costs a failed request.
   To use your own photo for a spot: put it in public/media/ and add a line here,
   e.g.  'pillar-inspire': '/media/pillar-inspire.jpg'
   Spots: hero · intro · featured · insight · pillar-inspire · pillar-innovate ·
   pillar-implement · about · service-training · service-product ·
   service-partnership · service-entrepreneurship */
export const MEDIA = {
  hero: '/media/hero.webp',
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
  'pillar-innovate': { src: u('photo-1590402494587-44b71d7772f6'), pos: '50% 40%' },          // sticky-note ideation wall
  'pillar-inspire': { src: u('photo-1726074749981-d017a415d56e'), pos: '50% 50%' },           // recorded conversation / conference
  insight: { src: u('photo-1551731409-43eb3e517a1a'), pos: '50% 35%' },              // participant speaking at an event — a real Q&A moment
  'pillar-implement': { src: u('photo-1716703742352-0bbdb45f505b'), pos: '50% 45%' },        // young founders and teams putting ideas to work
  about: { src: u('photo-1750834115164-8c2658f18dd0', 1600), pos: '50% 55%' },       // Charminar, Hyderabad — where InnoMission began
  'service-training': { src: u('photo-1587440871875-191322ee64b0'), pos: '50% 50%' },    // design-thinking hands-on sketching
  'service-product': { src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1400', pos: '50% 50%' }, // hand-drawn UX wireframes (Pexels)
  'service-partnership': { src: u('photo-1776248783518-400b6d0da64c'), pos: '50% 35%' },// delegation from institutions — partnership
  'service-entrepreneurship': { src: u('photo-1624259458752-a2c5922abea0'), pos: '50% 50%' }, // business-model canvas
};

import { SERVICES, PROGRAMS, YOUTUBE_SERIES } from '../utils/constants';

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/* ── Primary navigation (with mega-menu panels) ── */
export const RD_NAV = [
  {
    id: 'services',
    label: 'Services',
    path: '/services',
    intro: 'Innovation capability for institutions',
    blurb: 'Training, product and UX, partnerships and entrepreneurship support — designed with your context, not around a template.',
    links: SERVICES.map((s) => ({ label: s.title, path: '/services#' + slug(s.title), desc: s.shortDesc })),
    cta: { label: 'All services', path: '/services' },
  },
  {
    id: 'programs',
    label: 'Programs',
    path: '/programs',
    intro: 'Programs & courses',
    blurb: 'From one-day intensives to twelve-week accelerators, built with practitioners and academics.',
    links: PROGRAMS.slice(0, 4).map((p) => ({ label: p.title, path: '/programs', desc: p.duration })),
    cta: { label: 'Browse all programs', path: '/programs' },
  },
  {
    id: 'insights',
    label: 'Insights',
    path: '/insights',
    intro: 'Insights & stories',
    blurb: 'Conversations, case studies and conference talks from the people shaping innovation.',
    links: YOUTUBE_SERIES.map((y) => ({ label: y.title, path: '/insights#' + slug(y.title), desc: y.topics.slice(0, 2).join(' · ') })),
    cta: { label: 'Visit the library', path: '/insights' },
  },
  {
    id: 'about',
    label: 'About',
    path: '/about',
    intro: 'About InnoMission',
    blurb: 'A Hyderabad-based team of practitioners, educators and ecosystem builders.',
    links: [
      { label: 'Our mission & values', path: '/about#mission', desc: 'What we stand for' },
      { label: 'How we work', path: '/about#process', desc: 'Our four-step approach' },
      { label: 'Our team', path: '/about#team', desc: 'Advisory board' },
      { label: 'Partners', path: '/about#partners', desc: 'Institutions we work alongside' },
    ],
    cta: { label: 'Our story', path: '/about' },
  },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

/* ── Search index (client-side) ── */
export const SEARCH_INDEX = [
  { title: 'Home', path: '/', type: 'Page' },
  { title: 'Services', path: '/services', type: 'Page' },
  { title: 'Programs & courses', path: '/programs', type: 'Page' },
  { title: 'Insights & stories', path: '/insights', type: 'Page' },
  { title: 'About InnoMission', path: '/about', type: 'Page' },
  { title: 'Contact', path: '/contact', type: 'Page' },
  ...SERVICES.map((s) => ({ title: s.title, path: '/services#' + slug(s.title), type: 'Service', text: s.shortDesc })),
  ...PROGRAMS.map((p) => ({ title: p.title, path: '/programs', type: 'Program', text: p.desc })),
  ...YOUTUBE_SERIES.map((y) => ({ title: y.title, path: '/insights#' + slug(y.title), type: 'Insight', text: y.desc })),
];

export const RD_FOOTER = [
  {
    title: 'Learn',
    links: [
      { label: 'Programs & courses', path: '/programs' },
      { label: 'Innovation training', path: '/services#innovation-training' },
      { label: 'Product & UX consulting', path: '/services#product-ux-consulting' },
    ],
  },
  {
    title: 'Partner',
    links: [
      { label: 'Strategic partnerships', path: '/services#strategic-partnerships' },
      { label: 'Entrepreneurship support', path: '/services#entrepreneurship-support' },
      { label: 'Work with us', path: '/contact' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Insights & stories', path: '/insights' },
      { label: 'About InnoMission', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
  },
];

export { slug };

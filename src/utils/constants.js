/* ═══════════════════════════════════════════════
   CONTENT & DATA CONSTANTS
   All site copy and structured data in one place
   ═══════════════════════════════════════════════ */

export const COLORS = {
  ink: '#0B0D17',
  white: '#FFFFFF',
  cream: '#F7F5F0',
  coral: '#FF4D4D',
  electric: '#3B5CFF',
  mint: '#00D4AA',
  amber: '#FFB830',
  lavender: '#C4B5FD',
  blush: '#FFE0E6',
  slate: '#64748B',
  lightGray: '#E8E6E1',
};

export const NAV_ITEMS = [
  // { id: 'hackathon', label: 'Hackathon', path: '/hackathon' },
  { id: 'home', label: 'Home', path: '/' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'programs', label: 'Programs', path: '/programs' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'blogs', label: 'Blogs', path: '/blogs' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const TRUST_PARTNERS = [
  'IIT Hyderabad',
  'IIIT Hyderabad',
  'T-Hub',
  'TASK',
  'JNTU',
];

export const SERVICES = [
  {
    icon: 'training',
    title: 'Innovation Training',
    shortDesc: 'Equip your team with design thinking, lean startup, and problem-solving frameworks that turn creativity into repeatable results.',
    fullTitle: 'Innovation Training & Workshops',
    fullDesc: 'Immersive programs that rewire how your team approaches problems. From design thinking sprints to lean startup bootcamps, we build the muscle memory of innovation.',
    features: ['Design Thinking Masterclasses', 'Lean Startup Methodology', 'Creative Problem-Solving Labs', 'Custom Corporate Workshops'],
    color1: COLORS.electric,
    color2: COLORS.lavender,
    bg: COLORS.blush,
  },
  {
    icon: 'product',
    title: 'Product & UX Consulting',
    shortDesc: 'From first idea to a product people love — design, engineering and AI-native development working as one team.',
    fullTitle: 'Product & UX Consulting',
    fullDesc: 'Design and development services that take your idea from napkin sketch to shipped product. Design, engineering and AI work as one team, so concepts become working software, not slide decks.',
    features: ['User Research & Interface Design', 'Design Systems & Front-end Engineering', 'MVP & Full-stack Product Development', 'AI-Native Features & Copilots'],
    groups: [
      { title: 'UX/UI Design', items: ['User Research & Testing', 'Interface Design', 'Prototyping & Wireframing'] },
      { title: 'Design Engineering', items: ['Design Systems & Component Libraries', 'Front-end Architecture & Performance', 'Accessibility Engineering'] },
      { title: 'Product Development', items: ['Product Strategy', 'MVP Development', 'Full-stack Solutions'] },
      { title: 'AI-Native Product Development', items: ['AI-First Product Discovery', 'LLM-Powered Features & Copilots', 'Evaluation & Responsible AI'] },
    ],
    color1: COLORS.coral,
    color2: COLORS.amber,
    bg: '#FFF5F0',
  },
  {
    icon: 'partnership',
    title: 'Strategic Partnerships',
    shortDesc: 'We connect academia with industry, government with startups — building bridges that create lasting institutional value.',
    fullTitle: 'Strategic Partnerships & Ecosystem Building',
    fullDesc: 'We architect the connections between universities, corporates, government bodies, and startups. The result: collaborative ecosystems that compound innovation over time.',
    features: ['Academia-Industry Bridges', 'Government Innovation Programs', 'Open Innovation Frameworks', 'Ecosystem Health Metrics'],
    color1: COLORS.mint,
    color2: COLORS.electric,
    bg: '#F0FFF8',
  },
  {
    icon: 'entrepreneurship',
    title: 'Entrepreneurship Support',
    shortDesc: 'Expert guidance for startups and innovators — from business model and go-to-market to IP, research and investor readiness.',
    fullTitle: 'Entrepreneurship Support',
    fullDesc: 'Expert guidance for startups and innovators. We help founders shape the business model, protect what they build and get ready for investors — with practical, structured support at every stage from first incubation to launch.',
    features: ['Business Model & Go-to-Market', 'Pitch Deck & Investor Readiness', 'IP & Patent Guidance', 'Mentor & Investor Networks'],
    groups: [
      { title: 'Incubation Support', items: ['Business Model Development', 'Go-to-Market Strategy', 'Pitch Deck Creation', 'Investor Readiness'] },
      { title: 'IP & Research', items: ['Intellectual Property Guidance', 'Patent Filing Support', 'Academic Research Publications', 'Technical Documentation'] },
      { title: 'Mentorship & Networks', items: ['1-on-1 Mentor Matching', 'Industry & Investor Introductions', 'Founder Peer Circles', 'Demo Day Access'] },
      { title: 'Funding & Growth', items: ['Grant & Funding Applications', 'Startup Programme Applications', 'Financial Planning Basics', 'Growth Strategy'] },
    ],
    color1: COLORS.amber,
    color2: COLORS.coral,
    bg: '#FFFBF0',
  },
];

export const STATS = [
  { num: '500+', label: 'Startups mentored', color: COLORS.coral },
  { num: '50+', label: 'Institutional partners', color: COLORS.electric },
  { num: '10K+', label: 'Innovators trained', color: COLORS.amber },
  { num: '3', label: 'Ecosystem pillars united', color: COLORS.mint },
];

export const PROGRAMS = [
  {
    tag: 'Flagship',
    title: 'Innovation Leadership Bootcamp',
    duration: '5 Days · Intensive',
    desc: 'For executives and team leads who need to build innovation into their organization\'s DNA — not just their slide decks.',
    outcomes: [
      'Build a functioning innovation pipeline',
      'Identify and validate 3 growth opportunities',
      'Design your team\'s innovation operating model',
    ],
    color: COLORS.electric,
    accent: COLORS.lavender,
  },
  {
    tag: 'Workshop',
    title: 'Design Thinking Sprint',
    duration: '2 Days · Hands-On',
    desc: 'Go from problem statement to testable prototype in 48 hours. Real problems, real users, real outcomes.',
    outcomes: [
      'Master the double diamond framework',
      'Build and test prototypes with real users',
      'Present validated concepts to stakeholders',
    ],
    color: COLORS.coral,
    accent: COLORS.blush,
  },
  {
    tag: 'Accelerator',
    title: 'Startup Launchpad',
    duration: '12 Weeks · Cohort-Based',
    desc: 'A structured journey from idea to investment-ready startup. Mentorship, milestones, and demo day included.',
    outcomes: [
      'Achieve product-market fit validation',
      'Build a fundable pitch deck',
      'Connect with 20+ potential investors',
    ],
    color: COLORS.mint,
    accent: '#E0FFF5',
  },
  {
    tag: 'Certification',
    title: 'Open Innovation Practitioner',
    duration: '8 Weeks · Online + Live',
    desc: 'Become the person your organization calls when they need to build bridges between silos. Globally recognized certification.',
    outcomes: [
      'Master open innovation frameworks',
      'Design cross-sector partnerships',
      'Measure ecosystem health & ROI',
    ],
    color: COLORS.amber,
    accent: '#FFF7E0',
  },
  {
    tag: 'Masterclass',
    title: 'Lean Startup for Enterprises',
    duration: '3 Days · Applied',
    desc: 'Large organizations move slow by default. This program teaches you how to run experiments at startup speed — with corporate resources.',
    outcomes: [
      'Design rapid validation experiments',
      'Build internal startup teams',
      'Create innovation accounting dashboards',
    ],
    color: COLORS.coral,
    accent: COLORS.blush,
  },
  {
    tag: 'Workshop',
    title: 'Customer Discovery Intensive',
    duration: '1 Day · Fieldwork',
    desc: 'Stop guessing what customers want. In one day, learn the interview techniques that separate assumptions from insights.',
    outcomes: [
      'Conduct 10+ discovery interviews',
      'Map jobs-to-be-done for your segment',
      'Identify underserved needs with precision',
    ],
    color: COLORS.electric,
    accent: COLORS.lavender,
  },
];

export const ABOUT_VALUES = [
  {
    title: 'Our Mission',
    text: 'To democratize innovation by building bridges between academia, industry, and government. We create the conditions where bold ideas get the resources, mentorship, and market access they need to create real-world impact.',
    color: COLORS.electric,
    icon: '🎯',
  },
  {
    title: 'Our Vision',
    text: 'A world where every institution — from the smallest university lab to the largest government body — has the tools, talent, and partnerships to innovate at the speed of change.',
    color: COLORS.coral,
    icon: '🔭',
  },
  {
    title: 'Our Values',
    text: 'Radical collaboration over competition. Practical results over perfect plans. Long-term ecosystems over short-term projects. Transparency in everything we do.',
    color: COLORS.mint,
    icon: '💎',
  },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Listen & Map', desc: 'Deep-dive into your ecosystem. Understand stakeholders, constraints, and untapped opportunities.', color: COLORS.electric },
  { step: '02', title: 'Design & Align', desc: 'Co-create a custom innovation strategy with clear milestones and ownership at every level.', color: COLORS.coral },
  { step: '03', title: 'Build & Train', desc: 'Deploy programs, train champions, and build the infrastructure for self-sustaining innovation.', color: COLORS.amber },
  { step: '04', title: 'Measure & Evolve', desc: 'Track impact with real metrics. Iterate based on data, not assumptions. Scale what works.', color: COLORS.mint },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Quick Links',
    items: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Blogs', path: '/blogs' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { label: 'helloinnomission@gmail.com', path: '/contact' },
      { label: 'WhatsApp', path: '/contact' },
    ],
  },
];

export const CONTACT_INFO = [
  { label: 'Email', value: 'helloinnomission@gmail.com', icon: '✉' },
  { label: 'Location', value: 'Hyderabad, Telangana, India', icon: '📍' },
  { label: 'Social', value: 'LinkedIn · YouTube · Instagram', icon: '🔗' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/innomission-397b6438a/',
  youtube: 'https://www.youtube.com/@Inno_mission',
  instagram: 'https://www.instagram.com/inno_mission/',
};

export const YOUTUBE_SERIES = [
  {
    title: 'Voices of Innovations',
    desc: 'In-depth conversations with industry experts and thought leaders sharing their innovation journeys, insights, and lessons learned. Discover the stories behind successful innovations and gain valuable perspectives from those who\'ve shaped the future.',
    topics: ['Expert Insights', 'Innovation Case Studies', 'Industry Trends', 'Leadership Lessons'],
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLBOGkjVPZGkWlBFtMYPa2kMmcCr2Pz9gm',
    color: COLORS.electric,
  },
  {
    title: 'Future Innovators',
    desc: 'Showcasing the next generation of innovators, entrepreneurs, and change-makers. Watch emerging talents share their ideas, projects, and aspirations as they embark on their innovation journeys and build tomorrow\'s solutions.',
    topics: ['Student Innovations', 'Startup Stories', 'Young Entrepreneurs', 'Fresh Perspectives'],
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLBOGkjVPZGkWlBFtMYPa2kMmcCr2Pz9gm',
    color: COLORS.coral,
  },
  {
    title: 'International Conference ServDes 2025',
    desc: 'Highlights and presentations from the International Service Design Conference 2025. Explore cutting-edge research, case studies, and discussions on service design, innovation methodologies, and design thinking from global experts and academics.',
    topics: ['Service Design', 'Academic Research', 'Global Insights', 'Conference Talks'],
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLBOGkjVPZGkWnqFmCMeNqxFfvqMlrUJVM',
    color: COLORS.lavender,
  },
];

export const INTEREST_OPTIONS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'training', label: 'Training & Workshops' },
  { value: 'product', label: 'Product & UX Consulting' },
  { value: 'partnership', label: 'Strategic Partnerships' },
  { value: 'entrepreneurship', label: 'Entrepreneurship Support' },
];

/* Reels published on the public @inno_mission Instagram profile.
   Add or remove shortcodes (the part after /reel/ in the URL) to change what's shown. */
export const INSTAGRAM_REELS = [
  'DVi_xYxggFJ',
  'DVVDjLJgrVq',
  'DVVDLhaAhpi',
  'DVVCb1cAlzS',
  'DVTM999gnZi',
  'DVAXBLSglO6',
];


/* ── Team ──
   Add `url` (LinkedIn or personal site) to show a "Connect" button, and `photo`
   (e.g. '/media/team/ganesh.jpg') to show a photo instead of initials. */
export const TEAM = {
  advisory: [
    { name: 'Ganesh Kumar Malthurkar', url: 'https://www.linkedin.com/in/ganeshmalthurkar/', photo: '' },
    { name: 'Dr. Divakar Sadam', url: 'https://www.linkedin.com/in/dr-divakar-sadam-15065638/', photo: '' },
    { name: 'Ravi Tej', url: 'https://www.linkedin.com/in/tejj/', photo: '' },
    { name: 'Akkireddy (Akki) Prakash', url: 'https://www.linkedin.com/in/akki4design/', photo: '' },
    { name: 'Eswar Reddy', url: 'https://www.linkedin.com/in/eswar-reddy-ux/', photo: '' },
    { name: 'Surya Prakash Musunuri', url: 'https://www.linkedin.com/in/suryaprakashmusunuri/', photo: '' },
  ],
};

/* First + last initial; honorifics and (nicknames) are ignored:
   "Dr. Divakar Sadam" -> "DS", "Akkireddy (Akki) Prakash" -> "AP" */
export const initialsOf = (name) => {
  const words = name
    .replace(/\([^)]*\)/g, '')
    .replace(/^(dr|mr|mrs|ms|prof)\.?\s+/i, '')
    .split(/\s+/)
    .filter(Boolean);
  const first = words[0] || '';
  const last = words.length > 1 ? words[words.length - 1] : '';
  return (first[0] + (last[0] || '')).toUpperCase();
};

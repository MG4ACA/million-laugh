// All copy and image references for the prototype live here. No CMS, no backend.
const IMG = (n: string) => `/images/${n}.jpg`;

export const contact = {
  address: '350 Makola Road, Kiribathgoda, Sri Lanka',
  email: 'info@millionlaugh.com',
  phone: '+94 112 910 677',
  whatsapp: '94755915242',
};

export const nav = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Venues', to: '/venues' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
];

export const stats = [
  { v: '2008', l: 'Founded in Colombo' },
  { v: '65', l: 'People on the team' },
  { v: '1,500', l: 'Guests in our permanent marquee' },
  { v: '75,000', l: 'Square feet of grass protection cover' },
];

export const chapters = [
  {
    t: 'Events',
    d: 'Corporate events, product launches, conferences, exhibitions and brand activations for the companies that lead their markets.',
    link: 'Explore events',
    to: '/services',
    src: IMG('stage-avaya'),
    alt: 'SLT-MOBITEL contact centre launch on stage',
  },
  {
    t: 'Sports',
    d: "Opening ceremonies, tournament operations and fan experiences, from the Lanka Premier League to the ICC Women's Cricket World Cup.",
    link: 'See sports work',
    to: '/work',
    src: IMG('fire-dancer'),
    alt: 'Fire dancer at a cricket tournament ceremony',
  },
  {
    t: 'Spaces',
    d: "Permanent and temporary venues we design, engineer and build, including Sri Lanka's first APS permanent marquee.",
    link: 'Explore spaces',
    to: '/venues',
    src: IMG('christmas-colombo'),
    alt: 'Colombo City Christmas decorations installation',
  },
];

export const filters = ['All', 'Sports', 'Spaces', 'Exhibitions', 'Activations', 'Corporate'];

export interface Project {
  slug: string;
  cat: string;
  filter: string;
  t: string;
  d: string;
  long: string;
  src: string;
  alt: string;
  placeholder?: boolean;
  meta: { k: string; v: string }[];
  featured?: boolean;
  home?: boolean;
  content?: { type: 'text' | 'list'; body: string | string[] }[];
}

export const projects: Project[] = [
  {
    slug: 'lpl-2026-opening-ceremony',
    featured: true,
    cat: 'Official Event Partner · 17 July 2026',
    filter: 'Sports',
    t: 'Lanka Premier League 2026 Opening Ceremony',
    d: 'A drone show, a light show, the LPL Grand Trophy reveal and a cultural spectacle at the SSC Grounds, Colombo.',
    long: "Million Laugh served as Official Event Partner for the Lanka Premier League 2026 Opening Ceremony, bringing world-class entertainment to Sri Lanka's premier T20 cricket tournament. Held at the SSC Grounds, Colombo, on 17 July 2026, the ceremony was built around a drone show, a light show, the LPL Grand Trophy reveal and a cultural spectacle that celebrated Sri Lanka's heritage on one stage. The evening was carried by live performances from Yohani, Centigradz, Sanka and Naadro, with innovation, creativity and flawless execution behind every moment.",
    content: [
      {
        type: 'text',
        body: "Million Laugh Entertainment (Pvt) Ltd is proud to serve as the Official Event Partner for the Lanka Premier League (LPL) 2026 Opening Ceremony, promising an unforgettable evening where world-class entertainment meets the excitement of Sri Lanka's premier T20 cricket tournament.",
      },
      {
        type: 'text',
        body: "Taking place at the SSC Grounds, Colombo, this spectacular opening ceremony has been designed to deliver an extraordinary experience for cricket fans and entertainment lovers alike. The event will feature a breathtaking drone show, a dazzling light show, the highly anticipated LPL Grand Trophy Reveal, and a vibrant cultural spectacle that celebrates Sri Lanka's rich heritage on one grand stage.",
      },
      {
        type: 'text',
        body: "The evening will come alive with electrifying performances by some of Sri Lanka's most celebrated artists and bands, including Yohani, Centigradz, Sanka, and Naadro, along with many more exciting entertainment acts that will keep the audience engaged throughout the night.",
      },
      {
        type: 'text',
        body: "As the Official Event Partner, Million Laugh Entertainment is committed to delivering an event that combines innovation, creativity, and flawless execution, creating a memorable opening celebration worthy of one of the region's biggest cricket leagues.",
      },
      {
        type: 'text',
        body: "Whether you're attending for the cricket, the music, the spectacular visuals, or the unforgettable atmosphere, the LPL 2026 Opening Ceremony promises to be one of the year's most anticipated entertainment events.",
      },
      {
        type: 'list',
        body: [
          'Spectacular Drone Show',
          'World-Class Light Show',
          'Grand LPL Trophy Reveal',
          'Vibrant Cultural Spectacle',
          'Live performances by Yohani, Centigradz, Sanka, Naadro, and other popular artists',
          'High-energy live band performances',
          'Immersive entertainment experience and many more surprises',
        ],
      },
    ],
    src: IMG('lpl-2026-open-ceromony'),
    alt: 'Aerial view of a night concert stage',
    meta: [
      { k: 'Role', v: 'Official Event Partner' },
      { k: 'Event', v: 'LPL 2026 Opening Ceremony' },
      { k: 'Date', v: '17 July 2026' },
      { k: 'Venue', v: 'SSC Grounds, Colombo' },
    ],
  },
  {
    slug: 'lanka-t10-super-league',
    cat: 'Sports',
    filter: 'Sports',
    home: true,
    t: 'Lanka T10 Super League',
    d: 'Ceremony, branding and ground presentation for a fast-paced tournament.',
    long: 'Ground branding, cultural opening and on-field presentation for the Lanka T10 Super League, delivered by our sports events team.',
    src: IMG('lanka-t10-team'),
    alt: 'Teams and officials on the ground at Lanka T10',
    meta: [
      { k: 'Category', v: 'Sports' },
      { k: 'Role', v: 'Event management' },
    ],
  },
  {
    slug: 'galactic-night-awards',
    cat: 'Corporate · Awards',
    filter: 'Corporate',
    home: true,
    t: 'Galactic Night Marketing Awards',
    d: 'An awards evening for SLT-MOBITEL with stage, lighting and an LED-lit podium.',
    long: 'The SLT-MOBITEL Marketing Awards: staging, lighting, screens and show-calling for an evening that recognised the best of the year.',
    src: IMG('galactic-night'),
    alt: 'SLT-MOBITEL Marketing Awards stage',
    meta: [
      { k: 'Category', v: 'Corporate' },
      { k: 'Client', v: 'SLT-MOBITEL' },
    ],
  },
  {
    slug: 'saudi-national-day',
    cat: 'Corporate · Diplomatic',
    filter: 'Corporate',
    home: true,
    t: '94th National Day of the Kingdom of Saudi Arabia',
    d: 'Stage design and event management for a national day reception in Colombo.',
    long: 'A national day reception with a branded stage, red carpet arrival and photo moments for dignitaries, managed end to end.',
    src: IMG('saudi-national-day'),
    alt: 'Dignitaries on stage at the Saudi National Day reception',
    meta: [
      { k: 'Category', v: 'Corporate' },
      { k: 'Role', v: 'Design and management' },
    ],
  },
  {
    slug: 'iphone-16-pro-launch',
    cat: 'Activations · Product launch',
    filter: 'Activations',
    home: true,
    t: 'iPhone 16 Pro Launch',
    d: 'An SLT-MOBITEL launch activation with a large-format backdrop and lighting.',
    long: 'A product launch activation for SLT-MOBITEL featuring a full-height branded backdrop, floor lighting and a styled reveal area.',
    src: IMG('iphone-launch'),
    alt: 'SLT-MOBITEL iPhone 16 Pro launch backdrop',
    meta: [
      { k: 'Category', v: 'Activation' },
      { k: 'Client', v: 'SLT-MOBITEL' },
    ],
  },
  {
    slug: 'christmas-colombo-city',
    cat: 'Spaces · Outdoor',
    filter: 'Spaces',
    home: true,
    t: 'Colombo City Christmas Decorations',
    d: 'Seasonal large-format installations that light up the city.',
    long: 'A seasonal outdoor installation for Colombo City: illuminated lettering, trees and a branded platform for visitors.',
    src: IMG('christmas-colombo'),
    alt: 'Illuminated Sri Lanka lettering at Christmas',
    meta: [
      { k: 'Category', v: 'Outdoor advertising' },
      { k: 'Season', v: 'Christmas' },
    ],
  },
  {
    slug: 'icc-womens-world-cup-2025',
    cat: 'Sports · 2025',
    filter: 'Sports',
    t: "ICC Women's Cricket World Cup 2025",
    d: "Behind-the-scenes event management across the tournament, and the opening-ceremony performance of Sri Lanka's national anthem in Guwahati.",
    long: "Behind-the-scenes event management across the tournament and the opening-ceremony performance of Sri Lanka's national anthem by Nuwandhika Senaratne in Guwahati.",
    src: IMG('icc-womens-world-cup-2025'),
    alt: "ICC Women's Cricket World Cup 2025",
    meta: [
      { k: 'Category', v: 'Sports' },
      { k: 'Date', v: 'Oct 2025' },
    ],
  },
  {
    slug: 'bia-departure-expansion',
    cat: 'Spaces · Airport',
    filter: 'Spaces',
    t: 'BIA Departure Expansion',
    d: 'A new departure marquee at Bandaranaike International Airport, delivered end to end.',
    long: 'To handle more passengers at Bandaranaike International Airport, we delivered a new departure marquee end to end: structural design, steel framing, flooring, electrical, interiors and finishing.',
    src: IMG('idb-expo-2025'),
    alt: 'BIA Departure Expansion marquee',
    meta: [
      { k: 'Category', v: 'Spaces' },
      { k: 'Scope', v: 'Design to finishing' },
    ],
  },
  {
    slug: 'idb-expo-2025',
    cat: 'Exhibitions · Sep 2025',
    filter: 'Exhibitions',
    t: 'IDB Expo 2025',
    d: "Official event management partner to the Industrial Development Board for four days at the year's largest industrial exhibition.",
    long: "Official event management partner to the Industrial Development Board for four days at the year's largest industrial exhibition, from 18 September 2025.",
    src: IMG('idb-expo-2025'),
    alt: 'IDB Expo 2025 exhibition hall',
    meta: [
      { k: 'Category', v: 'Exhibition' },
      { k: 'Date', v: '18 Sep 2025' },
    ],
  },
  {
    slug: 'colombo-book-fair-2025',
    cat: 'Activations · Sep to Oct 2025',
    filter: 'Activations',
    t: 'Colombo International Book Fair 2025',
    d: "Official event partner for SLT-MOBITEL and PickMe at the BMICH, Sri Lanka's biggest literary celebration.",
    long: 'Official event partner for SLT-MOBITEL and PickMe at the BMICH, Colombo, from 26 September to 6 October 2025.',
    src: IMG('stage-avaya'),
    alt: 'Branded stage with LED screen',
    meta: [
      { k: 'Category', v: 'Activation' },
      { k: 'Venue', v: 'BMICH, Colombo' },
    ],
  },
  {
    slug: 'grass-protection-cover',
    cat: 'Spaces · Ground cover',
    filter: 'Spaces',
    t: 'Grass Protection Cover',
    d: 'First imported in Sri Lanka: a waterproof, flexible floor system covering up to 75,000 sq ft.',
    long: 'A premium outdoor floor system for indoor and outdoor grounds. Waterproof, flexible and safe under heavy loads.',
    src: IMG('grass-protection-cover'),
    alt: 'Grass protection cover laid on a ground',
    meta: [
      { k: 'Category', v: 'Spaces' },
      { k: 'Coverage', v: 'Up to 75,000 sq ft' },
    ],
  },
];

export const services = [
  {
    n: '01',
    t: 'Corporate Events',
    s: 'Launches, galas and networking evenings that carry your brand story.',
    d: 'Launches, galas and networking evenings that turn your event into a platform for your brand, with technology and detail that make every moment land.',
    src: IMG('galactic-night'),
    alt: 'Corporate awards stage',
  },
  {
    n: '02',
    t: 'Sports Events',
    s: 'Championships and community games with the technology to excite fans.',
    d: 'Championships and community games with cutting-edge technology, seamless coordination and branding that captivates athletes and spectators alike.',
    src: IMG('rowing'),
    alt: 'Women rowing on a lake',
  },
  {
    n: '03',
    t: 'Product Launches',
    s: 'A debut that gets noticed and puts your product at centre stage.',
    d: 'From concept to completion, a debut that creates a first impression, generates buzz and puts your product at centre stage.',
    src: IMG('iphone-launch'),
    alt: 'Product launch backdrop',
  },
  {
    n: '04',
    t: 'Conferences',
    s: 'Virtual, hybrid and in-person, with seamless logistics.',
    d: 'Virtual, hybrid and in-person conferences with seamless logistics, premium production and an environment that sparks collaboration.',
    src: IMG('stage-avaya'),
    alt: 'Conference stage with LED wall',
  },
  {
    n: '05',
    t: 'Brand Activations',
    s: 'Immersive experiences that turn a moment into a connection.',
    d: 'Immersive experiences that turn a fleeting moment into a meaningful connection, from the first spark of an idea to flawless execution.',
    src: IMG('saudi-national-day'),
    alt: 'Branded reception stage',
  },
  {
    n: '06',
    t: 'Exhibitions',
    s: 'Designed environments that attract attention and generate leads.',
    d: 'Immersive environments with innovative design and state-of-the-art technology that attract attention, spark engagement and generate leads.',
    src: IMG('idb-expo-2025'),
    alt: 'IDB Expo 2025 exhibition hall',
  },
  {
    n: '07',
    t: 'Entertainment and Productions',
    s: 'Performers, LED walls, lighting and staging, start to finish.',
    d: 'World-class performers, LED walls, lighting and staging, produced from the first idea to the final curtain call.',
    src: IMG('dancers-stage'),
    alt: 'Dancers on a lit stage',
  },
  {
    n: '08',
    t: 'Outdoor Advertising',
    s: 'Large-format branding and seasonal displays across the city.',
    d: 'Large-format branding and seasonal displays that put your brand in front of the whole city.',
    src: IMG('christmas-colombo'),
    alt: 'Illuminated outdoor installation',
  },
];

export const steps = [
  {
    n: '01',
    t: 'Concept',
    d: 'We start with your idea and shape it into a clear creative direction.',
  },
  {
    n: '02',
    t: 'Design',
    d: 'Designers and technologists turn the concept into stages, spaces and visuals.',
  },
  {
    n: '03',
    t: 'Build',
    d: 'Our own engineers build the structures, floors, power and finishing.',
  },
  {
    n: '04',
    t: 'Run',
    d: 'We run the night end to end, so you get all the credit for a flawless event.',
  },
];

export const venues = [
  {
    src: IMG('permanent-marquee'),
    alt: 'APS Permanent Marquee at Cinnamon Grand',
    tag: "Sri Lanka's first",
    t: 'APS Permanent Marquee, Cinnamon Grand',
    short:
      'Room for up to 1,500 guests, with international-standard acoustics for concerts, DJ nights, fashion shows, exhibitions and weddings.',
    d: 'A state-of-the-art permanent venue at the Cinnamon Grand Hotel, Colombo. Built with advanced APS technology for strength, elegance and long-term use, with acoustics and infrastructure that meet international standards.',
    cta: 'Enquire about the venue',
    specs: [
      { k: 'Capacity', v: 'Up to 1,500 guests' },
      { k: 'Location', v: 'Cinnamon Grand Hotel, Colombo' },
      { k: 'Built for', v: 'Concerts, DJ nights and festivals' },
      { k: 'Also suits', v: 'Weddings, corporate events, exhibitions and fashion shows' },
    ],
  },
  {
    src: IMG('grass-protection-cover'),
    alt: 'Grass protection cover on a ground',
    tag: 'First imported in Sri Lanka',
    t: 'Grass Protection Cover',
    short:
      'A waterproof, flexible floor system for indoor and outdoor grounds, safe under heavy loads. Covers up to 75,000 sq ft.',
    d: 'A premium outdoor floor system with a fine finish for indoor and outdoor grounds. It keeps outdoor events flawless, stylish and protected.',
    cta: 'Ask about ground cover',
    specs: [
      { k: 'Coverage', v: 'Up to 75,000 sq ft' },
      { k: 'Material', v: 'Waterproof and flexible' },
      { k: 'Strength', v: 'Safe under heavy loads' },
      { k: 'Use', v: 'Easy to lay and remove, indoors or outdoors' },
    ],
  },
];

export const clients = [
  { name: 'HNB', src: '/images/logos/hnb.jpg' },
  { name: 'Ministry of Agriculture', src: '/images/logos/ministry-agriculture.jpg' },
  { name: 'SLT-MOBITEL', src: '/images/logos/slt-mobitel.jpg' },
  { name: 'National Crafts Council', src: '/images/logos/national-crafts-council.jpg' },
  { name: 'Ministry of Sports', src: '/images/logos/ministry-sports.jpg' },
  { name: 'National Savings Bank', src: '/images/logos/nsb.jpg' },
  { name: 'Sri Lanka Cricket', src: '/images/logos/cricket.webp' },
  { name: 'Government of Sri Lanka', src: '/images/logos/image3.webp' },
  { name: 'FM Derana', src: '/images/logos/img4.webp' },
  { name: 'Swarnavahini', src: '/images/logos/img5.webp' },
  { name: 'Ministry of Finance Sri Lanka', src: '/images/logos/img6.webp' },
  { name: 'Airport and Aviation Services (Sri Lanka) Ltd.', src: '/images/logos/img7.webp' },
  { name: 'JW.ORG', src: '/images/logos/jworg.webp' },
];

// Demo dates for the prototype
export const upcoming = [
  {
    day: '12',
    mon: 'Dec',
    t: 'Yaga Festival',
    p: 'Port City · 12 Dec 2026 · 6 pm to 10 pm',
    details:
      'Celebrate an evening of live music, vibrant performances and festival energy by the waterfront. Bring your friends and enjoy a memorable night at Port City.',
    src: IMG('aerial-concert'),
    alt: 'Aerial view of a live concert crowd',
  },
  {
    day: '19',
    mon: 'Dec',
    t: 'SLT Mobitel Akasa Container Product Forum',
    p: 'Monarch Imperial · 19 Dec 2026 · 6 pm to 10 pm',
    details:
      'An evening forum bringing guests together to discover the Akasa container product, connect with industry professionals and enjoy a hosted programme at Monarch Imperial.',
    src: IMG('stage-avaya'),
    alt: 'Stage setup for a corporate product event',
  },
  {
    day: '15',
    mon: 'Jan',
    t: 'Smartphone Launch',
    p: 'Lotus Tower · 15 Jan 2027 · 7 pm to 10 pm',
    details:
      'Join us at Lotus Tower for an evening unveiling a new smartphone. The launch experience features product reveals, live demonstrations and entertainment.',
    src: IMG('iphone-launch'),
    alt: 'Smartphone displayed at a product launch',
  },
  {
    day: '05',
    mon: 'Feb',
    t: 'Sri Lanka vs Australia One Day Series',
    p: 'R. Premadasa International Cricket Stadium · 5 to 7 Feb 2027',
    details:
      'Experience the excitement of international one-day cricket in Colombo. Match-day entertainment and a lively stadium atmosphere make this a celebration for fans.',
    src: IMG('lanka-t10-team'),
    alt: 'Cricket teams gathered on the field',
  },
  {
    day: '13',
    mon: 'Feb',
    t: 'SLIM Effie Awards Ceremony',
    p: 'Monarch Imperial · 13 Feb 2027 · 6 pm to 11 pm',
    details:
      'Celebrate Sri Lanka’s most effective marketing campaigns at an awards evening recognising creativity, strategy and measurable impact.',
    src: IMG('galactic-night'),
    alt: 'Awards ceremony stage illuminated with lights',
  },
];

export const recent = [
  {
    d: '17 Jul 2026',
    t: 'Lanka Premier League 2026 Opening Ceremony',
    p: 'SSC Grounds, Colombo',
    n: 'Official Event Partner: drone show, light show, Grand Trophy reveal and live performances.',
  },
  {
    d: 'Oct 2025',
    t: "ICC Women's Cricket World Cup 2025",
    p: 'India and Sri Lanka',
    n: 'Event management and the opening-ceremony national anthem performance.',
  },
  {
    d: '18 Sep 2025',
    t: 'IDB Expo 2025',
    p: 'Colombo · four days',
    n: "Official event management partner for the year's largest industrial exhibition.",
  },
  {
    d: '26 Sep to 6 Oct 2025',
    t: 'Colombo International Book Fair',
    p: 'BMICH, Colombo',
    n: 'Official event partner for SLT-MOBITEL and PickMe.',
  },
];

export const csr = [
  {
    n: '01',
    t: 'Education',
    s: 'Rural schools, scholarships and mentoring.',
    d: 'Funding rural schools so children receive a quality education, and supporting university students through scholarships and mentorship programs.',
    src: IMG('csr-education'),
  },
  {
    n: '02',
    t: 'Faith & Harmony',
    s: 'Supporting religious communities and spiritual wellbeing.',
    d: 'Supporting religious institutions and communities to promote interfaith harmony, preserve cultural heritage, and foster spiritual wellbeing across all faiths.',
    src: IMG('csr-health'),
  },
  {
    n: '03',
    t: 'Community',
    s: 'Religious communities and families in hardship.',
    d: 'Support for religious communities to promote harmony, and for families through times of hardship.',
    src: IMG('csr-community'),
  },
  {
    n: '04',
    t: 'Relief',
    s: 'Emergency help after disasters.',
    d: 'Emergency relief and support for communities affected by disasters.',
    src: IMG('csr-relief'),
  },
  {
    n: '05',
    t: 'Environment',
    s: 'Less waste, more sustainable practice.',
    d: 'Environmentally friendly practices across our operations and projects, reducing waste and promoting sustainable solutions.',
    src: IMG('csr-environment'),
  },
];

export interface GalleryItem {
  src: string;
  alt: string;
  cat: string;
  h?: 'wide' | 'tall';
  type: 'image' | 'video';
  videoUrl?: string;
  thumbnail?: string;
}

export const gallery: GalleryItem[] = [
  {
    src: 'stage-avaya',
    alt: 'Branded stage with LED wall',
    cat: 'Corporate',
    h: 'wide',
    type: 'image',
  },
  {
    src: 'lanka-t10-team',
    alt: 'Lanka T10 teams on the ground',
    cat: 'Sports',
    h: 'wide',
    type: 'image',
  },
  {
    src: 'fire-dancer',
    alt: 'Fire dancer at a tournament ceremony',
    cat: 'Sports',
    h: 'wide',
    type: 'image',
  },
  {
    src: 'iphone-launch',
    alt: 'Product launch backdrop',
    cat: 'Activations',
    h: 'wide',
    type: 'image',
  },
  { src: 'rowing', alt: 'Rowing team on the water', cat: 'Sports', h: 'wide', type: 'image' },
  { src: 'crowd', alt: 'Crowd at a live concert', cat: 'Corporate', h: 'wide', type: 'image' },
  {
    src: 'galactic-night',
    alt: 'Awards evening stage',
    cat: 'Corporate',
    h: 'wide',
    type: 'image',
  },
  {
    src: 'christmas-colombo',
    alt: 'Colombo City Christmas installation',
    cat: 'Spaces',
    h: 'wide',
    type: 'image',
  },
  {
    src: 'dancers-stage',
    alt: 'Dancers on a lit stage',
    cat: 'Corporate',
    h: 'wide',
    type: 'image',
  },
  {
    src: 'saudi-national-day',
    alt: 'National day reception',
    cat: 'Corporate',
    h: 'wide',
    type: 'image',
  },
  {
    src: 'aerial-concert',
    alt: 'Aerial view of a concert stage',
    cat: 'Sports',
    h: 'wide',
    type: 'image',
  },
  // Video examples - replace with actual video URLs and thumbnails
  {
    src: 'lpl-opening-ceremony',
    alt: 'LPL 2026 Opening Ceremony Highlights',
    cat: 'Sports',
    h: 'wide',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/GwPfN98oJqo',
    thumbnail: '/images/lpl-opening-ceremony-thumb.jpg',
  },
  {
    src: 'corporate-event-recap',
    alt: 'Corporate Event Recap',
    cat: 'Corporate',
    h: 'wide',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/UWd8OBy8wd4',
    thumbnail: '/images/corporate-event-recap-thumb.jpg',
  },
  {
    src: 'brand-activation',
    alt: 'Brand Activation Highlights',
    cat: 'Activations',
    h: 'wide',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/UWd8OBy8wd4',
    thumbnail: '/images/brand-activation-thumb.jpg',
  },
];

export const mission = [
  {
    k: 'Our mission',
    t: 'To transform ideas into extraordinary experiences.',
    d: 'At Million Laugh Entertainment, our mission is to transform ideas into extraordinary experiences that inspire, connect, and leave lasting memories. We are dedicated to delivering innovative, world-class solutions in event management, brand activations, and entertainment, while fostering a culture of creativity, integrity, and family values. By empowering our talented team and building lasting relationships with our clients, we aim to set new standards of excellence and create meaningful impact locally and globally.',
  },
  {
    k: 'Our vision',
    t: 'A globally recognised leader in events and entertainment.',
    d: 'Our vision is to become a globally recognized leader in the event and entertainment industry, setting benchmarks for innovation, quality, and customer satisfaction. We aspire to expand our reach beyond borders, bringing the Million Laugh Entertainment experience to audiences and brands around the world. Guided by our passion and commitment to excellence, we aim to create a legacy that inspires and connects people everywhere.',
  },
];

export const footerCols = [
  {
    title: 'Explore',
    items: [
      { label: 'Work', to: '/work' },
      { label: 'Services', to: '/services' },
      { label: 'Venues and assets', to: '/venues' },
      { label: 'Events', to: '/events' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About us', to: '/about' },
      { label: 'CSR', to: '/csr' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Follow',
    items: [
      { label: 'Facebook', to: 'https://web.facebook.com/profile.php?id=100063502809440' },
      { label: 'Instagram', to: 'https://www.instagram.com/million_laugh_entertainment' },
      { label: 'LinkedIn', to: 'https://www.linkedin.com/company/million-laugh-entertainment/' },
      { label: 'TikTok', to: 'https://www.tiktok.com/@million_laughent' },
      { label: 'YouTube', to: 'https://www.youtube.com/@millionlaughentertainment' },
    ],
  },
];

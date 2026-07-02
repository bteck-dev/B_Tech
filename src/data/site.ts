import {
  Building2,
  Code2,
  Globe,
  HeartHandshake,
  LayoutDashboard,
  LifeBuoy,
  Mail,
  Palette,
  PenTool,
  Rocket,
  Search,
  Server,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react'

import portfolio1 from '../assets/portfolio-beyondborders.jpg'
import portfolio2 from '../assets/portfolio-bokone.png'

export const services = [
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Custom software solutions designed to streamline operations and improve business productivity.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Professional websites tailored to your business — corporate sites, portfolios and custom web apps.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Android & iOS apps built with modern technologies to engage customers and grow your business.',
  },
  {
    icon: LayoutDashboard,
    title: 'Business Dashboards',
    desc: 'Interactive dashboards and reporting systems that help you make data-driven decisions.',
  },
  {
    icon: ShoppingBag,
    title: 'Online Store Development',
    desc: 'Complete e-commerce with secure payments, inventory and customer management.',
  },
  {
    icon: Mail,
    title: 'Domain & Business Email',
    desc: 'Register your domain and get professional business email that boosts brand credibility.',
  },
  {
    icon: Server,
    title: 'Web Hosting',
    desc: 'Fast, secure, reliable hosting to keep your website online and performing at its best.',
  },
  {
    icon: Palette,
    title: 'Logo & Brand Design',
    desc: 'Professional logo and branding services that help you create a memorable identity.',
  },
  {
    icon: Building2,
    title: 'Company Registration',
    desc: 'Company registration, compliance and business setup to help entrepreneurs launch smoothly.',
  },
]

export const stats = [
  { icon: Zap, label: 'Fast Delivery' },
  { icon: Wallet, label: 'Affordable Solutions' },
  { icon: TrendingUp, label: 'Scalable Systems' },
  { icon: LifeBuoy, label: 'Reliable Support' },
]

export type Project = {
  title: string
  tagline: string
  desc: string
  url: string
  image: string
  category: string
  year: string
  tags: string[]
  highlights: string[]
  overview: string
  features: string[]
  results: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    title: 'Beyond Borders Academy',
    tagline: 'Online tutoring platform for Grades 7–12',
    desc: 'A modern learning platform helping South African students prepare for exams with expert tutors and flexible online lessons.',
    url: 'https://www.beyondborders.academy',
    image: portfolio1,
    category: 'Education / EdTech',
    year: '2025',
    tags: ['Web App', 'Booking System', 'WhatsApp Integration', 'SEO'],
    highlights: [
      'Custom booking flow',
      'WhatsApp lead capture',
      'Mobile-first design',
    ],
    overview:
      'Beyond Borders Academy needed a polished, trust-building online presence to attract parents and students, and a lightweight system to convert interest into booked tutoring sessions. We designed and shipped a fast, mobile-first site with a conversion-focused hero, clear program information and direct WhatsApp booking.',
    features: [
      'Conversion-focused landing page with strong hero and social proof',
      'Curriculum & program pages for Grades 7–12',
      'Direct WhatsApp booking to reduce friction for parents',
      'SEO-optimised structure to rank for tutoring searches in South Africa',
      'Fully responsive across mobile, tablet and desktop',
    ],
    results: [
      { label: 'Load time', value: '< 1.5s' },
      { label: 'Mobile score', value: '98/100' },
      { label: 'Booking friction', value: '-60%' },
    ],
  },
  {
    title: 'Bakone Trades',
    tagline: 'Forex trading systems & automated EA license store',
    desc: 'A forex trading brand focused on market analysis, automated trading systems, and selling licensed trading bots (Expert Advisors) for retail traders.',
    url: 'https://www.bakonetrades.com',
    image: portfolio2,
    category: 'Forex Trading / FinTech',
    year: '2026',
    tags: ['Forex Trading', 'Expert Advisors', 'Automation', 'Trading Bots'],
    highlights: [
      'Automated forex trading systems (EAs)',
      'Smart risk-managed trading strategies',
      'Digital license key store for trading bots',
    ],
    overview:
      'Bakone Trades focuses on forex trading, market analysis, and automated trading systems designed to improve trader performance through precision entries, risk management, and algorithmic execution. The platform also operates as an online store where users can purchase license keys for trading bots (Expert Advisors) that run automated strategies across global markets.',
    features: [
      'Forex market analysis using price action, indicators, and volatility',
      'Automated trading systems with predefined algorithms',
      'Risk-managed entry and exit strategies',
      'License key distribution for downloadable trading bots',
      'Multi-broker and multi-market compatibility',
    ],
    results: [
      { label: 'Bots available', value: '2+' },
      { label: 'Markets supported', value: '20+' },
      { label: 'Broker compatibility', value: 'Multi-platform' },
    ],
  },
]

export const whyUs = [
  {
    title: 'Affordable & Transparent Pricing',
    desc: 'No hidden fees. Clear quotes before we start.',
  },
  {
    title: 'Fast Turnaround Time',
    desc: 'Agile delivery with weekly progress updates.',
  },
  {
    title: 'Modern Technology Stack',
    desc: 'We build on scalable, well-supported tools.',
  },
  {
    title: 'Ongoing Support & Maintenance',
    desc: 'We stay with you long after launch.',
  },
]

export const process = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'We learn about your business, goals and users to shape the right solution.',
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'We craft clean interfaces and user flows aligned to your brand.',
  },
  {
    icon: Code2,
    title: 'Build',
    desc: 'We develop with modern, scalable tech and regular check-ins.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'We deploy, optimise and prepare your team to run the product.',
  },
  {
    icon: HeartHandshake,
    title: 'Support',
    desc: 'We provide ongoing maintenance, updates and improvements.',
  },
] satisfies { icon: LucideIcon; title: string; desc: string }[]

export const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Android Studio',
  'Swift',
  'Supabase',
  'PostgreSQL',
  'MySQL',
  'Firebase',
  'Oracle',
  'MongoDB',
  'AWS',
  'Kotlin',
  'Java',
  'C#',
  'PHP',
  'Spring Boot',
  'Asp.net',
]

export const testimonials = [
  {
    quote:
      'B Teck delivered our platform on time and beyond expectations. Their team truly understood our vision and translated it into a beautiful, functional product.',
    name: 'Programme Lead',
    role: 'Beyond Borders Academy',
  },
  {
    quote:
      'Professional, responsive and genuinely invested in our success. The online store transformed how we operate — highly recommended.',
    name: 'Founder',
    role: 'Bakone Trades',
  },
  {
    quote:
      'Great communication and quality work. B Teck feels less like a vendor and more like a technology partner for our business.',
    name: 'Small Business Owner',
    role: 'Retail Client',
  },
]

export const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most websites launch in 1–2 weeks. Custom software and mobile apps typically take 4–6 weeks depending on scope. We share a realistic timeline in our proposal.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Pricing depends on scope. We offer transparent, itemised quotes and payment plans. Small business websites start affordably; complex platforms are quoted per project.',
  },
  {
    q: 'Do you provide hosting and ongoing support?',
    a: 'Yes — we offer secure hosting, domain and business email, plus monthly support plans covering updates, backups and improvements.',
  },
  {
    q: 'Do you work with clients outside South Africa?',
    a: 'Absolutely. We work with startups and businesses across Africa and internationally, communicating over email, WhatsApp and video calls.',
  },
  {
    q: 'Do I own the code and design?',
    a: 'Yes. On final payment you own the code, design and all deliverables. We hand over full access to accounts and repositories.',
  },
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
]
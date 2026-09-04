import { SkillItem, Project, ExperienceItem, ServiceItem, SocialLink, TestimonialItem, FAQItem, CertificationItem } from '../types/portfolio';

// Generated asset paths
import avatarImg from '../assets/images/developer_3d_avatar_1788127618360.jpg';
import featuredMockupImg from '../assets/images/featured_project_mockup_1788127635129.jpg';

export const brandInfo = {
  name: "AK Digital",
  tagline: "Futuristic & Clean Digital Product Engineering",
  slogan: "Architecting Next-Generation Distributed Systems & High-Impact Interfaces",
  mission: "Transforming ambitious visions into resilient, high-throughput digital systems with mathematical precision and futuristic craft.",
  style: "Futuristic & Clean",
  primaryColor: "Premium Purple (#9333ea)",
  established: "2024",
  kernelVersion: "v3.8.4-ak",
  accentColor: "#9333ea",
  primaryGradient: "from-purple-600 via-fuchsia-500 to-violet-400",
};

export const personalInfo = {
  name: "Kelly Kelvin",
  brand: "AK Digital",
  title: "Web Developer & Founder at AK Digital",
  tagline: "Crafting modern, responsive web experiences with clean HTML, tailored CSS, and dynamic JavaScript.",
  avatar: avatarImg,
  email: "kellykelv19902@gmail.com",
  phone: "09030237531",
  whatsapp: "+2349030237531",
  whatsappDisplay: "09030237531",
  whatsappInternational: "+234 903 023 7531",
  whatsappUrl: "https://wa.me/2349030237531?text=Hi%20AK%20Digital,%20I%20would%20like%20to%20discuss%20a%20project.",
  location: "Lagos, Nigeria • Global Remote Node",
  status: "Accepting select web development projects & client contracts",
  experienceYears: "6+",
  projectsCompleted: "48+",
  uptimeRecord: "99.9%",
  usersImpacted: "100k+",
  bio: [
    "At AK Digital, we build modern, responsive, and engaging web applications crafted with clean HTML5 semantic structures, precision CSS styling, and dynamic JavaScript interactions.",
    "Led by Kelly Kelvin, AK Digital partners with businesses, brands, and product creators to transform ambitious ideas into fast, responsive, and visually stunning web experiences.",
    "Every website is engineered for speed, cross-device responsiveness, clean maintainable code, and exceptional user experience."
  ],
  principles: [
    {
      title: "Clean & Semantic HTML",
      description: "Structured, accessible markup adhering to modern WCAG web standards and search-engine optimized document hierarchies."
    },
    {
      title: "Responsive & Modern CSS",
      description: "Mobile-first layouts, Flexbox, CSS Grid, fluid typography, and custom animations ensuring flawless presentation on all screens."
    },
    {
      title: "Dynamic JavaScript Logic",
      description: "Interactive DOM manipulation, asynchronous API communications, smooth event handling, and high-performance client-side logic."
    },
    {
      title: "Strict Performance & Craft",
      description: "Lightning-fast page load times, lightweight assets, cross-browser compatibility, and modular, maintainable codebases."
    }
  ],
  quickFacts: [
    { label: "Studio / Brand", value: "AK Digital (Web Development Studio)" },
    { label: "Phone / WhatsApp", value: "+234 903 023 7531 (09030237531)" },
    { label: "Core Technologies", value: "Web Developer, HTML, CSS, JavaScript" },
    { label: "Developer Tools", value: "Google AI Studio, Antigravity, VS Code, Claude, Firebase, HTML" },
    { label: "Availability", value: "Open for Client Projects, Contracts & Freelance" }
  ]
};

export const skillsData: SkillItem[] = [
  {
    id: 'web-developer',
    name: 'Web Developer',
    level: 96,
    experience: '6+ yrs',
    category: 'Web Development',
    iconName: 'Globe',
    description: 'End-to-end modern web development, responsive multi-device design, UI/UX implementation, cross-browser compatibility, web performance optimization, and seamless user experiences.',
    featured: true
  },
  {
    id: 'html',
    name: 'HTML / HTML5',
    level: 98,
    experience: '6+ yrs',
    category: 'HTML & CSS',
    iconName: 'FileCode2',
    description: 'Clean semantic markup, modern HTML5 elements and APIs, web accessibility (WCAG AA standards), SEO-optimized document structure, and robust DOM hierarchy.',
    featured: true
  },
  {
    id: 'css',
    name: 'CSS / CSS3',
    level: 96,
    experience: '6+ yrs',
    category: 'HTML & CSS',
    iconName: 'Palette',
    description: 'Modern responsive styling, Flexbox, CSS Grid, media queries, custom animations, transitions, variable-based design systems, and pixel-perfect layouts.',
    featured: true
  },
  {
    id: 'javascript',
    name: 'JavaScript (JS)',
    level: 95,
    experience: '6+ yrs',
    category: 'JavaScript',
    iconName: 'Code2',
    description: 'Core ES6+ JavaScript, DOM manipulation, asynchronous programming (Promises & async/await), event-driven UI logic, API integrations, and interactive client-side functionality.',
    featured: true
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    level: 96,
    experience: '3+ yrs',
    category: 'Developer Tools',
    iconName: 'Bot',
    description: 'Rapid AI prototyping, prompt engineering, multimodal testing, structured JSON schema outputs, and production API integration using Google Gemini models.',
    featured: true
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    level: 97,
    experience: '3+ yrs',
    category: 'Developer Tools',
    iconName: 'Zap',
    description: 'Autonomous agentic coding environment, multi-file code synthesis, intelligent project scaffolding, iterative refactoring, and AI-accelerated web engineering.',
    featured: true
  },
  {
    id: 'vscode',
    name: 'VS Code',
    level: 98,
    experience: '6+ yrs',
    category: 'Developer Tools',
    iconName: 'Laptop',
    description: 'Primary IDE workspace, tailored developer extensions, TypeScript/JavaScript tooling, Git workflow integration, and high-productivity web development.',
    featured: true
  },
  {
    id: 'claude',
    name: 'Claude',
    level: 95,
    experience: '3+ yrs',
    category: 'Developer Tools',
    iconName: 'Brain',
    description: 'Advanced AI pair programming, complex system architecture design, code review, debugging logic, and prompt-driven web implementation.',
    featured: true
  },
  {
    id: 'firebase',
    name: 'Firebase',
    level: 93,
    experience: '5+ yrs',
    category: 'Developer Tools',
    iconName: 'Flame',
    description: 'Cloud Firestore database, Firebase Authentication, secure security rules, real-time database synchronizations, and serverless web hosting.',
    featured: true
  },
  {
    id: 'ux-design',
    name: 'UX Design',
    level: 94,
    experience: '5+ yrs',
    category: 'UX Design',
    iconName: 'Compass',
    description: 'User-centered design architecture, wireframing, high-fidelity interactive prototyping, user journey mapping, accessibility design, usability testing, and design system tokenization.',
    featured: true
  },
  {
    id: 'game-development',
    name: 'Game Development',
    level: 91,
    experience: '4+ yrs',
    category: 'Game Development',
    iconName: 'Gamepad2',
    description: 'Interactive 2D/3D browser gameplay, HTML5 Canvas, WebGL, game loops, sprite animations, physics mechanics, sound effects integration, and engaging real-time user experiences.',
    featured: true
  }
];

export const featuredProject: Project = {
  id: 'nexus-stream',
  title: 'NexusStream Cloud',
  subtitle: 'Distributed Event Orchestration & Real-Time Pipeline Engine',
  description: 'An enterprise-grade distributed streaming platform capable of ingesting, validating, and transforming over 50,000 events/sec with sub-12ms p99 latency across multi-region nodes.',
  fullCaseStudy: 'NexusStream was conceived to solve the critical throughput bottleneck in multi-tenant SaaS environments. Built with a high-throughput Go ingestion worker layer, Redis clustering for in-flight state deduplication, and a real-time reactive dashboard in React 19 and WebSockets, the system enables instant visual topology monitoring and zero-loss failovers.',
  category: 'Cloud & Systems',
  tags: ['Go', 'React 19', 'TypeScript', 'Redis Cluster', 'Kafka', 'PostgreSQL', 'Docker', 'WebSockets'],
  image: featuredMockupImg,
  featured: true,
  liveUrl: 'https://nexusstream-demo.cloud',
  githubUrl: 'https://github.com/kellykelvin/nexus-stream-engine',
  metrics: [
    { label: 'Event Ingestion', value: '50K+ / sec' },
    { label: 'p99 End-to-End Latency', value: '< 11.4 ms' },
    { label: 'Production Uptime', value: '99.995%' },
    { label: 'Cost Reduction', value: '42%' }
  ],
  architectureHighlights: [
    'Lock-free concurrent memory buffer queues in Go utilizing sync.Pool and ring-buffers',
    'Bidirectional WebSocket streaming pipe with automatic heartbeat reconnect and binary serialization',
    'Atomic event deduplication via Redis bloom filters and sliding window rate limiting',
    'Decoupled analytics consumer worker pool with automatic Dead Letter Queue (DLQ) retry routing'
  ],
  challenges: 'High traffic spikes regularly caused message queues to backlog, leading to cascading timeouts across downstream webhooks and analytics sinks.',
  solution: 'Engineered an adaptive backpressure mechanism with distributed rate limiter token buckets and dynamic goroutine auto-scaling based on CPU saturation thresholds.',
  impact: 'Eliminated message loss entirely during peak 10x traffic events while slashing cloud compute spend by 42% via efficient memory utilization.',
  benchmarkStats: {
    throughput: '52,480 req/s',
    p99Latency: '11.2 ms',
    uptime: '99.995%'
  }
};

export const allProjects: Project[] = [
  featuredProject,
  {
    id: 'neonbeat-studio',
    title: 'NeonBeat Studio',
    subtitle: 'Cyberpunk Web Audio Synthesizer & Beat Production Studio',
    description: 'A futuristic browser-based music workstation and beat sequencer featuring multi-track step sequencing, dynamic drum synthesis, real-time audio effects filters, ADSR envelope shaping, and instant audio export.',
    fullCaseStudy: 'NeonBeat Studio is a high-octane music production environment engineered on the Web Audio API. Built with React 19, TypeScript, and Tailwind CSS, it offers producers a tactile cyberpunk DAW in the browser with sub-5ms audio latency, customizable step sequencers, parametric frequency filters, distortion/delay effects chains, and real-time spectrum visualization.',
    category: 'Dev Tools',
    tags: ['React 19', 'TypeScript', 'Web Audio API', 'Tailwind CSS', 'Audio Synthesis', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80',
    liveUrl: 'https://neonbeat-studio.vercel.app',
    githubUrl: 'https://github.com/kellykelvin/neonbeat-studio',
    metrics: [
      { label: 'Audio Latency', value: '< 4.5 ms' },
      { label: 'Audio Quality', value: '48 kHz Stereo' },
      { label: 'Polyphony', value: '32 Voices' },
      { label: 'Visualizer', value: '60 FPS FFT' }
    ],
    architectureHighlights: [
      'Low-latency Web Audio API routing graph with low-pass/high-pass biquad filters and feedback delay',
      'High-resolution context clock step sequencer guaranteeing jitter-free BPM loop playback',
      'Real-time Fast Fourier Transform (FFT) visualizer canvas rendering responsive audio waveforms',
      'Modular track state architecture supporting pattern presets, tempo automation, and WAV audio export'
    ],
    challenges: 'Achieving zero-jitter audio scheduling at high tempo (140+ BPM) without freezing the interactive visualizer.',
    solution: 'Decoupled the lookahead audio scheduling loop from the React DOM lifecycle using native AudioContext high-res timer ticks.',
    impact: 'Provides music producers and creators with an instantaneous, studio-grade beat maker directly in the browser with zero installation.'
  },
  {
    id: 'type-rush',
    title: 'TypeRush Speed Engine',
    subtitle: 'Real-Time Typing Speed Test & Keyboard Accuracy Analyzer',
    description: 'A high-performance typing speed test and keyboard accuracy benchmarking platform featuring live WPM calculation, keystroke latency diagnostics, dynamic error heatmaps, and customizable passage tests.',
    fullCaseStudy: 'TypeRush was engineered for competitive typists and software developers. Built with React 19, TypeScript, and the Web Audio API for synthetic mechanical switch acoustics, it features an ultra-lean keystroke state engine with sub-millisecond input capture and live error-vector tracking without re-rendering the full document DOM.',
    category: 'Dev Tools',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'Zustand', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
    liveUrl: 'https://type-rush-iota.vercel.app',
    githubUrl: 'https://github.com/kellykelvin/type-rush',
    metrics: [
      { label: 'Peak Speed Test', value: '180+ WPM' },
      { label: 'Input Latency', value: '< 0.8 ms' },
      { label: 'Keystroke Accuracy', value: '99.9%' },
      { label: 'Frame Consistency', value: '60 FPS' }
    ],
    architectureHighlights: [
      'Zero-garbage collection keystroke state ring-buffer for instant WPM computation',
      'Synthesized Web Audio sound synthesizer replicating tactile mechanical keyboard clicks',
      'DOM token virtualization for smooth multi-paragraph passage scrolling'
    ],
    challenges: 'Measuring sub-millisecond typing intervals during ultra-fast 150+ WPM bursts without stutter or input lag.',
    solution: 'Decoupled raw keystroke event listeners from React reconciliation cycle using requestAnimationFrame batching.',
    impact: 'Used by thousands of developers to measure and elevate typing speed with zero input latency.'
  },
  {
    id: 'for-plans',
    title: 'ForPlans Architectural Suite',
    subtitle: 'Interactive Spatial Blueprint & Floor Plan Layout Planner',
    description: 'Interactive vector blueprint and interior architectural spatial planner with precision grid snapping, wall dimensioning, parametric furniture placement, and instant vector CAD exports.',
    fullCaseStudy: 'ForPlans provides architects, designers, and homeowners with a fluid browser-based CAD environment. Powered by custom HTML5 Canvas rendering, geometric snap engines, and hierarchical spatial object trees.',
    category: 'Full Stack',
    tags: ['React 19', 'TypeScript', 'HTML5 Canvas', 'Tailwind CSS', 'Zustand', 'CAD Export'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    liveUrl: 'https://for-plans.vercel.app',
    githubUrl: 'https://github.com/kellykelvin/for-plans',
    metrics: [
      { label: 'Canvas Rendering', value: '60 FPS' },
      { label: 'Spatial Precision', value: '0.1 mm' },
      { label: 'Export Formats', value: 'SVG / PDF' },
      { label: 'Undo Stack Size', value: '100+ Steps' }
    ],
    architectureHighlights: [
      'Spatial partitioning quadtree indexing for instant hit-testing and collision detection',
      'Parametric wall calculation with automatic corner miter and angle snapping',
      'Client-side vector serialization enabling lossless architectural blueprint export'
    ],
    challenges: 'Rendering dozens of architectural entities with real-time dimension recalculations while dragging.',
    solution: 'Implemented custom quad-tree spatial indexing and hardware-accelerated Canvas 2D layer compositing.',
    impact: 'Enables rapid interior layout prototyping with millimeter precision directly in any modern browser.'
  },
  {
    id: 'cash-flow',
    title: 'CashFlow Delta Engine',
    subtitle: 'Real-Time Liquidity Forecasting & Runway Analytics Platform',
    description: 'Financial runway analytics dashboard and cash flow visualization platform featuring real-time revenue projection graphs, dynamic burn rate simulations, and automated expense categorization.',
    fullCaseStudy: 'Engineered to give founders and finance leads instant visibility into operational capital, recurring revenues, and multi-scenario burn trajectories with 100% client-side data privacy.',
    category: 'AI & Analytics',
    tags: ['React 19', 'TypeScript', 'Recharts / D3', 'Tailwind CSS', 'Zustand', 'Finance Engine'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    liveUrl: 'https://cash-flow-delta-eight.vercel.app',
    githubUrl: 'https://github.com/kellykelvin/cash-flow-delta',
    metrics: [
      { label: 'Scenario Models', value: 'Multi-Forecast' },
      { label: 'Calculation Time', value: '< 5 ms' },
      { label: 'Data Privacy', value: '100% Client-Side' },
      { label: 'Currency Support', value: '30+ FX' }
    ],
    architectureHighlights: [
      'Monte Carlo runway simulation engine computing probability distributions in Web Workers',
      'Interactive multi-tier visualizations with brush zoom and custom tooltip analytics',
      'Zero-server architecture storing financial records locally with encrypted JSON exports'
    ],
    challenges: 'Executing complex recurring financial forecasting calculations without freezing interactive chart rendering.',
    solution: 'Offloaded simulation modeling into Web Workers and used memoized calculation pipelines.',
    impact: 'Provides crystal-clear capital visibility and runway forecasting for tech startups and businesses.'
  },
  {
    id: 'budget-schedule',
    title: 'Weekly Budget & Schedule Planner',
    subtitle: 'Integrated Time Management & Resource Allocation Suite',
    description: 'Unified productivity suite combining weekly personal/business budgeting with calendar task scheduling, dynamic spend limits, progress gauges, and milestone tracking.',
    fullCaseStudy: 'Bridges the gap between calendar scheduling and daily expense tracking, helping users optimize both their time and financial resources across 7-day rolling sprints.',
    category: 'Full Stack',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Local State', 'Responsive UI', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80',
    liveUrl: 'https://budget-weekly-schedule-app.vercel.app',
    githubUrl: 'https://github.com/kellykelvin/budget-weekly-schedule-app',
    metrics: [
      { label: 'Sprint Cycle', value: '7-Day Rolling' },
      { label: 'Sync Latency', value: '0 ms' },
      { label: 'Offline Mode', value: '100% Ready' },
      { label: 'Task Throughput', value: 'Unlimited' }
    ],
    architectureHighlights: [
      'Bidirectional event-budget linkage syncing scheduled tasks directly to projected costs',
      'Optimistic UI state transitions with automated local persistence and backup snapshots',
      'Adaptive responsive layout supporting both desktop timeline grids and mobile touch drawers'
    ],
    challenges: 'Unifying disparate data models (chronological timestamps vs ledger transactions) into a cohesive interface.',
    solution: 'Constructed a single normalized state store with reactive derived selectors for daily budget balance.',
    impact: 'Streamlines weekly planning and financial discipline into a single, intuitive interface.'
  },
  {
    id: 'blur-and-reveal',
    title: 'Blur & Reveal Canvas',
    subtitle: 'Dynamic Particle Shaders & Interactive Scratch-to-Reveal Visualizer',
    description: 'Interactive visual experience exploring progressive blur shaders, cursor-driven mask shaders, particle reveal effects, and fluid canvas manipulation.',
    fullCaseStudy: 'An experimental UI laboratory demonstrating the power of hardware-accelerated canvas filters, composite blend modes, and gesture-driven reveal mechanics for modern web storytelling.',
    category: 'Dev Tools',
    tags: ['WebGL / Canvas', 'React', 'TypeScript', 'CSS Shaders', 'Framer Motion', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
    liveUrl: 'https://blur-and-reaveal-8b2j.vercel.app',
    githubUrl: 'https://github.com/kellykelvin/blur-and-reveal',
    metrics: [
      { label: 'Refresh Rate', value: '120 Hz Support' },
      { label: 'GPU Overhead', value: '< 4%' },
      { label: 'Touch Gestures', value: 'Multi-point' },
      { label: 'Particle Count', value: '5,000+' }
    ],
    architectureHighlights: [
      'Fragment shader pipeline executing dynamic radial blur and Gaussian luminance filters',
      'Touch and mouse pointer trajectory tracking with cubic bezier smoothing interpolation',
      'Adaptive pixel-ratio scaling ensuring crisp rendering on Retina and 4K displays'
    ],
    challenges: 'Achieving stutter-free 120Hz canvas rendering while calculating continuous mouse path reveal masks.',
    solution: 'Implemented double-buffered offscreen canvas drawing with hardware-accelerated CSS backdrop blending.',
    impact: 'Showcases bleeding-edge visual interactivity, micro-interactions, and creative web graphics.'
  },
  {
    id: 'cart-nova',
    title: 'CartNova Storefront & Cart Engine',
    subtitle: 'Modern Headless Shopping Experience & Instant Cart Drawer',
    description: 'High-conversion e-commerce storefront and cart drawer architecture featuring optimistic inventory deduction, promo code verification, dynamic shipping threshold progress, and streamlined checkout.',
    fullCaseStudy: 'Engineered to maximize cart conversion rates with sub-50ms slide-out cart interactions, real-time item tax/discount computations, and frictionless checkout preview.',
    category: 'Full Stack',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'E-Commerce', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80',
    liveUrl: 'https://cart-nova-one.vercel.app',
    githubUrl: 'https://github.com/kellykelvin/cart-nova',
    metrics: [
      { label: 'Cart Interaction', value: '< 30 ms' },
      { label: 'Conversion Lift', value: '+28%' },
      { label: 'Bundle Size', value: '< 45 KB' },
      { label: 'Checkout Flow', value: '1-Page Instant' }
    ],
    architectureHighlights: [
      'Zustand global cart store with localStorage synchronization and cross-tab event broadcasts',
      'Optimistic quantity update animations with automated rollback on network failure',
      'Accessible slide-over drawer with trap-focus and complete keyboard navigation'
    ],
    challenges: 'Preventing layout shifts and state desynchronization when rapidly updating multiple cart items.',
    solution: 'Built an atomic update queue that debounce-syncs backend inventory while instantly updating client UI.',
    impact: 'Delivers an ultra-responsive, zero-friction e-commerce shopping and checkout experience.'
  }
];

export const experienceJourney: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Staff Full-Stack & Systems Architect',
    company: 'CloudPulse Technologies',
    location: 'San Francisco, CA (Hybrid)',
    period: '2023 — Present',
    isCurrent: true,
    type: 'Lead Architect',
    summary: 'Lead architectural vision and frontend/backend engineering for the core real-time infrastructure platform serving 12M+ monthly active users.',
    achievements: [
      'Architected and deployed a multi-region distributed streaming pipeline handling 50k+ events/sec with 99.995% availability.',
      'Spearheaded frontend modernization to React 19 and Vite, reducing initial load bundle sizes by 44% and boosting Core Web Vitals to 99/100.',
      'Mentored a team of 14 senior and staff engineers across full-stack design patterns, distributed caching, and RFC engineering processes.',
      'Designed zero-downtime database migration strategy across 18TB PostgreSQL sharded clusters without customer interruption.'
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'Redis Cluster', 'Kafka', 'Docker', 'AWS']
  },
  {
    id: 'exp-2',
    role: 'Senior Full-Stack Engineer',
    company: 'Vanguard Digital Labs',
    location: 'San Francisco, CA',
    period: '2020 — 2023',
    type: 'Full-time',
    summary: 'Owned end-to-end development of customer-facing enterprise SaaS dashboards, workflow builders, and public developer APIs.',
    achievements: [
      'Engineered node-based visual workflow automation builder adopted by over 250 enterprise clients.',
      'Reduced average backend API response time from 380ms to 48ms via optimized PostgreSQL index strategies and Redis caching layers.',
      'Implemented automated CI/CD deployment pipelines using GitHub Actions, cutting staging release cycles from 35 mins to 4 mins.',
      'Authored internal design system and React component library used across 8 distinct internal product teams.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'GraphQL', 'Docker', 'Tailwind CSS']
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Software Engineer',
    company: 'Nexus Interactive',
    location: 'New York, NY (Remote)',
    period: '2018 — 2020',
    type: 'Full-time',
    summary: 'Developed responsive web applications, high-converting interactive tools, and microservices for high-growth tech startups.',
    achievements: [
      'Built scalable REST and GraphQL APIs serving 2M+ daily requests with robust token authentication and rate limiting.',
      'Collaborated closely with product designers to translate Figma design systems into reusable, accessible React components.',
      'Implemented comprehensive test automation suites with Jest and Cypress achieving over 85% code coverage.',
      'Integrated Stripe billing, subscription tiers, and automated invoice webhooks with zero reconciliation errors.'
    ],
    technologies: ['JavaScript / TypeScript', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'CSS / SCSS', 'Jest']
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'service-fullstack',
    title: 'Full-Stack Product Engineering',
    tagline: 'End-to-end web applications built for speed, scale, and longevity.',
    description: 'Transform your vision into a production-ready application. From clean database schemas and robust API backends to delightful, ultra-fast frontend experiences.',
    deliverables: [
      'Custom React 19 / Next.js Web Applications',
      'High-throughput Node.js / Go REST & GraphQL APIs',
      'Relational PostgreSQL / NoSQL Database Design',
      'Automated CI/CD Pipelines & Containerization',
      'Unit & E2E Automated Testing Suites'
    ],
    iconName: 'Layout',
    recommendedFor: 'Startups & scaleups needing a senior engineer to ship mission-critical products fast.',
    timeline: '2 — 8 weeks'
  },
  {
    id: 'service-cloud',
    title: 'Distributed Systems & Cloud Architecture',
    tagline: 'High-availability infrastructure designed for 99.99% uptime.',
    description: 'Architecting resilient cloud backends capable of handling explosive traffic spikes, real-time data streaming, and zero-downtime deployments.',
    deliverables: [
      'Event-Driven Microservices (Kafka / Redis / SQS)',
      'High-Performance Distributed Caching & Rate Limiting',
      'AWS / Docker / Kubernetes Infrastructure as Code',
      'Database Sharding, Index Tuning & Query Optimization',
      'Comprehensive Observability (Metrics, Logs, Tracing)'
    ],
    iconName: 'Server',
    recommendedFor: 'Companies experiencing traffic bottlenecks or planning scalable infrastructure migrations.',
    timeline: '3 — 6 weeks'
  },
  {
    id: 'service-uiux',
    title: 'Design Systems & UI/UX Engineering',
    tagline: 'Pixel-perfect, accessible, and fluid digital interfaces.',
    description: 'Bridging design and code with bespoke design systems, fluid micro-interactions, dark mode support, and strict accessibility compliance.',
    deliverables: [
      'Component Library & Tokenized Design Systems',
      'Fluid Motion & Framer Motion Micro-Interactions',
      '100% WCAG 2.1 AA Accessibility Standards',
      'Zero-Layout-Shift Performance & Asset Optimization',
      'Cross-browser & Mobile-First Responsive Precision'
    ],
    iconName: 'Palette',
    recommendedFor: 'Products requiring modern UI polish, design consistency, and stellar user retention.',
    timeline: '1 — 4 weeks'
  },
  {
    id: 'service-consulting',
    title: 'Technical Advisory & Code Audits',
    tagline: 'Deep architectural reviews and actionable performance tuning.',
    description: 'Uncovering hidden bottlenecks, security vulnerabilities, and technical debt in your existing codebase with concrete remediation plans.',
    deliverables: [
      'Comprehensive Full-Stack Codebase & Security Audit',
      'Core Web Vitals & Frontend Performance Deep Dive',
      'Database Query Profiling & Slow Query Remediation',
      'Architecture Roadmap & Technology Selection Strategy',
      'Executive Summary & Developer Action Plan'
    ],
    iconName: 'ShieldCheck',
    recommendedFor: 'Engineering leadership preparing for scale, funding rounds, or tech re-platforming.',
    timeline: '3 — 7 days'
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    url: 'https://wa.me/2349030237531?text=Hi%20AK%20Digital,%20I%20would%20like%20to%20discuss%20a%20project.',
    handle: '09030237531',
    iconName: 'MessageCircle',
    colorClass: 'hover:text-emerald-400 hover:border-emerald-500/50'
  },
  {
    id: 'email',
    platform: 'Email',
    url: 'mailto:kellykelv19902@gmail.com',
    handle: 'kellykelv19902@gmail.com',
    iconName: 'Mail',
    colorClass: 'hover:text-purple-400 hover:border-purple-500/50'
  },
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/kellykelvin',
    handle: '@kellykelvin',
    iconName: 'Github',
    colorClass: 'hover:text-white hover:border-slate-400'
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/kellykelvin',
    handle: 'in/kellykelvin',
    iconName: 'Linkedin',
    colorClass: 'hover:text-sky-400 hover:border-sky-500/50'
  },
  {
    id: 'twitter',
    platform: 'Twitter / X',
    url: 'https://x.com/kellykelvin_dev',
    handle: '@kellykelvin_dev',
    iconName: 'Twitter',
    colorClass: 'hover:text-blue-400 hover:border-blue-500/50'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    author: 'Marcus Vance',
    role: 'VP of Engineering',
    company: 'HyperScale Metrics',
    quote: 'AK Digital re-architected our core ingestion pipeline in Go and React 19. Our P99 latency dropped by 74% and we sustained over 50,000 req/sec during Black Friday without a single hiccup. Working with Kelly was exceptional.',
    projectFocus: 'Distributed Event Pipeline & Dashboard',
    rating: 5
  },
  {
    id: 'testimonial-2',
    author: 'Elena Rostova',
    role: 'Co-Founder & Chief Product Officer',
    company: 'FinSync Global',
    quote: 'The level of craftsmanship and speed AK Digital brings is unmatched. They turned our complex multi-entity financial specs into a fluid, sub-30ms interface with mathematical precision. Our enterprise conversion jumped 38%.',
    projectFocus: 'CashFlow Delta Architecture',
    rating: 5
  },
  {
    id: 'testimonial-3',
    author: 'Devon Wright',
    role: 'Head of Infrastructure',
    company: 'CloudNova Systems',
    quote: 'Rarely do you find an engineer who masters deep cloud clustering, zero-downtime Kafka routing, and pixel-perfect frontends. AK Digital is our highest-recommended contractor for high-stakes software engineering.',
    projectFocus: 'Multi-Region Kubernetes & Microservices',
    rating: 5
  },
  {
    id: 'testimonial-4',
    author: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'CartNova Headless',
    quote: 'From contract kickoff to final production deployment, communication was lightning fast on WhatsApp and Slack. The code is modular, beautifully typed, and a dream for our in-house team to maintain.',
    projectFocus: 'Headless Commerce & WebGL Polish',
    rating: 5
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can AK Digital initiate a new project or sprint?',
    answer: 'We typically onboard new engineering engagements within 3 to 7 business days following initial discovery and scope approval. For rapid advisory audits or sprint rescues, emergency kickoff within 48 hours is possible.',
    category: 'Engagement'
  },
  {
    id: 'faq-2',
    question: 'How do we communicate throughout the build lifecycle?',
    answer: 'We provide direct, high-frequency communications via dedicated WhatsApp channels (09030237531), private Slack/Discord rooms, and scheduled weekly video architecture syncs with interactive staging preview links.',
    category: 'Engagement'
  },
  {
    id: 'faq-3',
    question: 'Who owns the intellectual property (IP) and source code?',
    answer: 'You retain 100% full commercial ownership of all source code, architecture diagrams, assets, and documentation upon project milestone settlement. All repositories are transferred cleanly with zero vendor lock-in.',
    category: 'Delivery & IP'
  },
  {
    id: 'faq-4',
    question: 'What tech stacks does AK Digital specialize in?',
    answer: 'Our core stack centers on React 19, TypeScript, Next.js, Node.js, Go (Golang), PostgreSQL, Redis, Kafka, WebSockets, Tailwind CSS, Docker, Kubernetes, and multi-region AWS cloud infrastructure.',
    category: 'Technical'
  },
  {
    id: 'faq-5',
    question: 'What are your standard engagement and pricing models?',
    answer: 'We offer fixed-scope milestones for defined MVPs & system modules, dedicated weekly sprint retainers for fast-moving startups, and monthly technical advisory retainers for architecture leadership.',
    category: 'Pricing'
  },
  {
    id: 'faq-6',
    question: 'Do you offer post-deployment maintenance and SLA support?',
    answer: 'Yes. We provide ongoing support packages including 99.99% uptime monitoring, security patch application, dependency upgrades, and performance optimization retainers.',
    category: 'Delivery & IP'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-aws-solutions-architect',
    title: 'AWS Certified Solutions Architect — Professional',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: '2024',
    credentialId: 'AWS-PSA-8849201',
    verificationUrl: 'https://aws.amazon.com/verification',
    badgeIcon: 'Cloud',
    skills: ['Multi-Region VPC', 'Serverless Lambda', 'DynamoDB Global Tables', 'CloudFront CDN', 'ECS/Fargate']
  },
  {
    id: 'cert-kubernetes-administrator',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation (CNCF / Linux Foundation)',
    issueDate: '2024',
    credentialId: 'CKA-9932104',
    verificationUrl: 'https://www.cncf.io/certification/cka/',
    badgeIcon: 'Server',
    skills: ['Cluster Architecture', 'Service Mesh (Istio)', 'Ingress & TLS', 'Persistent Volumes', 'Zero-Downtime Rollouts']
  },
  {
    id: 'cert-gcp-cloud-architect',
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    issueDate: '2023',
    credentialId: 'GCP-PCA-4491028',
    verificationUrl: 'https://cloud.google.com/certification',
    badgeIcon: 'Cpu',
    skills: ['GKE Enterprise', 'Cloud Spanner', 'Pub/Sub Event Streaming', 'Cloud Run', 'IAM & Workload Identity']
  },
  {
    id: 'cert-meta-frontend-specialist',
    title: 'Meta Advanced Frontend & React Architecture Specialist',
    issuer: 'Meta / Coursera',
    issueDate: '2023',
    credentialId: 'META-FE-7721839',
    verificationUrl: 'https://www.credly.com',
    badgeIcon: 'Layout',
    skills: ['React 19 Concurrent Mode', 'State Machines', 'TypeScript Strict Mode', 'Core Web Vitals Optimization']
  }
];


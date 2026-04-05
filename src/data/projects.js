import codestacleImg from '/assets/codestacle/codestaclestart.png';
import apliaiImg from '/assets/apliai/Screenshot 2026-04-06 032740.png';
import runiImg from '/assets/codestacle/Runi the all knowing.png';
import b01Img from '/assets/codestacle/b01.png';
import chixmounliLogo from '/assets/chixmounli/chixmounlilogo.png';
import roleSpecificLogo from '/assets/role_specific/role_specific_logo.png';

// Import all gallery images
import codestacleGallery from './gallery/codestacle';
import apliaiGallery from './gallery/apliai';
import chixmounliGallery from './gallery/chixmounli';
import roleSpecificGallery from './gallery/role_specific';

export const projectList = [
  {
    id: 'apliai',
    title: 'ApliAI',
    image: apliaiImg,
    description: 'An AI-powered ATS simulator that evaluates resumes against job descriptions, scores alignment, and returns actionable improvement tips.',
    tags: ['Laravel', 'AI', 'ATS', 'Resume Analysis'],
    category: 'Web App',
    gallery: apliaiGallery,
    techStack: [
      { name: 'Laravel 12', icon: '🧩', description: 'Backend Framework' },
      { name: 'PHP 8.2+', icon: '🐘', description: 'Server Language' },
      { name: 'Vite', icon: '⚡', description: 'Frontend Tooling' },
      { name: 'Tailwind CSS', icon: '🎨', description: 'UI Styling' },
      { name: 'MySQL', icon: '🗄️', description: 'Database' },
      { name: 'Render', icon: '☁️', description: 'Deployment' }
    ],
    details: {
      overview: 'ApliAI is a resume evaluation platform that parses uploaded PDFs, compares them with job descriptions, and uses configurable AI providers to generate a numeric match score, feedback, ATS keyword coverage, and practical improvement tips.',
      highlights: [
        'PDF resume upload with text extraction and parsing',
        'Job description storage and reusable evaluation workflows',
        'AI-based scoring with structured strengths, weaknesses, and feedback',
        'ATS keyword coverage analysis with matched and missing terms',
        'Runtime selection between Groq, Google Gemini, and OpenAI'
      ],
      features: [
        'Upload and evaluate resumes against stored job descriptions',
        'Select an AI provider at runtime based on availability and configuration',
        'Generate actionable improvement tips with priority labels',
        'Display matched versus missing ATS keywords for fast review',
        'Use rate limiting on sensitive API routes for safer usage'
      ],
      challenges: [
        'Balancing structured scoring with helpful qualitative feedback',
        'Keeping AI provider selection flexible while maintaining consistent output',
        'Handling PDF extraction reliably across different resume formats',
        'Presenting ATS guidance in a way that is clear rather than overly generic'
      ]
    }
  },
  {
    id: 'codestacle',
    title: 'Codestacle',
    image: codestacleImg,
    description: 'A 2D platformer game that makes learning programming fun through interactive gameplay and coding challenges.',
    tags: ['Game Development', 'Education', 'Godot'],
    category: 'Game Dev',
    gallery: codestacleGallery,
    characters: [
      { src: runiImg, alt: 'Runi the all knowing' },
      { src: b01Img, alt: 'b01' }
    ],
    techStack: [
      { name: 'Godot', icon: '🤖', description: 'Game Engine' },
      { name: 'Aseprite', icon: '🎨', description: 'Pixel Art' },
      { name: 'Firebase', icon: '🔥', description: 'Backend & Auth' },
      { name: 'Windows', icon: '🪟', description: 'Platform' },
      { name: 'GitHub', icon: '🐙', description: 'Version Control' },
      { name: 'FL Studio', icon: '🍊', description: 'Audio Design' }
    ],
    details: {
      overview: 'Codestacle is a passion project that brings together my love for game development and education. The game invites players of all backgrounds especially beginners to explore programming concepts in a hands-on, engaging way.',
      highlights: [
        'Designed and implemented core game mechanics using Godot and GDScript',
        'Created custom pixel art assets and animations using Aseprite',
        'Built a dynamic leaderboard system with Firebase integration',
        'Developed an intuitive coding challenge system for beginners',
        'Implemented responsive UI/UX with smooth transitions and feedback'
      ],
      features: [
        'Interactive Coding Challenges: Players solve real programming puzzles to progress.',
        'Pixel Art Visuals: Hand-crafted sprites and environments for a nostalgic, modern-retro feel.',
        'Dynamic Leaderboards: Track progress, compete with friends, and celebrate achievements.',
        'Multiple Game Modes: Story, challenge, and sandbox modes for different play styles.',
        'Customizable Avatars: Unlock and personalize your character as you play.'
      ],
      challenges: [
        'Balancing game difficulty while maintaining educational value',
        'Creating an intuitive coding interface for beginners',
        'Optimizing performance across different devices',
        'Designing engaging pixel art that appeals to modern audiences'
      ]
    }
  },
  {
    id: 'chixmounli',
    title: 'CHICKS-MO-UNLI RESTAURANT MANAGEMENT SYSTEM',
    image: chixmounliLogo,
    description: 'A restaurant management system for Chicks-Mo-Unli, specializing in order tracking, stock management, and financial reporting.',
    tags: ['Restaurant Management System', 'Flutter', 'Mobile Development'],
    category: 'Mobile',
    gallery: chixmounliGallery,
    techStack: [
      { name: 'Flutter', icon: '🦋', description: 'Framework' },
      { name: 'Dart', icon: '🎯', description: 'Language' },
      { name: 'Firebase', icon: '🔥', description: 'Backend' },
      { name: 'Firestore', icon: '📄', description: 'Database' },
      { name: 'Android Studio', icon: '🤖', description: 'IDE' }
    ],
    details: {
      overview: 'Chicks-Mo-Unli is a custom restaurant management system designed for efficient order tracking, inventory management, and financial reporting. Built for a fast-paced, unlimited wings restaurant, it streamlines daily operations and empowers both staff and management with real-time data and intuitive tools.',
      features: [
        'Easy product management: Add, edit, and display menu items with details and pricing.',
        'Live inventory tracking: Monitor stock levels, get alerts for low stock, and manage refills.',
        'Order ticket system: Staff can manage multiple orders and coordinate with the kitchen in real time.',
        'Expense and sales tracking: Record expenses, upload receipts, and generate sales reports to spot trends.',
        'Role-based access: Admins and staff have tailored access and permissions for secure, efficient workflows.',
        'Calendar-based inventory: Visualize and manage stock activities on a calendar for proactive planning.'
      ],
      limitations: [
        'Cloud-based for real-time data sync and accessibility.',
        'Currently supports single-branch operations; multi-branch support is a planned enhancement.',
        'Focused on management and analytics, not intended as a full POS system.',
        'Future improvements: offline mode, expanded reporting, and more integrations.'
      ]
    }
  },
  {
    id: 'role-specific-pos',
    title: 'ROLE-SPECIFIC POS SYSTEM',
    image: roleSpecificLogo,
    description: 'A modern, user-friendly POS system for fast food restaurants, built with Java OOP.',
    tags: ['POS System', 'Java', 'JavaFX', 'Desktop App'],
    category: 'Desktop',
    gallery: roleSpecificGallery,
    techStack: [
      { name: 'Java', icon: '☕', description: 'Programming Language' },
      { name: 'OOP', icon: '🧩', description: 'Design Principle' },
      { name: 'JavaFX', icon: '🖥️', description: 'UI Framework' },
      { name: 'Swing', icon: '🪟', description: 'UI Toolkit' },
      { name: 'SQLite', icon: '🗄️', description: 'Embedded Database' },
      { name: 'MySQL', icon: '💾', description: 'Database' }
    ],
    details: {
      overview: 'A robust POS system with role-based access, order management, analytics, and inventory features. Designed for fast food and similar businesses.',
      highlights: [
        'Role-based login with PIN and admin override',
        'Customizable menu and order options',
        'Order status tracking and kitchen display',
        'Comprehensive analytics and sales reports',
        'Inventory and employee management',
        'Discount coupon management'
      ],
      features: [
        'Login Tab: Role-based PIN login, admin override, secure access',
        'Main Tab: Menu selection, order customization, receipt printing, cash handling',
        'Orders Tab: Kitchen order list, status updates, order history, void/cancel options',
        'Analytics: Order metrics, sales reports, inventory insights',
        'Inventory Management: Restock, low-stock alerts, item popularity tracking',
        'Employee Details: CRUD for employee info, role assignment',
        'Discount Coupon Management: Create, edit, and track usage'
      ],
      limitations: [
        'No E-Wallet/Debit Card integration (offline/local only)',
        'Single-branch support (multi-branch planned)',
        'No online payment platform integration'
      ]
    }
  },
  {
    id: 'comingsoon',
    title: '',
    description: 'Stay tuned for more projects and updates!',
    tags: ['TBA'],
    category: 'Other'
  }
]; 
import codestacleImg from '/assets/codestaclestart.png';
import runiImg from '/assets/Runi the all knowing.png';
import b01Img from '/assets/b01.png';
import chixmounliLogo from '/assets/chixmounli/chixmounlilogo.png';

// Import all gallery images
import codestacleGallery from './gallery/codestacle';
import chixmounliGallery from './gallery/chixmounli';

export const projectList = [
  {
    id: 'codestacle',
    title: 'Codestacle',
    image: codestacleImg,
    description: 'A 2D platformer game that makes learning programming fun through interactive gameplay and coding challenges.',
    tags: ['Game Development', 'Education', 'Godot'],
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
    id: 'comingsoon',
    title: '',
    description: 'Stay tuned for more projects and updates!',
    tags: ['TBA']
  }
]; 
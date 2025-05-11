import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import codestacleImg from '/assets/codestaclestart.png';
import runiImg from '/assets/Runi the all knowing.png';
import b01Img from '/assets/b01.png';
import codestacleDirtstage from '/assets/codestacle_dirtstage.png';
import codestacleLeaderboard from '/assets/codestacle_leaderboard.png';
import codestacleLevelSelection from '/assets/codestacle_level_selection.png';
import codestacleOption from '/assets/codestacle_option.png';
import codestacleQuit from '/assets/codestacle_quit.png';
import codestacleSignup from '/assets/codestacle_signup_screen.png';
import codestacleSlums from '/assets/codestacle_slums_stage.png';
import chixmounliLogo from '/assets/chixmounli/chixmounlilogo.png';
import chixPin from '/assets/chixmounli/0 Pin (1).png';
import chixAdmin from '/assets/chixmounli/Admin.png';
import chixCalendar from '/assets/chixmounli/Calendar.png';
import chixCheckOut from '/assets/chixmounli/Check Out.png';
import chixEditProduct from '/assets/chixmounli/Edit  Product Items.png';
import chixEmployeeClockIn from '/assets/chixmounli/Employee Clock In.png';
import chixEmployeeClockOut from '/assets/chixmounli/Employee Clock Out.png';
import chixHome from '/assets/chixmounli/Home.png';
import chixInventoryPeri from '/assets/chixmounli/Inventory- Peri.png';
import chixKitchenQueu from '/assets/chixmounli/Kitchen Queu.png';
import chixOrderRefill from '/assets/chixmounli/Order Refill.png';
import chixPopUpAudit from '/assets/chixmounli/Pop-Up-Audit.png';
import chixSetUpEmployee from '/assets/chixmounli/Set Up Employee Account.png';
import chixTakePhoto from '/assets/chixmounli/Take Photo.png';

const projectData = {
  codestacle: {
    title: 'Codestacle',
    image: codestacleImg,
    description: 'Codestacle is a playful 2D platformer designed to make learning programming fun and accessible for everyone. Built with Godot and GDScript, it blends classic platforming action with interactive coding challenges, letting players solve puzzles and progress by writing real code.',
    overview: `Codestacle is a passion project that brings together my love for game development and education. The game invites players of all backgrounds especially beginners to explore programming concepts in a hands-on, engaging way. As the main developer, I designed and coded the game mechanics, created pixel art assets, and integrated a custom challenge system that rewards creativity and problem-solving.`,
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
    ],
    techStack: [
      { name: 'Godot', icon: '🤖', description: 'Game Engine' },
      { name: 'Aseprite', icon: '🎨', description: 'Pixel Art' },
      { name: 'Firebase', icon: '🔥', description: 'Backend & Auth' },
      { name: 'Windows', icon: '🪟', description: 'Platform' },
      { name: 'GitHub', icon: '🐙', description: 'Version Control' },
      { name: 'FL Studio', icon: '🍊', description: 'Audio Design' }
    ]
  },
  chixmounli: {
    title: 'CHICKS-MO-UNLI RESTAURANT MANAGEMENT SYSTEM',
    image: chixmounliLogo,
    description: 'A restaurant management system specializing in tracking customer orders, managing stocks in a calendar-based manner, and incorporating basic financing procedures for Chicks-Mo-Unli. Developed over 3 months, the system aims to streamline restaurant operations and ensure efficient management.',
    overview: `General Objective:\nTo be able to develop a restaurant management system specializing in keeping track of customer orders as well as reflecting stocks in a calendar-based manner while also incorporating basic financing procedures. This development would be built over the span of 3 months; therefore, the following objectives, scopes, and limitations are important for ensuring the success of Chicks-Mo-Unli's system.`,
    objectives: [
      'To input, edit and display product details such as name, price, and description, to streamline product selection.',
      'To monitor stock levels of ingredients and products, preventing stock outage by also alerting which has dropped below minimum levels. In addition, keep track of which should be replaced or replenished, ensuring the quality of products.',
      'To monitor orders where staff can simultaneously manage multiple orders using order tickets aiding in server-kitchen coordination.',
      'To manage order tickets, tracking ongoing orders and adding additional items when needed.',
      'To track and manage daily, weekly, monthly, and yearly expenses and income, including stock refills and utility costs.',
      'To upload expenses receipts for accurate record-keeping.',
      'To generate sales reports that identify product trends and financial performance, helping to spot fast- and slow-moving items.'
    ],
    scope: [
      'User Access: This differentiates how the admin and staff can log on to the system. The staff can manage orders, monitor stocks, and compute gross income by adding up the total sales at the end of the day. The admin has special access to modify all product and stock details as well as finalize sales reports unavailable to staff.',
      'Stock Management: Where the admin and staff arrange and monitors stocks\' status in a calendar-based manner with each cell containing activities for that particular date. It includes start-to-end inventory course and stock level monitoring, ensuring proactive inventory management and timely refills.',
      'Product Management: Administrator can enter and manage product details such as name, price, and description for accurate and up-to-date information.',
      'Order Ticket Management: Customers\' order details, including name, table number, order code, quantity, and payment status, are organized into order tickets. Additionally, ongoing orders (tickets) are displayed simultaneously for staff visibility and coordination, aiding kitchen and service efficiency.',
      'Expense Tracker: Compilations of expenses attached with receipts are displayed in their respective sections, ensuring a systematic and straightforward approach to sales computation.',
      'Sales Report: Generate comprehensive sales reports and financial performance to pinpoint fast and slow-moving products, providing insight on how to maintain the products in line with market trends.'
    ],
    limitations: [
      'Cloud-based for real-time data sync and accessibility.',
      'Currently supports single-branch operations; multi-branch support is a planned enhancement.',
      'Focused on management and analytics, not intended as a full POS system.',
      'Future improvements: offline mode, expanded reporting, and more integrations.'
    ]
  }
};

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const galleryImages = [
    { src: codestacleDirtstage, alt: 'Dirt Stage UI' },
    { src: codestacleLeaderboard, alt: 'Leaderboard UI' },
    { src: codestacleLevelSelection, alt: 'Level Selection UI' },
    { src: codestacleOption, alt: 'Option Menu UI' },
    { src: codestacleQuit, alt: 'Quit Menu UI' },
    { src: codestacleSignup, alt: 'Signup Screen UI' },
    { src: codestacleSlums, alt: 'Slums Stage UI' },
  ];
  const chixGalleryImages = [
    { src: chixHome, alt: 'Home UI' },
    { src: chixPin, alt: 'Pin Entry UI' },
    { src: chixEmployeeClockIn, alt: 'Employee Clock In UI' },
    { src: chixEmployeeClockOut, alt: 'Employee Clock Out UI' },
    { src: chixSetUpEmployee, alt: 'Set Up Employee Account UI' },
    { src: chixAdmin, alt: 'Admin Dashboard' },
    { src: chixCalendar, alt: 'Calendar UI' },
    { src: chixEditProduct, alt: 'Edit Product Items UI' },
    { src: chixOrderRefill, alt: 'Order Refill UI' },
    { src: chixCheckOut, alt: 'Check Out UI' },
    { src: chixKitchenQueu, alt: 'Kitchen Queue UI' },
    { src: chixInventoryPeri, alt: 'Inventory Perishable UI' },
    { src: chixPopUpAudit, alt: 'Pop-Up Audit UI' },
    { src: chixTakePhoto, alt: 'Take Photo UI' },
  ];
  // Close modal on Escape
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="text-center py-20">Project not found.</div>;

  if (projectId === 'codestacle') {
    return (
      <section className="relative py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#B3C8CF] via-[#E5E1DA] to-[#F1F0E8] overflow-x-hidden animate-bg-pan">
        {/* Floating Back Button */}
        <button
          onClick={() => navigate('/portfolio')}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-7 py-3 rounded-full bg-white/30 backdrop-blur-md border-2 border-gradient-to-r from-[#B3C8CF] via-[#89A8B2] to-[#E5E1DA] shadow-2xl text-[#181e29] font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#B3C8CF]/40 ring-2 ring-[#B3C8CF]/30 hover:bg-[#E5E1DA]/80 group animate-glow"
          style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.18)' }}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#B3C8CF] via-[#89A8B2] to-[#E5E1DA] shadow-md mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="#181e29" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" strokeOpacity=".5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.5L10 12l3.5 3.5" />
            </svg>
          </span>
          <span className="tracking-wide">Back to Projects</span>
        </button>
        <div className="w-full max-w-6xl bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl px-6 md:px-16 py-12 flex flex-col items-center border border-[#B3C8CF]/40" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}>
          {/* Main showcase image */}
          <div className="w-full h-96 flex items-center justify-center mb-10 bg-[#E5E1DA]/70 rounded-2xl border-2 border-[#B3C8CF] overflow-hidden shadow-2xl p-0 transition-transform duration-500 hover:scale-105">
            <img src={codestacleImg} alt="Codestacle Main Showcase" className="object-cover w-full h-full drop-shadow-2xl" />
          </div>
          {/* Divider */}
          <div className="w-2/3 h-1 bg-gradient-to-r from-[#B3C8CF] via-[#89A8B2] to-[#E5E1DA] rounded-full mb-12 animate-pulse" />
          {/* CODESTACLE GALLERY - Auto-scrolling Carousel */}
          <div className="w-full mb-12 overflow-hidden">
            <h3 className="text-4xl font-extrabold text-[#89A8B2] mb-8 text-center tracking-tight animate-fade-in">CODESTACLE GALLERY</h3>
            <div className="relative w-full">
              <div className="flex gap-8 animate-scroll-x items-center" style={{ animation: 'scrollX 30s linear infinite' }}>
                {galleryImages.map((img, i) => (
                  <button
                    key={img.alt}
                    className="overflow-hidden min-w-[320px] max-w-xs transition-transform hover:scale-110 focus:outline-none bg-transparent border-none shadow-none p-0 m-0"
                    style={{ background: 'none' }}
                    onClick={() => { setLightboxImg(img); setLightboxOpen(true); }}
                    aria-label={`View ${img.alt} larger`}
                  >
                    <img src={img.src} alt={img.alt} className="object-cover w-full h-56 rounded-2xl border-none shadow-xl" style={{ background: 'none' }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="w-2/3 h-1 bg-gradient-to-r from-[#E5E1DA] via-[#89A8B2] to-[#B3C8CF] rounded-full mb-12 animate-pulse" />
          {/* Character Sprites */}
          <div className="flex gap-16 mb-12 items-center justify-center">
            <img src={runiImg} alt="Runi the all knowing" className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-110 hover:-translate-y-2" />
            <img src={b01Img} alt="b01" className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-110 hover:-translate-y-2" />
          </div>
          {/* Animated Project Title */}
          <h2 className="text-5xl font-extrabold mb-8 text-[#89A8B2] drop-shadow-lg text-center tracking-tight animate-fade-in-slow">{project.title}</h2>
          <p className="text-[#181e29] mb-10 text-center text-2xl font-medium max-w-3xl animate-fade-in-slow">{project.description}</p>
          <div className="w-full text-left mb-8 max-w-4xl">
            <h3 className="text-3xl font-bold text-[#89A8B2] mb-4 animate-fade-in">Project Overview</h3>
            <p className="text-[#181e29] mb-6 text-lg animate-fade-in">{project.overview}</p>
            <h4 className="text-2xl font-semibold text-[#89A8B2] mb-4 animate-fade-in">Highlights</h4>
            <ul className="space-y-3 mb-8">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-[#181e29] text-lg animate-fade-in group">
                  <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-[#B3C8CF] to-[#89A8B2] group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:text-[#89A8B2] transition-colors duration-300">{highlight}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-2xl font-semibold text-[#89A8B2] mb-4 animate-fade-in">System Features</h4>
            <ul className="space-y-3 mb-8">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-[#181e29] text-lg animate-fade-in group">
                  <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-[#B3C8CF] to-[#89A8B2] group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:text-[#89A8B2] transition-colors duration-300">{feat}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-2xl font-semibold text-[#89A8B2] mb-4 animate-fade-in">Challenges</h4>
            <ul className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-[#181e29] text-lg animate-fade-in group">
                  <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-[#B3C8CF] to-[#89A8B2] group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:text-[#89A8B2] transition-colors duration-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Tech Stack Section - moved to bottom */}
          <div className="w-full flex flex-col items-center mt-12 animate-fade-in">
            <div className="bg-transparent rounded-3xl px-8 py-8 flex flex-col items-center max-w-3xl w-full">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#89A8B2] mb-6 text-center tracking-widest pixel-font drop-shadow">CODESTACLE TECHSTACK</h3>
              <div className="grid grid-cols-3 gap-x-12 gap-y-8 items-center justify-center">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-5xl mb-2">{tech.icon}</span>
                    <span className="text-[#B3C8CF] font-mono text-lg tracking-widest pixel-font">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Lightbox Modal */}
          {lightboxOpen && lightboxImg && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all"
              onClick={() => setLightboxOpen(false)}
              aria-modal="true"
              role="dialog"
            >
              <div
                className="relative flex flex-col items-center justify-center"
                onClick={e => e.stopPropagation()}
                style={{ minHeight: '100vh' }}
              >
                <div className="relative">
                  <img
                    src={lightboxImg.src}
                    alt={lightboxImg.alt}
                    className="rounded-2xl shadow-2xl max-h-[80vh] w-auto object-contain border-4 border-[#B3C8CF] bg-white animate-lightbox-in"
                    style={{ transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)' }}
                  />
                  <button
                    className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 focus:outline-none z-10 shadow-lg border-2 border-white"
                    onClick={() => setLightboxOpen(false)}
                    aria-label="Close image preview"
                    style={{ transition: 'background 0.2s, box-shadow 0.2s' }}
                  >
                    &times;
                  </button>
                </div>
                <div className="mt-4 text-white text-lg text-center drop-shadow-lg animate-fade-in">{lightboxImg.alt}</div>
              </div>
            </div>
          )}
        </div>
        {/* Keyframes and Animations */}
        <style>{`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-bg-pan {
            animation: bg-pan 20s linear infinite alternate;
          }
          @keyframes bg-pan {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-fade-in {
            animation: fadeIn 1.2s ease both;
          }
          .animate-fade-in-slow {
            animation: fadeIn 2s ease both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: none; }
          }
          .animate-lightbox-in {
            animation: lightboxIn 0.5s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes lightboxIn {
            from { opacity: 0; transform: scale(0.85); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-glow {
            box-shadow: 0 0 0 0 #B3C8CF, 0 0 0 0 #89A8B2;
            animation: glowPulse 2.2s infinite cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes glowPulse {
            0% {
              box-shadow: 0 0 0 0 #B3C8CF, 0 0 0 0 #89A8B2;
            }
            50% {
              box-shadow: 0 0 16px 6px #B3C8CF55, 0 0 32px 12px #89A8B255;
            }
            100% {
              box-shadow: 0 0 0 0 #B3C8CF, 0 0 0 0 #89A8B2;
            }
          }
        `}</style>
      </section>
    );
  }

  if (projectId === 'chixmounli') {
    return (
      <section className="relative py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#B3C8CF] via-[#E5E1DA] to-[#F1F0E8] overflow-x-hidden animate-bg-pan">
        {/* Floating Back Button */}
        <button
          onClick={() => navigate('/portfolio')}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-7 py-3 rounded-full bg-white/30 backdrop-blur-md border-2 border-gradient-to-r from-[#B3C8CF] via-[#89A8B2] to-[#E5E1DA] shadow-2xl text-[#181e29] font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#B3C8CF]/40 ring-2 ring-[#B3C8CF]/30 hover:bg-[#E5E1DA]/80 group animate-glow"
          style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.18)' }}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#B3C8CF] via-[#89A8B2] to-[#E5E1DA] shadow-md mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="#181e29" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" strokeOpacity=".5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.5L10 12l3.5 3.5" />
            </svg>
          </span>
          <span className="tracking-wide">Back to Projects</span>
        </button>
        <div className="w-full max-w-6xl bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl px-6 md:px-16 py-12 flex flex-col items-center border border-[#B3C8CF]/40" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}>
          {/* Main showcase image - Chicks-Mo-Unli logo smaller */}
          <div className="w-full flex items-center justify-center mb-10 bg-[#E5E1DA]/70 rounded-2xl border-2 border-[#B3C8CF] overflow-hidden shadow-2xl p-0 transition-transform duration-500 hover:scale-105 h-72">
            <img src={project.image} alt="Chicks-Mo-Unli Main Showcase" className="object-contain h-60 w-auto drop-shadow-2xl" />
          </div>
          {/* CHIXMO UNLI GALLERY - Auto-scrolling Carousel (Codestacle style) */}
          <div className="w-full mb-12 overflow-hidden">
            <h3 className="text-4xl font-extrabold text-[#89A8B2] mb-8 text-center tracking-tight animate-fade-in">CHICKS-MO-UNLI GALLERY</h3>
            <div className="relative w-full">
              <div className="flex gap-8 animate-scroll-x items-center" style={{ animation: 'scrollX 30s linear infinite' }}>
                {chixGalleryImages.map((img, i) => (
                  <button
                    key={img.alt}
                    className="overflow-hidden min-w-[320px] max-w-xs transition-transform hover:scale-110 focus:outline-none bg-transparent border-none shadow-none p-0 m-0"
                    style={{ background: 'none' }}
                    onClick={() => { setLightboxImg(img); setLightboxOpen(true); }}
                    aria-label={`View ${img.alt} larger`}
                  >
                    <img src={img.src} alt={img.alt} className="object-cover w-full h-56 rounded-2xl border-none shadow-xl" style={{ background: 'none' }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="w-2/3 h-1 bg-gradient-to-r from-[#E5E1DA] via-[#89A8B2] to-[#B3C8CF] rounded-full mb-12 animate-pulse" />
          {/* Animated Project Title */}
          <h2 className="text-5xl font-extrabold mb-8 text-[#89A8B2] drop-shadow-lg text-center tracking-tight animate-fade-in-slow">{project.title}</h2>
          <p className="text-[#181e29] mb-10 text-center text-2xl font-medium max-w-3xl animate-fade-in-slow">{project.description}</p>
          <div className="w-full text-left mb-8 max-w-4xl">
            <h3 className="text-3xl font-bold text-[#89A8B2] mb-4 animate-fade-in">Project Overview</h3>
            <p className="text-[#181e29] mb-6 text-lg animate-fade-in">
              Chicks-Mo-Unli is a custom restaurant management system designed for efficient order tracking, inventory management, and financial reporting. Built for a fast-paced, unlimited wings restaurant, it streamlines daily operations and empowers both staff and management with real-time data and intuitive tools.
            </p>
            <h4 className="text-2xl font-semibold text-[#89A8B2] mb-4 animate-fade-in">Key Features</h4>
            <ul className="space-y-3 mb-8 list-disc list-inside">
              <li className="text-[#181e29] text-lg animate-fade-in">Easy product management: Add, edit, and display menu items with details and pricing.</li>
              <li className="text-[#181e29] text-lg animate-fade-in">Live inventory tracking: Monitor stock levels, get alerts for low stock, and manage refills.</li>
              <li className="text-[#181e29] text-lg animate-fade-in">Order ticket system: Staff can manage multiple orders and coordinate with the kitchen in real time.</li>
              <li className="text-[#181e29] text-lg animate-fade-in">Expense and sales tracking: Record expenses, upload receipts, and generate sales reports to spot trends.</li>
              <li className="text-[#181e29] text-lg animate-fade-in">Role-based access: Admins and staff have tailored access and permissions for secure, efficient workflows.</li>
              <li className="text-[#181e29] text-lg animate-fade-in">Calendar-based inventory: Visualize and manage stock activities on a calendar for proactive planning.</li>
            </ul>
            <h4 className="text-2xl font-semibold text-[#89A8B2] mb-4 animate-fade-in">Limitations</h4>
            <ul className="space-y-3 list-disc list-inside">
              <li className="text-[#181e29] text-lg animate-fade-in">Cloud-based for real-time data sync and accessibility.</li>
              <li className="text-[#181e29] text-lg animate-fade-in">Currently supports single-branch operations; multi-branch support is a planned enhancement.</li>
              <li className="text-[#181e29] text-lg animate-fade-in">Focused on management and analytics, not intended as a full POS system.</li>
              <li className="text-[#181e29] text-lg animate-fade-in">Future improvements: offline mode, expanded reporting, and more integrations.</li>
            </ul>
          </div>
          {/* Tech Stack Section - Chicks-Mo-Unli */}
          <div className="w-full flex flex-col items-center mt-12 animate-fade-in">
            <div className="bg-transparent rounded-3xl px-8 py-8 flex flex-col items-center max-w-3xl w-full">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#89A8B2] mb-6 text-center tracking-widest pixel-font drop-shadow">CHICKS-MO-UNLI TECHSTACK</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 items-end justify-center text-center">
                <div className="flex flex-col items-center justify-end">
                  <span className="text-5xl mb-2">🦋</span>
                  <span className="text-[#B3C8CF] font-mono text-lg tracking-widest pixel-font">Flutter</span>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <span className="text-5xl mb-2">🎯</span>
                  <span className="text-[#B3C8CF] font-mono text-lg tracking-widest pixel-font">Dart</span>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <span className="text-5xl mb-2">🔥</span>
                  <span className="text-[#B3C8CF] font-mono text-lg tracking-widest pixel-font">Firebase</span>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <span className="text-5xl mb-2">📄</span>
                  <span className="text-[#B3C8CF] font-mono text-lg tracking-widest pixel-font">Firestore</span>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <span className="text-5xl mb-2">🤖</span>
                  <span className="text-[#B3C8CF] font-mono text-lg tracking-widest pixel-font">Android Studio</span>
                </div>
              </div>
            </div>
          </div>
          {/* Lightbox Modal */}
          {lightboxOpen && lightboxImg && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all"
              onClick={() => setLightboxOpen(false)}
              aria-modal="true"
              role="dialog"
            >
              <div
                className="relative flex flex-col items-center justify-center"
                onClick={e => e.stopPropagation()}
                style={{ minHeight: '100vh' }}
              >
                <div className="relative">
                  <img
                    src={lightboxImg.src}
                    alt={lightboxImg.alt}
                    className="rounded-2xl shadow-2xl max-h-[80vh] w-auto object-contain border-4 border-[#B3C8CF] bg-white animate-lightbox-in"
                    style={{ transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)' }}
                  />
                  <button
                    className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 focus:outline-none z-10 shadow-lg border-2 border-white"
                    onClick={() => setLightboxOpen(false)}
                    aria-label="Close image preview"
                    style={{ transition: 'background 0.2s, box-shadow 0.2s' }}
                  >
                    &times;
                  </button>
                </div>
                <div className="mt-4 text-white text-lg text-center drop-shadow-lg animate-fade-in">{lightboxImg.alt}</div>
              </div>
            </div>
          )}
        </div>
        {/* Keyframes and Animations */}
        <style>{`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-bg-pan {
            animation: bg-pan 20s linear infinite alternate;
          }
          @keyframes bg-pan {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-fade-in {
            animation: fadeIn 1.2s ease both;
          }
          .animate-fade-in-slow {
            animation: fadeIn 2s ease both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: none; }
          }
          .animate-lightbox-in {
            animation: lightboxIn 0.5s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes lightboxIn {
            from { opacity: 0; transform: scale(0.85); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-glow {
            box-shadow: 0 0 0 0 #B3C8CF, 0 0 0 0 #89A8B2;
            animation: glowPulse 2.2s infinite cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes glowPulse {
            0% {
              box-shadow: 0 0 0 0 #B3C8CF, 0 0 0 0 #89A8B2;
            }
            50% {
              box-shadow: 0 0 16px 6px #B3C8CF55, 0 0 32px 12px #89A8B255;
            }
            100% {
              box-shadow: 0 0 0 0 #B3C8CF, 0 0 0 0 #89A8B2;
            }
          }
        `}</style>
      </section>
    );
  }

  // Default for other projects
  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-[#E5E1DA] via-[#F1F0E8] to-white flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto bg-[#F1F0E8]/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <button
          onClick={() => navigate('/portfolio')}
          className="mb-6 px-6 py-2 rounded-full bg-[#B3C8CF] text-[#181e29] font-semibold shadow hover:bg-[#E5E1DA] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#B3C8CF]"
        >
          &larr; Back to Projects
        </button>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-2xl mb-6 border-2 border-[#B3C8CF]" />
        <h2 className="text-3xl font-bold mb-4 text-[#89A8B2]">{project.title}</h2>
        <p className="text-[#181e29] mb-4">{project.description}</p>
        <div className="text-[#181e29]">{project.overview}</div>
      </div>
    </section>
  );
}
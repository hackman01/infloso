import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicNote = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('discover');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

 
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'discover', label: 'Discover' },
    { id: 'trending', label: 'Trending' },
    { id: 'playlists', label: 'Playlists' },
    { id: 'favorites', label: 'Favorites' }
  ];

  const sidebarItems = [
    { id: 'home', label: 'Home' },
    { id: 'search', label: 'Search' },
    { id: 'library', label: 'Your Library' },
    { id: 'recent', label: 'Recently Played' },
    { id: 'liked', label: 'Liked Songs' },
    { id: 'albums', label: 'Your Albums' }
  ];

  const featuredPlaylists = [
    { id: 1, title: 'Daily Mix 1', songs: '15 songs' },
    { id: 2, title: 'Chill Vibes', songs: '20 songs' },
    { id: 3, title: 'Top Hits 2025', songs: '25 songs' },
    { id: 4, title: 'Workout Mix', songs: '18 songs' },
    { id: 5, title: 'Focus Flow', songs: '22 songs' },
    { id: 6, title: 'Weekend Party', songs: '30 songs' }
  ];

  const isMobile = windowWidth < 768;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
     
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      
      <motion.div 
        initial={false}
        animate={{ 
          x: (isMobile ? (isMobileMenuOpen ? 0 : -280) : (isSidebarOpen ? 0 : -280))
        }}
        className="fixed left-0 top-0 h-full w-[280px] bg-black/30 backdrop-blur-xl border-r border-white/10 p-5 z-50"
      >
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            <MusicNote className="w-8 h-8 text-purple-400" />
            <h1 className="text-xl font-bold">MelodyVerse</h1>
          </div>
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              ✕
            </button>
          )}
        </div>

        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ x: 5 }}
              className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>
      </motion.div>

      
      <div className={`${isSidebarOpen && !isMobile ? 'ml-[280px]' : 'ml-0'} transition-all duration-300`}>
       
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="sticky top-0 bg-black/30 backdrop-blur-xl border-b border-white/10 z-20"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 space-y-4 md:space-y-0">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button
                onClick={() => isMobile ? setMobileMenuOpen(true) : setSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                ☰
              </button>
              <nav className="hidden md:flex gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeNav === item.id ? 'bg-purple-600' : 'hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <input
                type="search"
                placeholder="Search..."
                className="w-full md:w-auto px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-purple-600 flex-shrink-0"
              >
                Profile
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden overflow-x-auto">
            <nav className="flex gap-2 p-4 whitespace-nowrap">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeNav === item.id ? 'bg-purple-600' : 'hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="p-4 md:p-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-bold mb-6"
          >
            Featured Playlists
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {featuredPlaylists.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer group"
              >
                <div className="aspect-square bg-purple-500/30 rounded-lg mb-4 overflow-hidden">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MusicNote className="w-12 h-12 md:w-16 md:h-16 text-white/50" />
                  </motion.div>
                </div>
                <h3 className="font-semibold group-hover:text-purple-400 transition-colors">
                  {playlist.title}
                </h3>
                <p className="text-sm text-white/70">{playlist.songs}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
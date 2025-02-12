import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MusicNote = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

const FloatingNote = ({ x, y, size = "24", delay = 0 }) => (
  <motion.div
    className="absolute text-white/20"
    initial={{ x, y }}
    animate={{
      y: [y - 20, y + 20, y - 20],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
      rotate: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    }}
  >
    <MusicNote className={`w-${size} h-${size}`} />
  </motion.div>
);

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    navigate('/signin')
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center p-4">
    
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.2),transparent_70%)]" />
        
        
        <FloatingNote x="15%" y="25%" size="12" />
        <FloatingNote x="85%" y="35%" size="16" delay={0.5} />
        <FloatingNote x="65%" y="75%" size="12" delay={1} />
        <FloatingNote x="25%" y="85%" size="16" delay={1.5} />
        
       
        <div className="absolute bottom-0 left-0 right-0 flex space-x-1">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-purple-500/20"
              initial={{ height: 20 }}
              animate={{ height: [20, 100, 20] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

   
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-16 h-16 mb-4"
            >
              <MusicNote className="w-full h-full text-purple-400" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white">Join MelodyVerse</h2>
            <p className="text-white/70 mt-2">Start your musical journey today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-white/50 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                'Create Account'
              )}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-4"
            >
              <p className="text-white/70">
                Already have an account?{' '}
                <a href="#" className="text-purple-300 hover:text-white">
                  Sign in
                </a>
              </p>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
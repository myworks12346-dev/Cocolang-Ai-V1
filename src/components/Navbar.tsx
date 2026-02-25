import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hexagon, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToGenerator = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#generator';
      return;
    }
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between glass-card px-4 md:px-8 py-4 border-white/5">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Hexagon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight">
              Cocolang <span className="gradient-text">AI</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/why" className={`text-sm font-medium transition-colors ${location.pathname === '/why' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Why Cocolang?</Link>
            <a href="/#how-it-works" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">How it Works</a>
            <a href="/#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <button onClick={scrollToGenerator} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Generator</button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToGenerator}
              className="hidden sm:block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold hover:bg-white/10 transition-all"
            >
              Get Started
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-2 lg:hidden glass-card p-6 border-white/10 flex flex-col gap-4 shadow-2xl"
            >
              <Link 
                to="/why" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${location.pathname === '/why' ? 'text-white' : 'text-gray-400'}`}
              >
                Why Cocolang?
              </Link>
              <a 
                href="/#how-it-works" 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-400"
              >
                How it Works
              </a>
              <a 
                href="/#features" 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-400"
              >
                Features
              </a>
              <button 
                onClick={scrollToGenerator}
                className="text-lg font-medium text-gray-400 text-left"
              >
                Generator
              </button>
              <button 
                onClick={scrollToGenerator}
                className="btn-primary w-full mt-2"
              >
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

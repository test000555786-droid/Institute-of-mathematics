import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, INSTITUTE } from '../../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[90%] max-w-7xl transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-2xl border flex flex-col overflow-hidden ${
      scrolled 
        ? 'bg-white/90 supports-[backdrop-filter]:bg-white/40 backdrop-blur-xl backdrop-saturate-150 shadow-lg border-black/10' 
        : 'bg-white/10 backdrop-blur-lg shadow-lg shadow-black/10 border-white/20'
    }`}>
      <div className="w-full px-5 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 max-w-[55%] sm:max-w-none">
            <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
              <span className="text-white font-bold text-base sm:text-lg font-display">∑</span>
            </div>
            <div className="flex flex-col justify-center truncate">
              <p className={`font-bold text-[12px] sm:text-sm leading-tight font-display transition-colors duration-300 truncate ${scrolled ? 'text-gray-900 drop-shadow-none' : 'text-white drop-shadow-sm'}`}>Institute of Mathematics</p>
              <p className={`text-[10px] sm:text-xs leading-tight transition-colors duration-300 hidden sm:block ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>Ranjan Sir · Cuttack</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`relative px-3 py-1.5 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                  location.pathname === l.path
                    ? (scrolled ? 'bg-black/5 text-gray-900 shadow-sm' : 'bg-white/20 text-white shadow-sm backdrop-blur-sm')
                    : (scrolled ? 'text-gray-700 hover:text-black hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/10')
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href={INSTITUTE.phoneHref} 
              aria-label="Call Us"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 group backdrop-blur-sm border ${
                scrolled
                  ? 'bg-black/5 border-black/10 text-gray-800 hover:bg-black/10 shadow-sm'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/30 shadow-md hover:shadow-lg'
              }`}
            >
              <Phone size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            
            <Link to="/contact" className="hidden lg:flex btn-primary text-sm px-6 py-2.5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ring-1 ring-black/10">Enroll Now</Link>
            
            {/* Mobile hamburger */}
            <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-xl transition-all duration-300 ml-1 backdrop-blur-sm border ${
              scrolled
                ? 'text-gray-800 hover:bg-black/5 border-transparent hover:border-black/10'
                : 'text-white hover:bg-white/20 border-transparent hover:border-white/20'
            }`}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden backdrop-blur-lg border-t shadow-inner overflow-hidden ${
              scrolled 
                ? 'bg-white/95 border-black/10' 
                : 'bg-black/80 border-white/10'
            }`}
          >
            <div className="px-5 sm:px-6 py-5 flex flex-col gap-2">
              {NAV_LINKS.map(l => (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    location.pathname === l.path
                      ? (scrolled ? 'bg-black/5 text-gray-900 shadow-sm' : 'bg-white/20 text-white shadow-sm backdrop-blur-sm')
                      : (scrolled ? 'text-gray-700 hover:text-black hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/10')
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className={`pt-4 border-t mt-2 flex flex-col gap-3 ${scrolled ? 'border-black/10' : 'border-white/10'}`}>
                <a href={INSTITUTE.phoneHref} className={`btn-secondary text-sm text-center transition-all border ${
                  scrolled
                    ? 'bg-transparent text-gray-800 border-gray-300 hover:bg-gray-100 hover:text-black'
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white hover:border-white/30'
                }`}>
                  <Phone size={16} /> Call Us
                </a>
                <Link to="/contact" className="btn-primary text-sm text-center shadow-md hover:shadow-xl hover:scale-[1.02] transition-all">Enroll Now</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Award, Phone } from 'lucide-react'
import { INSTITUTE } from '../../utils/constants'

const badges = [
  { icon: Star,  label: '5.0★ Rated',         sub: '60+ Google Reviews' },
  { icon: Users, label: '500+ Students',       sub: 'Expert Guidance' },
  { icon: Award, label: 'Mathematics',         sub: 'Specialist Institute' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cover bg-center min-h-screen lg:h-screen lg:max-h-[1000px] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-0 pb-12" style={{ backgroundImage: "url('/images/heroes/hero-home.png')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-400/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-purple-400/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container-main relative z-10 w-full lg:pt-[110px]">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 xl:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Admissions Open 2024–25
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[42px] xl:text-6xl font-bold text-white leading-[1.1] mb-5"
            >
              Master Mathematics{' '}
              <span className="relative inline-block text-white">
                <span className="relative z-10">with Confidence</span>
                <span className="absolute bottom-1 -left-1 -right-1 h-3 bg-purple-500/50 -z-10 rounded-md -rotate-1"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="text-base lg:text-lg text-slate-200 mb-6 lg:mb-8 max-w-lg leading-relaxed"
            >
              Expert guidance for students aiming to excel in school exams and competitive academics with concept clarity and precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-6 lg:mb-8"
            >
              <Link to="/contact" className="btn-primary text-sm lg:text-base px-6 py-3 lg:px-8 lg:py-4">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <a href={INSTITUTE.phoneHref} className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm lg:text-base px-6 py-3 lg:px-8 lg:py-4 rounded-2xl border border-white/30 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5">
                <Phone size={16} /> {INSTITUTE.phone}
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              {badges.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2.5 glass px-4 py-2.5 rounded-2xl">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Icon size={16} className="text-indigo-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{label}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Hero card */}
          {/* Right – Hero card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="relative max-w-[380px] sm:max-w-[420px] lg:max-w-[420px] xl:max-w-[460px] mx-auto lg:ml-auto w-full"
          >
            {/* Main card */}
            <div className="relative rounded-3xl lg:rounded-4xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4),inset_0_0_30px_rgba(255,255,255,0.2)] border border-white/20 overflow-hidden group flex flex-col w-full lg:max-h-[85vh] transition-all duration-300 hover:-translate-y-1 z-20">
              
              {/* Full Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105 z-0" 
                style={{ backgroundImage: "url('/images/heroes/hero-about.png')" }} 
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0 pointer-events-none" />

              {/* 1. Top Spacing Section (Maintains Layout Structure) */}
              <div className="relative h-24 sm:h-32 xl:h-[160px] w-full shrink-0 z-10 pointer-events-none" />

              {/* 2. Floating Badge */}
              <div className="relative z-40 h-0 flex justify-center w-full">
                <div className="absolute top-0 -translate-y-1/2 transition-transform duration-300 group-hover:scale-105">
                   <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 border-[3px] lg:border-[3px] border-white/20 backdrop-blur-md">
                     <span className="text-white font-bold text-lg lg:text-xl font-display">∑</span>
                   </div>
                </div>
              </div>

              {/* 3. Content Section */}
              <div className="relative z-10 flex-1 flex flex-col justify-between overflow-y-auto custom-scrollbar px-5 sm:px-6 pb-6 pt-8 lg:pt-10 text-center">
                
                <div>
                  <h2 className="text-base lg:text-lg font-bold text-white font-display drop-shadow-md">Institute of Mathematics</h2>
                  <p className="text-[11px] lg:text-xs text-white/80 mt-0.5 mb-5 lg:mb-6 drop-shadow-sm">Ranjan Sir · Cuttack, Odisha</p>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 lg:mb-6">
                    {[
                      { val: '14+', label: 'Years' },
                      { val: '500+', label: 'Students' },
                      { val: '5.0★', label: 'Rating' },
                      { val: '6–10', label: 'Classes' },
                    ].map(s => (
                      <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 lg:p-3 text-center shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5">
                        <p className="text-lg lg:text-xl font-bold text-white font-display leading-tight">{s.val}</p>
                        <p className="text-[9px] xl:text-[10px] uppercase font-semibold tracking-wide text-white/70 mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a href={INSTITUTE.phoneHref} className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-xl py-3 font-semibold transition-all duration-300 text-xs shadow-xl hover:scale-105 shrink-0 mt-auto">
                  <Phone size={16} className="w-3.5 h-3.5" /> Call Now: {INSTITUTE.phone}
                </a>
              </div>
            </div>

            {/* Floating badge 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 glass rounded-2xl px-4 py-2 text-center shadow-soft z-50 pointer-events-none scale-90 sm:scale-100"
            >
              <p className="text-[11px] lg:text-xs font-bold text-slate-800">🎉 Batch Starting Soon!</p>
            </motion.div>
            
            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -right-4 lg:-right-8 glass rounded-2xl px-4 py-2 shadow-soft z-50 scale-90 sm:scale-100"
            >
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span>
                <p className="text-[11px] lg:text-xs font-bold text-slate-800">60+ Reviews</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

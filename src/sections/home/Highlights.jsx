import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Star, Users, Target } from 'lucide-react'
import FadeIn from '../../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer'

const highlights = [
  { icon: BookOpen, title: 'Concept-Based Teaching', desc: 'Every topic is taught from the ground up with clarity and depth, ensuring students truly understand — not just memorize — mathematics.', color: 'bg-indigo-50', iconColor: 'text-indigo-600', border: 'border-indigo-100', image: '/images/heroes/hero-about.png' },
  { icon: Star,     title: '5.0★ Rated Institute',  desc: '60+ Google reviews praising Ranjan Sir\'s exceptional teaching methodology and the transformative results students achieve.', color: 'bg-purple-50', iconColor: 'text-purple-500', border: 'border-purple-100', image: '/images/heroes/hero-results.png' },
  { icon: Users,    title: 'Expert Faculty',         desc: 'Led by Ranjan Sir with 14+ years of dedicated mathematics teaching, with a team of equally qualified and passionate educators.', color: 'bg-teal-50', iconColor: 'text-teal-600', border: 'border-teal-100', image: '/images/faculty/faculty-sahoo.png' },
  { icon: Target,   title: 'Result-Oriented',        desc: 'Regular tests, performance tracking, and doubt-clearing sessions ensure every student achieves their personal best in board exams.', color: 'bg-pink-50', iconColor: 'text-pink-600', border: 'border-pink-100', image: '/images/students/student-rohit.png' },
]

export default function Highlights() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="badge bg-indigo-50 text-indigo-600 border border-indigo-100 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              What Makes Us <span className="text-indigo-700">Different</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <StaggerItem key={h.title}>
              <motion.div
                className="rounded-3xl lg:rounded-4xl bg-white border border-slate-100 overflow-hidden group flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] h-full"
              >
                {/* Top Image Section */}
                <div className="relative h-40 w-full shrink-0 overflow-hidden bg-slate-100">
                  <img src={h.image} alt={h.title} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Bottom Content Section */}
                <div className={`relative flex-1 p-6 sm:p-7 pt-10 flex flex-col ${h.color} bg-[linear-gradient(135deg,rgba(255,255,255,0.7)_0%,transparent_100%)] border-t ${h.border} shadow-[inset_0_2px_10px_rgba(255,255,255,0.5)]`}>
                  
                  {/* Anchored Icon Badge */}
                  <div className="absolute -top-7 left-6 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-card border border-white/60 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    <h.icon size={24} className={h.iconColor} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-display group-hover:text-indigo-700 transition-colors">{h.title}</h3>
                  <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed font-medium opacity-90">{h.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

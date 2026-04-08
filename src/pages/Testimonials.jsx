import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonialsData } from '../data/index'
import SectionHeader from '../components/common/SectionHeader'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'

function TestimonialCard({ t }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl bg-white border border-slate-100 shadow-card p-7 flex flex-col hover:shadow-soft transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <Quote size={22} className="text-indigo-100" />
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">{t.name}</p>
          <p className="text-xs text-slate-400">{t.role}</p>
        </div>
        <span className="ml-auto text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">{t.source}</span>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <>
      <section className="relative bg-cover bg-center pt-10 pb-16 md:pt-12 md:pb-20" style={{ backgroundImage: "url('/images/heroes/hero-testimonials.png')" }}>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container-main relative z-10 text-center">
          <FadeIn>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-yellow-400 text-yellow-400 drop-shadow-md" />)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student & Parent Voices</h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg">
              Real reviews from students whose mathematical confidence and results were transformed by Ranjan Sir.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main">
          {/* Ratings banner */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-indigo-50 border border-indigo-100 rounded-3xl p-8 mb-8">
              <div className="text-center">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Google Reviews</p>
                <p className="text-4xl font-bold text-indigo-700 font-display">5.0★</p>
                <p className="text-sm text-slate-400 mt-1">60+ ratings</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-indigo-100" />
              <div className="text-center">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Institute</p>
                <p className="text-4xl font-bold text-purple-700 font-display">📐</p>
                <p className="text-sm text-slate-400 mt-1">Mathematics Specialist</p>
              </div>
            </div>
          </FadeIn>

          {/* Owner response */}
          <FadeIn>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-3xl p-6 mb-14">
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Response from the Owner · Ranjan Sir</p>
              <p className="text-sm text-slate-600 italic">"Thank you for your valuable feedback. We are committed to helping every student succeed and build a strong mathematical foundation for their future. Your trust means everything to us."</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map(t => (
              <StaggerItem key={t.id}>
                <TestimonialCard t={t} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}

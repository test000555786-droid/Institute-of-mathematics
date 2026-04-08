import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'
import { facultyData } from '../data/index'
import { INSTITUTE } from '../utils/constants'
import SectionHeader from '../components/common/SectionHeader'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'

const milestones = [
  { year: '2010', event: 'Founded by Ranjan Sir in Badambadi Colony, Cuttack with a vision to simplify mathematics.' },
  { year: '2013', event: 'Expanded to include Class 9–10 board exam preparation batches.' },
  { year: '2016', event: 'First batch of students scores 75+ out of 80 in board mathematics.' },
  { year: '2019', event: 'Introduced Odia medium batches for wider community accessibility.' },
  { year: '2022', event: 'Achieved 5.0★ Google rating with 40+ glowing student reviews.' },
  { year: '2024', event: '500+ students guided, with multiple board toppers across Cuttack.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cover bg-center pt-10 pb-16 md:pt-12 md:pb-20" style={{ backgroundImage: "url('/images/heroes/hero-about.png')" }}>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container-main relative z-10">
          <FadeIn className="text-center">
            <span className="badge bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-md">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About the Institute</h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg">
              Dedicated to building strong mathematical foundations — one student at a time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <FadeIn>
              <span className="badge bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-4 inline-block">Est. {INSTITUTE.established}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 font-display">
                Building Mathematical Excellence Since 2010
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Institute of Mathematics (Ranjan Sir) is dedicated to helping students build a strong foundation in mathematics through concept-based learning, regular practice, and expert guidance.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                With a focus on clarity and results, the institute ensures every student reaches their full academic potential. We support both Odia and English medium learners from Class 6 through 10, located in Badambadi Colony, Cuttack.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[['14+', 'Years'], ['500+', 'Students'], ['5.0★', 'Rating']].map(([v, l]) => (
                  <div key={l} className="text-center bg-indigo-50 rounded-2xl py-4 border border-indigo-100">
                    <p className="text-2xl font-bold text-indigo-700 font-display">{v}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Timeline */}
            <FadeIn direction="right">
              <div className="space-y-5">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">{m.year.slice(2)}</div>
                      {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-indigo-100 mt-1 min-h-[20px]" />}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-bold text-indigo-700">{m.year}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Mission / Vision / Values */}
          <SectionHeader eyebrow="Our Purpose" title="Mission, Vision & Values" />
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Target, title: 'Mission', color: 'bg-indigo-50 border-indigo-100', iconCls: 'text-indigo-600', text: 'To provide accessible, high-quality mathematics coaching that equips students with deep conceptual understanding, strong exam skills, and lifelong problem-solving abilities.' },
              { icon: Eye, title: 'Vision', color: 'bg-purple-50 border-purple-100', iconCls: 'text-purple-600', text: "To be Cuttack's most trusted mathematics coaching institute — where every student thrives academically and grows into a confident, capable individual." },
              { icon: Heart, title: 'Values', color: 'bg-pink-50 border-pink-100', iconCls: 'text-pink-600', text: 'Student-first philosophy. Integrity in teaching. Personalized care. Consistent quality. And a genuine bond between Ranjan Sir and every student.' },
            ].map(({ icon: Icon, title, color, iconCls, text }) => (
              <StaggerItem key={title}>
                <motion.div whileHover={{ y: -5 }} className={`rounded-3xl border p-7 ${color} transition-all duration-300 hover:shadow-soft`}>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-card">
                    <Icon size={22} className={iconCls} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Faculty */}
          <SectionHeader eyebrow="Meet the Team" title="Our Faculty" subtitle="Experienced, passionate educators who genuinely care about every student's mathematical success." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.map(f => (
              <StaggerItem key={f.name}>
                <motion.div
                  className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-shadow duration-400 aspect-[3/4] flex flex-col justify-end"
                >
                  {/* Background Image */}
                  <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent transition-opacity duration-400 group-hover:from-slate-900" />
                  
                  {/* Content Area */}
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    <div className="transform transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-2">
                       <h3 className="font-bold text-white text-2xl font-display">{f.name}</h3>
                       <p className="text-indigo-300 font-medium mt-1">{f.subject}</p>
                    </div>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]">
                      <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="pt-3 mt-3 border-t border-white/20">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="badge bg-white/20 backdrop-blur-md text-white border-0 text-[10px] px-2 py-1 uppercase tracking-wider">{f.qualification}</span>
                            <span className="badge bg-indigo-500/40 backdrop-blur-md text-white border-0 text-[10px] px-2 py-1 uppercase tracking-wider">{f.experience}</span>
                          </div>
                          <p className="text-slate-200 text-sm leading-relaxed">{f.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}

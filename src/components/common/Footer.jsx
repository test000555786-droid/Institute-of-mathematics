import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { INSTITUTE, NAV_LINKS } from '../../utils/constants'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">∑</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight font-display">Institute of Mathematics</p>
                <p className="text-xs text-slate-400">Ranjan Sir</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing expert mathematics coaching with a focus on clarity, practice, and results. Building strong mathematical foundations for academic excellence.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={INSTITUTE.whatsapp} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-green-600 hover:bg-green-500 flex items-center justify-center transition-colors">
                <MessageCircle size={18} className="text-white" />
              </a>
              <a href={INSTITUTE.phoneHref}
                className="w-9 h-9 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 flex items-center justify-center transition-all">
                <Phone size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 font-display">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors hover:pl-1 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-5 font-display">Our Courses</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {['Foundation Mathematics (6–8)', 'Secondary Mathematics (9–10)', 'Board Exam Preparation', 'Concept Clarity Program', 'Practice & Test Series', 'Weekend Batches'].map(c => (
                <li key={c} className="hover:text-white transition-colors cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 font-display">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-400">{INSTITUTE.address}</span>
              </li>
              <li>
                <a href={INSTITUTE.phoneHref} className="flex gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                  {INSTITUTE.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-400">{INSTITUTE.workingHours}</span>
              </li>
              <li>
                <a href={`mailto:${INSTITUTE.email}`} className="flex gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                  {INSTITUTE.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 text-xs text-slate-500 bg-slate-800 rounded-xl p-3">
              <p>⭐ 5.0/5 Google · 60+ reviews</p>
              <p className="mt-1">📍 Badambadi Colony, Cuttack</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Institute of Mathematics (Ranjan Sir). All rights reserved.</p>
          <p>Badambadi Colony · Cuttack, Odisha 753012</p>
        </div>
      </div>
    </footer>
  )
}

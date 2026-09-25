import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, MapPin, Clock, Globe } from 'lucide-react';
import { XwebaLogo, HostingerBadge } from './BrandLogos';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [nairobiTime, setNairobiTime] = useState('');
  const { isDark } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Nairobi is UTC+3 (Africa/Nairobi)
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      setNairobiTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t pt-16 pb-12 transition-colors ${
      isDark ? 'border-neutral-800 bg-[#071520] text-neutral-400' : 'border-slate-200 bg-white text-slate-600'
    }`}>
      {/* Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Top Callout in Footer (Rich Full-Width Card) */}
        <div className={`rounded-3xl border p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-colors ${
          isDark
            ? 'border-neutral-800 bg-gradient-to-r from-neutral-950 via-[#0a1e30] to-neutral-950 shadow-2xl'
            : 'border-slate-200 bg-gradient-to-r from-slate-50 via-cyan-50/50 to-orange-50/40 shadow-xl'
        }`}>
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF5E14] font-semibold">
              Ready to Upgrade Your Architecture?
            </span>
            <h3 className={`mt-2 font-display text-2xl sm:text-4xl font-bold transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Let's engineer an unfair digital advantage for your business.
            </h3>
            <p className={`mt-2 text-xs sm:text-sm leading-relaxed transition-colors ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              Book a 30-minute discovery call to evaluate your site speed, conversion funnel, and AI discoverability score.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] px-7 py-4 text-xs font-semibold text-white shadow-lg shadow-orange-950/30 transition-all hover:bg-[#e0520f] active:scale-98 whitespace-nowrap"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 4 Columns Nav Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b transition-colors ${
          isDark ? 'border-neutral-850' : 'border-slate-200'
        }`}>
          
          {/* Col 1: Wordmark & Purpose */}
          <div className="md:col-span-4 space-y-4">
            <XwebaLogo size="md" variant="auto" showTagline={true} />
            
            <p className={`text-xs leading-relaxed max-w-sm transition-colors ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              Digital growth and web architecture agency based in Nairobi. Engineered for conversion performance, high-legibility design systems, and Generative Engine Optimization (GEO).
            </p>

            <div className="pt-1">
              <HostingerBadge />
            </div>

            <div className={`pt-2 flex items-center gap-3 text-xs font-mono transition-colors ${
              isDark ? 'text-neutral-300' : 'text-slate-700'
            }`}>
              <Clock className="h-3.5 w-3.5 text-[#009fe3]" />
              <span>Nairobi Studio (EAT): {nairobiTime || '12:00:00 PM'}</span>
            </div>
          </div>

          {/* Col 2: Architecture & Capabilities */}
          <div className="md:col-span-3 space-y-3">
            <div className={`text-xs font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-neutral-200' : 'text-slate-900'
            }`}>
              Capabilities
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('capabilities')}
                  className={`hover:text-[#009fe3] transition-colors ${
                    isDark ? 'hover:text-cyan-400' : 'hover:text-[#009fe3]'
                  }`}
                >
                  High-Performance Web Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('geo-audit')}
                  className={`hover:text-[#009fe3] transition-colors ${
                    isDark ? 'hover:text-cyan-400' : 'hover:text-[#009fe3]'
                  }`}
                >
                  Generative Engine Optimization (GEO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('studio-team')}
                  className={`hover:text-[#009fe3] transition-colors ${
                    isDark ? 'hover:text-cyan-400' : 'hover:text-[#009fe3]'
                  }`}
                >
                  Visual Identity & Brand Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('performance')}
                  className={`hover:text-[#009fe3] transition-colors ${
                    isDark ? 'hover:text-cyan-400' : 'hover:text-[#009fe3]'
                  }`}
                >
                  Conversion Rate Optimization (CRO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('capabilities')}
                  className={`hover:text-[#009fe3] transition-colors ${
                    isDark ? 'hover:text-cyan-400' : 'hover:text-[#009fe3]'
                  }`}
                >
                  AI Application Development
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Interactive Diagnostics */}
          <div className="md:col-span-3 space-y-3">
            <div className={`text-xs font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-neutral-200' : 'text-slate-900'
            }`}>
              Interactive Tools
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('scope-calculator')}
                  className={`hover:text-[#FF5E14] transition-colors`}
                >
                  Scope & Cost Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('geo-audit')}
                  className={`hover:text-[#FF5E14] transition-colors`}
                >
                  AI Citability & Schema Diagnostic
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('performance')}
                  className={`hover:text-[#FF5E14] transition-colors`}
                >
                  Speed & Pipeline Loss Simulator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('work')}
                  className={`hover:text-[#FF5E14] transition-colors`}
                >
                  Verified Client Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Location & Inquiries */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <div className={`font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-neutral-200' : 'text-slate-900'
            }`}>
              Contact & Social
            </div>
            <div className={`space-y-2 transition-colors ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#FF5E14] shrink-0 mt-0.5" />
                <span>Nextgen Mall, Mombasa Rd, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                <a
                  href="https://xweba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline underline-offset-2 transition-colors ${
                    isDark ? 'text-neutral-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  xweba.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:info@xweba.com"
                  className={`font-mono transition-colors ${
                    isDark ? 'text-white hover:text-[#FF5E14]' : 'text-slate-900 hover:text-[#FF5E14]'
                  }`}
                >
                  info@xweba.com
                </a>
              </div>

              {/* Social links matching the original header */}
              <div className="pt-3 flex items-center gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors" aria-label="LinkedIn">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28M7.86 18.5v-8.37H5.07v8.37h2.79z"/></svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors" aria-label="X (Twitter)">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" aria-label="Instagram">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="Facebook">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Quiet Row */}
        <div className={`mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono transition-colors ${
          isDark ? 'text-neutral-500' : 'text-slate-500'
        }`}>
          <div>
            © {new Date().getFullYear()} XwebA Digital Growth Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#009fe3] transition-colors cursor-pointer">
              Privacy Standards
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[#009fe3] transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#FF5E14]">Nairobi, Kenya & Global</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

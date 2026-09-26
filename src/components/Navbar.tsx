import React, { useState } from 'react';
import { Search, Menu, X, ArrowUpRight, Lock, Sun, Moon } from 'lucide-react';
import { XwebaLogo, HostingerBadge } from './BrandLogos';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenCommandPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Studio & Team', href: '#studio-team' },
    { label: 'Work', href: '#work' },
    { label: 'AI Citability (GEO)', href: '#geo-audit' },
    { label: 'Scope Estimator', href: '#scope-calculator' },
    { label: 'Speed & Pipeline', href: '#performance' },
    { label: 'Process', href: '#process' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Hostinger Partner Announcement Bar (Full Width with rich color blend) */}
      {showAnnouncement && (
        <div className={`relative w-full border-b transition-colors px-4 sm:px-8 lg:px-12 py-2 text-xs ${
          isDark
            ? 'border-cyan-900/40 bg-gradient-to-r from-[#071624] via-[#092b47] to-[#1c140d] text-neutral-300'
            : 'border-cyan-200/70 bg-gradient-to-r from-[#e0f2fe] via-[#f0f9ff] to-[#fff1e6] text-slate-800'
        }`}>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`font-mono font-semibold text-[11px] px-2 py-0.5 rounded ${
                isDark ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-600/10 text-cyan-700 border border-cyan-300'
              }`}>
                Special Offer
              </span>
              <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
              <a
                href="https://www.hostinger.com?REFERRALCODE=1JOHN0542"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 transition-colors ${
                  isDark ? 'hover:text-white' : 'hover:text-black font-medium'
                }`}
                title="Claim 20% Hostinger Partner Discount"
              >
                <span>
                  Click here to get the <strong className={isDark ? 'text-white' : 'text-slate-900 font-bold'}>BEST Hosting Services 20% off</strong> with XwebA cloud deployments.
                </span>
                <ArrowUpRight className="h-3 w-3 text-[#009fe3] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <HostingerBadge compact={true} />
              
              <button
                onClick={() => setShowAnnouncement(false)}
                className={`p-1 rounded transition-colors ${
                  isDark ? 'text-neutral-400 hover:text-neutral-200' : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Dismiss banner"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar (Full Width & Light/Dark Themed) */}
      <header className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors ${
        isDark
          ? 'border-white/10 bg-[#071520]/90 text-neutral-200'
          : 'border-slate-200/80 bg-white/90 text-slate-800 shadow-xs'
      }`}>
        <div className="w-full flex h-16 sm:h-18 items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          
          {/* Zone 1: Authentic XwebA Brand Logo */}
          <a
            href="/"
            className="group flex items-center transition-opacity hover:opacity-95"
            aria-label="XwebA Home"
          >
            <XwebaLogo size="md" variant="auto" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`whitespace-nowrap transition-colors py-1 ${
                  isDark
                    ? 'text-neutral-300 hover:text-cyan-400 hover:underline underline-offset-8 decoration-cyan-400'
                    : 'text-slate-600 hover:text-[#009fe3] hover:underline underline-offset-8 decoration-[#009fe3]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions, Theme Toggle & Search */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Light / Dark Mode Toggle Switch */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`flex items-center justify-center h-9 w-9 rounded-xl border transition-all ${
                isDark
                  ? 'border-neutral-700 bg-neutral-900/80 text-amber-400 hover:border-amber-400/50 hover:bg-neutral-800'
                  : 'border-slate-300 bg-slate-100 text-slate-700 hover:border-slate-400 hover:bg-slate-200 shadow-xs'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="h-4 w-4 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Quick Command Palette Search */}
            <button
              onClick={onOpenCommandPalette}
              aria-label="Quick Navigator (Cmd + K)"
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs transition-colors ${
                isDark
                  ? 'border-neutral-700/60 bg-[#0c1f2f]/80 text-neutral-300 hover:border-cyan-500 hover:text-white'
                  : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-[#009fe3] hover:text-[#009fe3] shadow-xs'
              }`}
            >
              <Search className="h-3.5 w-3.5 text-[#009fe3]" />
              <span className="hidden sm:inline">Search</span>
              <kbd className={`hidden sm:inline rounded px-1.5 py-0.5 text-[10px] font-mono ${
                isDark ? 'bg-neutral-800/80 text-neutral-400' : 'bg-slate-200 text-slate-500'
              }`}>
                ⌘K
              </kbd>
            </button>

            {/* Client Portal Link */}
            <a
              href="#client-portal"
              onClick={(e) => {
                e.preventDefault();
                onOpenConsultation();
              }}
              className={`hidden md:flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
                isDark
                  ? 'border-neutral-700/70 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-neutral-500'
                  : 'border-slate-300 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-400 shadow-xs'
              }`}
            >
              <Lock className="h-3 w-3 text-neutral-400" />
              <span>Client Portal</span>
            </a>

            {/* Primary Action Button (Signature Orange) */}
            <button
              onClick={onOpenConsultation}
              className="group flex items-center gap-1.5 rounded-xl bg-[#FF5E14] px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#e0520f] active:scale-98 shadow-md shadow-orange-950/30 whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex xl:hidden items-center justify-center p-2 rounded-lg transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer cleanly attached to header */}
        {mobileMenuOpen && (
          <div className={`w-full border-t px-6 py-6 xl:hidden shadow-2xl transition-colors ${
            isDark ? 'border-neutral-800 bg-[#071520] text-neutral-200' : 'border-slate-200 bg-white text-slate-800'
          }`}>
            <div className="flex flex-col gap-3 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2 border-b transition-colors ${
                    isDark
                      ? 'border-neutral-850 text-neutral-300 hover:text-cyan-400'
                      : 'border-slate-100 text-slate-700 hover:text-[#009fe3]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] py-3 text-sm font-semibold text-white hover:bg-[#e0520f] transition-colors"
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

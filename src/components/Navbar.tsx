import React, { useState } from 'react';
import { Search, Menu, X, ArrowUpRight, Lock, ExternalLink } from 'lucide-react';
import { XwebaLogo, HostingerBadge } from './BrandLogos';
import { HOSTINGER_OFFER } from '../data/content';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenCommandPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const navLinks = [
    { label: 'Services', href: '#capabilities' },
    { label: 'Work', href: '#work' },
    { label: 'Studio & Team', href: '#studio-team' },
    { label: 'GEO AI Diagnostic', href: '#geo-audit' },
    { label: 'Scope Estimator', href: '#scope-calculator' },
    { label: 'Speed & Impact', href: '#performance' },
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
      {/* Top Hostinger Partner Announcement Bar (Reimagined from original site) */}
      {showAnnouncement && (
        <div className="relative border-b border-cyan-900/40 bg-gradient-to-r from-[#071624] via-[#092238] to-[#141d26] px-4 py-2 text-xs text-neutral-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline font-mono text-cyan-400 font-medium">Special Offer</span>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <a
                href="#scope-calculator"
                onClick={(e) => handleNavClick(e, '#scope-calculator')}
                className="group inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <span>Click here to get the <strong className="text-white font-semibold">BEST Hosting Services 20% off</strong> with XwebA cloud deployments.</span>
                <ArrowUpRight className="h-3 w-3 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <HostingerBadge compact={true} />
              
              <button
                onClick={() => setShowAnnouncement(false)}
                className="text-neutral-500 hover:text-neutral-300 p-1"
                aria-label="Dismiss banner"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar (3-Zone Contract) */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#071520]/85 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          
          {/* Zone 1: Authentic Brand Wordmark Lockup */}
          <a
            href="/"
            className="group flex items-center transition-opacity hover:opacity-90"
            aria-label="XwebA Home"
          >
            <XwebaLogo size="md" showTagline={true} />
          </a>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap transition-colors hover:text-cyan-400 hover:underline underline-offset-8 decoration-cyan-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions & Search Palette */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCommandPalette}
              aria-label="Quick Navigator (Cmd + K)"
              className="flex items-center gap-2 rounded-lg border border-neutral-700/60 bg-[#0c1f2f]/80 px-3 py-1.5 text-xs text-neutral-300 hover:border-cyan-500 hover:text-white transition-colors"
            >
              <Search className="h-3.5 w-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline rounded bg-neutral-800/80 px-1.5 py-0.5 text-[10px] text-neutral-400 font-mono">⌘K</kbd>
            </button>

            {/* Client Portal Link (from original site) */}
            <a
              href="#client-portal"
              onClick={(e) => {
                e.preventDefault();
                onOpenConsultation();
              }}
              className="hidden md:flex items-center gap-1.5 rounded-lg border border-neutral-700/70 bg-neutral-900/60 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors whitespace-nowrap"
            >
              <Lock className="h-3 w-3 text-neutral-400" />
              <span>Client Portal</span>
            </a>

            {/* Primary Discovery Action (Signature Orange) */}
            <button
              onClick={onOpenConsultation}
              className="group flex items-center gap-1.5 rounded-lg bg-[#FF5E14] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#e0520f] active:scale-98 shadow-md shadow-orange-950/40 whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex xl:hidden items-center justify-center p-2 text-neutral-400 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-24 z-30 border-b border-neutral-800 bg-[#071520] px-6 py-6 xl:hidden shadow-2xl">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 text-neutral-300 transition-colors hover:text-cyan-400 border-b border-neutral-900"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#FF5E14] py-3 text-sm font-semibold text-white hover:bg-[#e0520f] transition-colors"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

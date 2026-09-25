import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Code, Sparkles, Calculator, Layers, FileText, Calendar, Zap, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [query, setQuery] = useState('');
  const { isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    {
      id: 'scope-tool',
      title: 'Interactive Scope & Cost Estimator',
      category: 'Interactive Tools',
      icon: <Calculator className="h-4 w-4 text-[#FF5E14]" />,
      action: () => scrollTo('scope-calculator')
    },
    {
      id: 'hostinger-partner',
      title: 'Official Hostinger Partner (20% Off Cloud Hosting)',
      category: 'Partner Offers',
      icon: <Globe className="h-4 w-4 text-[#673de6]" />,
      action: () => {
        onClose();
        window.open('https://www.hostinger.com?REFERRALCODE=1JOHN0542', '_blank', 'noopener,noreferrer');
      }
    },
    {
      id: 'geo-tool',
      title: 'GEO & AI Citability Diagnostic',
      category: 'Interactive Tools',
      icon: <Sparkles className="h-4 w-4 text-[#009fe3]" />,
      action: () => scrollTo('geo-audit')
    },
    {
      id: 'studio-team',
      title: 'Studio Culture, Designers & Strategy Team',
      category: 'Studio',
      icon: <Globe className="h-4 w-4 text-purple-400" />,
      action: () => scrollTo('studio-team')
    },
    {
      id: 'speed-tool',
      title: 'Speed & Conversion Loss Simulator',
      category: 'Interactive Tools',
      icon: <Zap className="h-4 w-4 text-emerald-400" />,
      action: () => scrollTo('performance')
    },
    {
      id: 'cap-web',
      title: 'Web Engineering & Edge Architecture',
      category: 'Capabilities',
      icon: <Code className="h-4 w-4 text-blue-400" />,
      action: () => scrollTo('capabilities')
    },
    {
      id: 'cap-geo',
      title: 'Generative Engine Optimization (GEO)',
      category: 'Capabilities',
      icon: <Sparkles className="h-4 w-4 text-[#FF5E14]" />,
      action: () => scrollTo('capabilities')
    },
    {
      id: 'work-all',
      title: 'Case Studies & Verified Outcomes',
      category: 'Work',
      icon: <Layers className="h-4 w-4 text-[#009fe3]" />,
      action: () => scrollTo('work')
    },
    {
      id: 'process-sprint',
      title: 'The 4-Week Delivery Protocol',
      category: 'Methodology',
      icon: <FileText className="h-4 w-4 text-neutral-400" />,
      action: () => scrollTo('process')
    },
    {
      id: 'action-book',
      title: 'Book 30-Min Strategy Discovery Call',
      category: 'Direct Action',
      icon: <Calendar className="h-4 w-4 text-[#FF5E14]" />,
      action: () => {
        onClose();
        onOpenConsultation();
      }
    }
  ];

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm">
      <div className={`relative w-full max-w-xl rounded-2xl border p-3 shadow-2xl overflow-hidden transition-colors ${
        isDark ? 'border-neutral-700 bg-[#071520] text-neutral-200' : 'border-slate-200 bg-white text-slate-800'
      }`}>
        
        {/* Search Input Bar */}
        <div className={`flex items-center gap-3 border-b px-3 pb-3 transition-colors ${
          isDark ? 'border-neutral-800' : 'border-slate-200'
        }`}>
          <Search className="h-4 w-4 text-[#009fe3] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to tool, service, case study, or book brief..."
            className={`w-full bg-transparent text-sm focus:outline-none ${
              isDark ? 'text-white placeholder:text-neutral-500' : 'text-slate-900 placeholder:text-slate-400'
            }`}
          />
          <button
            onClick={onClose}
            className={`p-1 rounded transition-colors ${
              isDark ? 'text-neutral-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'
            }`}
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="mt-2 max-h-80 overflow-y-auto py-1 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors group ${
                  isDark ? 'hover:bg-neutral-800/80 text-white' : 'hover:bg-slate-100 text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                    isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold">
                      {item.title}
                    </div>
                    <div className={`text-[10px] font-mono ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>
                      {item.category}
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-3.5 w-3.5 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          ) : (
            <div className={`p-6 text-center text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>
              No matching commands or destinations found.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className={`border-t px-3 pt-2 mt-2 flex items-center justify-between text-[11px] font-mono transition-colors ${
          isDark ? 'border-neutral-850 text-neutral-500' : 'border-slate-200 text-slate-400'
        }`}>
          <span>Navigate with mouse or click</span>
          <span>ESC to exit</span>
        </div>

      </div>
    </div>
  );
};

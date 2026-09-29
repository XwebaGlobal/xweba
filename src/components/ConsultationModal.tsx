import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Calendar, Clock } from 'lucide-react';
import { XwebaLogo } from './BrandLogos';
import { useTheme } from '../context/ThemeContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    serviceName?: string;
    estimatedCost?: string;
    timeline?: string;
    modules?: string[];
    domain?: string;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    currentWebsite: initialData?.domain || '',
    timeline: initialData?.timeline || 'Within 4-8 weeks',
    budgetTier: initialData?.estimatedCost || '$5,000 - $10,000',
    projectFocus: initialData?.serviceName || 'High-Performance Web Platform & GEO',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Sync incoming preloaded brief data whenever modal opens or changes
  React.useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError('');
      setFormData(prev => ({
        ...prev,
        currentWebsite: initialData?.domain || prev.currentWebsite,
        timeline: initialData?.timeline || prev.timeline || 'Within 4-8 weeks',
        budgetTier: initialData?.estimatedCost || prev.budgetTier || '$5,000 - $10,000',
        projectFocus: initialData?.serviceName || prev.projectFocus || 'High-Performance Web Platform & GEO',
      }));
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setError('Please provide your name, work email, and company name.');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid work email address.');
      return;
    }

    setError('');
    setSubmitted(true);

    // If running inside WordPress, send form submission to WordPress REST API
    const wp = (window as unknown as { wpData?: { restUrl: string; nonce: string } }).wpData;
    if (wp && wp.restUrl) {
      try {
        fetch(`${wp.restUrl}xweba/v1/consultation`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': wp.nonce || ''
          },
          body: JSON.stringify(formData)
        }).catch(err => {
          console.warn('WordPress lead sync:', err);
        });
      } catch (err) {
        console.warn('WordPress lead sync error:', err);
      }
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 shadow-2xl transition-colors ${
        isDark ? 'border-neutral-700 bg-[#071520] text-neutral-200' : 'border-slate-200 bg-white text-slate-800'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-lg transition-colors ${
            isDark ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
          }`}
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-4">
              <XwebaLogo size="sm" variant="auto" />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              <span className="text-[#009fe3]">Direct Discovery Session</span>
              <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
              <span className="text-[#FF5E14]">30 Minutes With Principals</span>
            </div>

            <h3 className={`mt-2 font-display text-2xl sm:text-3xl font-bold transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Schedule Your Architecture Discovery
            </h3>
            
            <p className={`mt-2 text-xs sm:text-sm leading-relaxed transition-colors ${
              isDark ? 'text-neutral-300' : 'text-slate-600'
            }`}>
              We review your current performance bottlenecks, GEO discoverability gaps, and deliver a concrete blueprint. No sales reps, only senior engineers and design strategists.
            </p>

            {/* Scope Preload Banner */}
            {initialData?.estimatedCost && (
              <div className={`mt-4 rounded-xl border p-3.5 text-xs flex items-center justify-between transition-colors ${
                isDark ? 'border-cyan-900/50 bg-[#0c2438] text-neutral-300' : 'border-cyan-200 bg-cyan-50/70 text-slate-800'
              }`}>
                <div>
                  <span className="text-neutral-400 font-mono">Scope Selected:</span>{' '}
                  <strong className={isDark ? 'text-white' : 'text-slate-900'}>{initialData.serviceName}</strong>
                </div>
                <div className="font-mono text-[#FF5E14] font-bold">
                  {initialData.estimatedCost} ({initialData.timeline})
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
                    isDark ? 'text-neutral-400' : 'text-slate-600 font-semibold'
                  }`}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-[#009fe3] ${
                      isDark ? 'border-neutral-700 bg-neutral-900 text-white' : 'border-slate-300 bg-slate-50 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
                    isDark ? 'text-neutral-400' : 'text-slate-600 font-semibold'
                  }`}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maya@company.com"
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-[#009fe3] ${
                      isDark ? 'border-neutral-700 bg-neutral-900 text-white' : 'border-slate-300 bg-slate-50 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
                    isDark ? 'text-neutral-400' : 'text-slate-600 font-semibold'
                  }`}>
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Health"
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-[#009fe3] ${
                      isDark ? 'border-neutral-700 bg-neutral-900 text-white' : 'border-slate-300 bg-slate-50 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
                    isDark ? 'text-neutral-400' : 'text-slate-600 font-semibold'
                  }`}>
                    Current Website (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.currentWebsite}
                    onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                    placeholder="e.g. apexhealth.io"
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-[#009fe3] ${
                      isDark ? 'border-neutral-700 bg-neutral-900 text-white' : 'border-slate-300 bg-slate-50 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
                  isDark ? 'text-neutral-400' : 'text-slate-600 font-semibold'
                }`}>
                  Core Project Objectives & Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Outline any key dates, conversion targets, or current architectural challenges..."
                  className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-[#009fe3] ${
                    isDark ? 'border-neutral-700 bg-neutral-900 text-white' : 'border-slate-300 bg-slate-50 text-slate-900'
                  }`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-[#e0520f] active:scale-98"
                >
                  <span>Confirm Architecture Discovery Brief</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <CheckCircle className="h-7 w-7" />
            </div>

            <h3 className={`font-display text-2xl font-bold transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Discovery Brief Confirmed
            </h3>

            <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed transition-colors ${
              isDark ? 'text-neutral-300' : 'text-slate-600'
            }`}>
              Thank you, <strong>{formData.name}</strong>. An engineering director from our Nairobi studio will review your requirements for <strong>{formData.company}</strong> and send an invitation within 2 business hours. For urgent briefs, contact us directly at <a href="mailto:info@xweba.com" className="text-[#009fe3] underline underline-offset-2">info@xweba.com</a>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="rounded-xl bg-[#009fe3] px-6 py-2.5 text-xs font-semibold text-white hover:bg-sky-500 transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

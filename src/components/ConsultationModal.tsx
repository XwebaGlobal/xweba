import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Calendar, Clock } from 'lucide-react';

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
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-700 bg-[#0e0f11] p-6 sm:p-10 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <span>Direct Discovery Session</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#ff3b00]">30 Minutes With Principals</span>
            </div>

            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
              Schedule Your Architecture Discovery
            </h3>
            
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              We review your current performance bottlenecks, GEO discoverability gaps, and deliver a concrete blueprint. No sales reps, only senior engineers and design strategists.
            </p>

            {/* Scope Preload Banner */}
            {initialData?.estimatedCost && (
              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-900/60 p-3.5 text-xs text-neutral-300 flex items-center justify-between">
                <div>
                  <span className="text-neutral-400 font-mono">Scope Selected:</span>{' '}
                  <strong className="text-white">{initialData.serviceName}</strong>
                </div>
                <div className="font-mono text-[#ff3b00] font-bold">
                  {initialData.estimatedCost} ({initialData.timeline})
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 rounded-lg bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Kimani"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-[#ff3b00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-[#ff3b00] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Health"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-[#ff3b00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Current Website URL
                  </label>
                  <input
                    type="text"
                    value={formData.currentWebsite}
                    onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                    placeholder="https://yourwebsite.com"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-[#ff3b00] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                  Primary Objective / Bottleneck
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your conversion goals, current tech stack, or generative AI discovery objectives..."
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-[#ff3b00] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-850">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Strict NDA guarantee. We never share project briefs.</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff3b00] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#e03400] transition-colors active:scale-98"
                >
                  <span>Confirm Discovery Session</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <CheckCircle className="h-7 w-7" />
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              Discovery Brief Confirmed
            </h3>

            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. A calendar invite and prep agenda have been routed to <strong className="text-white">{formData.email}</strong>.
            </p>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 max-w-md mx-auto text-left text-xs space-y-2 text-neutral-300 font-mono">
              <div><strong className="text-neutral-400">Assigned Team:</strong> Principal Engineer & Design Lead</div>
              <div><strong className="text-neutral-400">Response SLA:</strong> Within 4 business hours</div>
              <div><strong className="text-neutral-400">Focus:</strong> {formData.projectFocus}</div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl bg-neutral-800 px-6 py-2.5 text-xs font-semibold text-white hover:bg-neutral-700 transition-colors"
              >
                Return to Experience
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

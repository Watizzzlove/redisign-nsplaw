import React, { useState } from 'react'
import { X, ArrowRight, CheckCircle2, Lock } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationModal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    practice: 'Commercial Arbitration & Litigation',
    message: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white border border-black/15 p-8 sm:p-10 shadow-2xl font-mono text-[#0A0A0A]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-black transition"
          data-cursor="action"
          data-cursor-label="close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#5F1358]" />
            <h3 className="font-sans text-2xl text-[#0A0A0A] font-bold">Mandate Dispatched</h3>
            <p className="text-xs text-slate-500 max-w-xs font-light leading-relaxed">
              Your inquiry has been forwarded directly to the designated practice partner under NDA.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[10px] text-[#5F1358] uppercase tracking-widest mb-3 font-semibold">
              <Lock className="w-3 h-3" />
              <span>Attorney Privilege • Strictly Confidential</span>
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight mb-2">
              Partner Briefing
            </h3>
            <p className="text-xs text-slate-500 font-light mb-8 leading-relaxed">
              Direct consultation with named partners for high-stakes matters.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-slate-500 mb-1.5 uppercase tracking-wider text-[10px] font-semibold">
                  Name / Holding Entity
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Chief Legal Counsel / PJSC..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-black/10 text-[#0A0A0A] placeholder-slate-400 focus:outline-none focus:border-[#5F1358] transition"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1.5 uppercase tracking-wider text-[10px] font-semibold">
                  Direct Contact (Email / Telegram)
                </label>
                <input 
                  type="text"
                  required
                  placeholder="partner@company.com or @handle"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-black/10 text-[#0A0A0A] placeholder-slate-400 focus:outline-none focus:border-[#5F1358] transition"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1.5 uppercase tracking-wider text-[10px] font-semibold">
                  Practice Area
                </label>
                <select
                  value={formData.practice}
                  onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-black/10 text-[#0A0A0A] focus:outline-none focus:border-[#5F1358] transition cursor-pointer"
                >
                  <option>Commercial Arbitration & Litigation</option>
                  <option>Strategic M&A & Corporate Structuring</option>
                  <option>Sanctions Relief & Asset Liberation (OFAC / EU)</option>
                  <option>Private Wealth & Personal Foundations</option>
                  <option>Other Sensitive Corporate Matter</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-500 mb-1.5 uppercase tracking-wider text-[10px] font-semibold">
                  Brief Parameters
                </label>
                <textarea 
                  rows={3}
                  placeholder="Jurisdiction, dispute volume, or transaction scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-black/10 text-[#0A0A0A] placeholder-slate-400 focus:outline-none focus:border-[#5F1358] transition resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-[#0A0A0A] text-white font-semibold uppercase tracking-wider text-xs hover:bg-[#5F1358] transition duration-300 flex items-center justify-center gap-2 mt-4"
                data-cursor="action"
                data-cursor-label="send"
              >
                <span>Dispatch Mandate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

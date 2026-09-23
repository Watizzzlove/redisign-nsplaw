import { useState } from 'react'
import { Copy, Check, Send } from 'lucide-react'

interface Partner {
  name: string
  title: string
  focus: string
  email: string
  telegram: string
}

const leaders: Partner[] = [
  {
    name: 'Alexander Nektorov',
    title: 'Managing Partner, Advocate',
    focus: 'High-Stakes Corporate Litigation & Asset Defense',
    email: 'a.nektorov@nsplaw.com',
    telegram: 'nektorov_nsp',
  },
  {
    name: 'Mikhail Savelev',
    title: 'Partner, Head of M&A',
    focus: 'Strategic Mergers & Acquisitions, Private Equity',
    email: 'm.savelev@nsplaw.com',
    telegram: 'mikle_sav',
  },
]

const practiceHeads: Partner[] = [
  {
    name: 'Victor Prokofiev',
    title: 'Partner, Litigation',
    focus: 'Commercial Arbitration & Precedent Disputes',
    email: 'v.prokofiev@nsplaw.com',
    telegram: 'prokofiev_nsp',
  },
  {
    name: 'Ilya Kovalev',
    title: 'Partner, Private Wealth',
    focus: 'International Tax Structuring & Personal Foundations',
    email: 'i.kovalev@nsplaw.com',
    telegram: 'kovalev_nsp',
  },
]

export function PeopleRoster() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 2000)
  }

  return (
    <section id="partners" className="relative w-full bg-white border-t border-hairline py-24 sm:py-32 px-6 sm:px-12 md:px-16 text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Index */}
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F1358] mb-8 font-semibold">
          ( 03 ) THE TEAM
        </div>

        <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A] mb-20">
          NSP without people is nothin’.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 font-mono">
          
          {/* Managing Partners */}
          <div className="lg:col-span-6 space-y-12">
            <div className="text-xs uppercase tracking-widest text-slate-400 pb-3 border-b border-hairline font-semibold">
              [ Managing & Founding Partners ]
            </div>

            <div className="space-y-10">
              {leaders.map((p) => (
                <div 
                  key={p.email}
                  className="group py-2 border-b border-hairline pb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
                  data-cursor="action"
                  data-cursor-label="partner"
                >
                  <div>
                    <h3 className="font-sans text-2xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#5F1358] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-1">{p.title}</p>
                    <p className="text-xs font-mono text-slate-600 mt-2 font-light max-w-sm">{p.focus}</p>
                  </div>

                  <div className="flex items-center gap-3 text-xs flex-shrink-0">
                    <button
                      onClick={() => handleCopy(p.email)}
                      className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#5F1358] hover:text-[#5F1358] transition flex items-center gap-1.5"
                    >
                      {copiedEmail === p.email ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>email</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`https://t.me/${p.telegram}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#5F1358] hover:text-[#5F1358] transition flex items-center gap-1"
                    >
                      <span>tg</span>
                      <Send className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Heads */}
          <div className="lg:col-span-6 space-y-12">
            <div className="text-xs uppercase tracking-widest text-slate-400 pb-3 border-b border-hairline font-semibold">
              [ Practice Partners ]
            </div>

            <div className="space-y-10">
              {practiceHeads.map((p) => (
                <div 
                  key={p.email}
                  className="group py-2 border-b border-hairline pb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
                  data-cursor="action"
                  data-cursor-label="partner"
                >
                  <div>
                    <h3 className="font-sans text-2xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#5F1358] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-1">{p.title}</p>
                    <p className="text-xs font-mono text-slate-600 mt-2 font-light max-w-sm">{p.focus}</p>
                  </div>

                  <div className="flex items-center gap-3 text-xs flex-shrink-0">
                    <button
                      onClick={() => handleCopy(p.email)}
                      className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#5F1358] hover:text-[#5F1358] transition flex items-center gap-1.5"
                    >
                      {copiedEmail === p.email ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>email</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`https://t.me/${p.telegram}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#5F1358] hover:text-[#5F1358] transition flex items-center gap-1"
                    >
                      <span>tg</span>
                      <Send className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

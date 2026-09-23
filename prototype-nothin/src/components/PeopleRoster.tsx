import { useState } from 'react'
import { Copy, Check, Send } from 'lucide-react'

interface Partner {
  name: string
  title: string
  focus: string
  email: string
  telegram: string
}

const partnersList: Partner[] = [
  {
    name: 'Александр Некторов',
    title: 'Управляющий партнер, адвокат',
    focus: 'Сложные судебные процессы, защита корпоративных активов и санкционный комплаенс',
    email: 'a.nektorov@nsplaw.com',
    telegram: 'nektorov_nsp',
  },
  {
    name: 'Михаил Савельев',
    title: 'Партнер, руководитель практики M&A',
    focus: 'Стратегические слияния и поглощения, реструктуризация крупных холдингов',
    email: 'm.savelev@nsplaw.com',
    telegram: 'mikle_sav',
  },
  {
    name: 'Виктор Прокофьев',
    title: 'Партнер судебной практики',
    focus: 'Коммерческий арбитраж, трансграничные и прецедентные споры в высших судах',
    email: 'v.prokofiev@nsplaw.com',
    telegram: 'prokofiev_nsp',
  },
  {
    name: 'Илья Ковалев',
    title: 'Партнер практики частного капитала',
    focus: 'Международное структурирование, личные фонды и защита семейных состояний',
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
        
        {/* Large Confident Heading: Single font, single weight, increased size */}
        <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] mb-16 sm:mb-20">
          Партнерский уровень каждого решения.
        </h2>

        {/* 2-Column Grid of Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 font-mono">
          {partnersList.map((p) => (
            <div 
              key={p.email}
              className="group py-6 border-b border-hairline flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 transition-colors hover:border-black/30"
              data-cursor="action"
              data-cursor-label="партнер"
            >
              <div>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#5F1358] transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1 font-medium">{p.title}</p>
                <p className="text-xs font-mono text-slate-600 mt-2.5 font-light max-w-md leading-relaxed">{p.focus}</p>
              </div>

              <div className="flex items-center gap-3 text-xs flex-shrink-0 mt-3 sm:mt-0">
                <button
                  onClick={() => handleCopy(p.email)}
                  className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#5F1358] hover:text-[#5F1358] active:scale-95 transition flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail === p.email ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>скопировано</span>
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
                  className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#5F1358] hover:text-[#5F1358] active:scale-95 transition flex items-center gap-1"
                >
                  <span>tg</span>
                  <Send className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

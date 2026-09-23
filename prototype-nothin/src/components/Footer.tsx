import { ArrowRight } from 'lucide-react'

interface FooterProps {
  onOpenConsultation: () => void
}

export function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer id="contact" className="relative w-full bg-[#07080A] text-slate-300 border-t border-white/10 pt-24 pb-16 px-6 sm:px-12 md:px-16 overflow-hidden">
      
      {/* Monumental Watermark Background Lettering N S P ’ across full width */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden z-0 flex items-end justify-center opacity-[0.08] sm:opacity-[0.10]">
        <div className="w-full flex items-baseline justify-between font-sans font-black tracking-tighter text-[32vw] sm:text-[27vw] leading-none text-white whitespace-nowrap px-2 sm:px-8">
          <span>N</span>
          <span>S</span>
          <span>P</span>
          <span className="text-[#5F1358] font-serif text-[22vw] -ml-2 sm:-ml-6 opacity-80">’</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Live Status Indicator */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-mono text-white/80 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Офис в Москве: партнерский совет на связи</span>
          </div>
        </div>

        {/* Invitation Row */}
        <div className="pb-16 sm:pb-24 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-3xl">
            <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04]">
              Нужен результат в сложном деле?
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 mt-4 max-w-xl font-light leading-relaxed">
              Обсудите стратегию с профильным партнером бюро. Первичная консультация проходит в режиме строгой адвокатской тайны.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
            <button 
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center gap-3 rounded-full bg-white text-[#0A0A0A] hover:bg-[#5F1358] hover:text-white px-7 py-4 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xl active:scale-95 group cursor-pointer"
              data-cursor="action"
              data-cursor-label="встреча"
            >
              <span>Назначить встречу с партнером</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://t.me/nsplaw" 
              target="_blank" 
              rel="noreferrer"
              className="relative inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 hover:border-[#5F1358] hover:text-[#5F1358] text-white px-6 py-4 font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer"
              data-cursor="link"
              data-cursor-label="telegram"
            >
              <span>Telegram @nsplaw</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10 font-mono text-xs">
          <div>
            <div className="text-white font-sans font-bold uppercase tracking-wider mb-2.5 text-sm">Москва (HQ)</div>
            <p className="leading-relaxed text-slate-400 text-xs">
              Москва-Сити, Башня Федерация Восток<br />
              45 этаж, Пресненская наб., 12<br />
              <a href="tel:+74956468176" className="text-white hover:text-[#5F1358] transition">+7 (495) 646-81-76</a><br />
              <a href="mailto:info@nsplaw.com" className="text-slate-400 hover:text-white transition">info@nsplaw.com</a>
            </p>
          </div>

          <div>
            <div className="text-white font-sans font-bold uppercase tracking-wider mb-2.5 text-sm">Ближний Восток</div>
            <p className="leading-relaxed text-slate-400 text-xs">
              DIFC Gate Precinct 4<br />
              Дубай, Объединенные Арабские Эмираты<br />
              <a href="mailto:dubai@nsplaw.com" className="text-slate-400 hover:text-white transition">dubai@nsplaw.com</a>
            </p>
          </div>

          <div>
            <div className="text-white font-sans font-bold uppercase tracking-wider mb-2.5 text-sm">Азия (Гонконг)</div>
            <p className="leading-relaxed text-slate-400 text-xs">
              Two Exchange Square, Central<br />
              Гонконг, SAR<br />
              <a href="mailto:asia@nsplaw.com" className="text-slate-400 hover:text-white transition">asia@nsplaw.com</a>
            </p>
          </div>

          <div>
            <div className="text-white font-sans font-bold uppercase tracking-wider mb-2.5 text-sm">Адвокатская тайна</div>
            <p className="leading-relaxed text-slate-400 text-[11px]">
              Деятельность осуществляется на основании Федерального закона «Об адвокатской деятельности и адвокатуре в РФ» 63-ФЗ. Полная конфиденциальность с первого контакта.
            </p>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div>
            © 2006—2026 Адвокатское бюро «Некторов, Савельев и Партнеры».
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-[#5F1358] transition">Политика конфиденциальности</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-[#5F1358] transition">Условия соглашения</a>
            <span className="text-white/20">•</span>
            <a href="https://t.me/nsplaw" target="_blank" rel="noreferrer" className="hover:text-[#5F1358] transition">Аналитический канал в Telegram</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

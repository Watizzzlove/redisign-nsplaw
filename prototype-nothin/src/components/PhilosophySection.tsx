export function PhilosophySection() {
  return (
    <section id="manifesto" className="relative w-full bg-[#FAFAF9] border-t border-hairline py-24 sm:py-32 px-6 sm:px-12 md:px-16 text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Large Confident Brutalist Heading: Single font, single weight, increased size, no italics */}
        <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.04] max-w-5xl mb-16">
          В корпоративных конфликтах высшей сложности побеждает нестандартная стратегия.
        </h2>

        {/* Two-Column Clean Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-hairline font-mono text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <div className="lg:col-span-5 font-sans text-xl sm:text-2xl text-[#0A0A0A] font-semibold leading-snug">
            Когда стандартные правовые формулы не дают защиты, исход дела определяют стратегическое предвидение и процессуальная точность.
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6 font-light text-slate-600">
            <p>
              Основанное в 2006 году, адвокатское бюро NSP зарекомендовало себя как бескомпромиссная юридическая сила. В условиях санкций и правовой турбулентности наша команда довела до победы ключевые прецедентные процессы перед коллегиями Верховного Суда РФ и международными арбитражами.
            </p>
            <p>
              Мы принципиально не передаем ключевые решения младшим юристам. Каждое обращение лично возглавляет партнер бюро — от проектирования правовой позиции до фактического исполнения решения.
            </p>

            {/* Brutalist Clean Metric Bar */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-hairline">
              <div>
                <div className="font-sans text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">₽450+ млрд</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">Защищено в судах</div>
              </div>
              <div>
                <div className="font-sans text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">94%</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">Побед в арбитражах</div>
              </div>
              <div>
                <div className="font-sans text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">Band 1</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">Право-300 / Коммерсантъ</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

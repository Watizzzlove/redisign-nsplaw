export function PhilosophySection() {
  return (
    <section id="manifesto" className="relative w-full bg-[#FAFAF9] border-t border-hairline py-24 sm:py-32 px-6 sm:px-12 md:px-16 text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Large Confident Brutalist Heading */}
        <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.04] max-w-5xl mb-16">
          В корпоративных конфликтах высшей сложности побеждает нестандартная стратегия.
        </h2>

        {/* Two-Column Clean Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-hairline font-mono text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <div className="lg:col-span-5 font-sans text-xl sm:text-2xl text-[#0A0A0A] font-semibold leading-snug">
            Принцип «We Do More»: мы вникаем в устройство бизнеса, технологию добычи, логистику и рынки капитала так же глубоко, как в букву закона.
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6 font-light text-slate-600">
            <p>
              Основанное в 2006 году, адвокатское бюро NSP зарекомендовало себя как бескомпромиссная независимая юридическая сила. Когда международные санкции и передел активов трансформировали рынок, наша команда возглавила защиту ключевых предприятий перед Верховным Судом РФ и иностранными регуляторами.
            </p>
            <p>
              Благодаря участию в крупнейшей международной юридической сети Yingke, юристы NSP не ограничены государственными границами и располагают партнерскими офисами в более чем 30 странах мира — включая Китай, ОАЭ, Швейцарию и Великобританию.
            </p>

            {/* Brutalist Clean Metric Bar */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-hairline">
              <div>
                <div className="font-sans text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">₽450+ млрд</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">Защищено и оспорено</div>
              </div>
              <div>
                <div className="font-sans text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">30+ стран</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">Сеть офисов Yingke</div>
              </div>
              <div>
                <div className="font-sans text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">Band 1</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">Право-300 / Коммерсантъ</div>
              </div>
            </div>

            {/* Authentic Rating Quotes from nsplaw.com */}
            <div className="pt-10 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-white border border-black/10 flex flex-col justify-between">
                <p className="font-sans text-sm font-medium text-[#0A0A0A] leading-relaxed mb-4">
                  «Юристы NSP максимально чётко понимают наши цели в каждом проекте. Уже с самых первых встреч они просчитывают заключительные шаги.»
                </p>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#5F1358] font-bold">
                  The Legal 500
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-black/10 flex flex-col justify-between">
                <p className="font-sans text-sm font-medium text-[#0A0A0A] leading-relaxed mb-4">
                  «Их отличает глубокий практический подход к решению проблем бизнеса и мгновенная реакция в критических обстоятельствах.»
                </p>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#5F1358] font-bold">
                  Chambers Europe
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

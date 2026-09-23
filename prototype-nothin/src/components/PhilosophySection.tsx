export function PhilosophySection() {
  return (
    <section id="manifesto" className="relative w-full bg-[#FAFAF9] border-t border-hairline py-24 sm:py-32 px-6 sm:px-12 md:px-16 text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Index */}
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F1358] mb-8 font-semibold">
          ( 02 ) THE PERSPECTIVE
        </div>

        {/* Large Confident Brutalist Heading */}
        <h2 className="font-sans text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.08] max-w-5xl mb-16">
          In high-stakes corporate warfare,<br />
          <span className="font-light italic text-slate-500">the winning argument is never generic.</span>
        </h2>

        {/* Two-Column Clean Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-hairline font-mono text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <div className="lg:col-span-5 font-sans text-xl sm:text-2xl text-[#0A0A0A] font-semibold leading-snug">
            When standard regulations fail, outcome is decided by strategic vision and procedural ruthlessness.
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6 font-light text-slate-600">
            <p>
              Founded in 2006, Advocate Bureau NSP established itself as a premier independent legal force. When international sanctions and geopolitical shifts transformed the market, our team led landmark litigation before the Supreme Court and European depositories.
            </p>
            <p>
              We do not delegate critical strategic choices to junior associates. Every client mandate is personally led by a named partner from initial strategy to the execution of judgment.
            </p>

            {/* Brutalist Clean Metric Bar */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-hairline">
              <div>
                <div className="font-sans text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">₽450B+</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">Protected in Courts</div>
              </div>
              <div>
                <div className="font-sans text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">94%</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">Arbitration Win Ratio</div>
              </div>
              <div>
                <div className="font-sans text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">Band 1</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">Pravo-300 / Kommersant</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

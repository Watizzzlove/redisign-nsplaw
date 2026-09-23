import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

interface Practice {
  num: string
  title: string
  summary: string
  metric: string
  previewImage: string
}

const practices: Practice[] = [
  {
    num: '01',
    title: 'High-Stakes Commercial Litigation',
    summary: 'Precedential disputes before the Supreme Court of the Russian Federation and international arbitration tribunals (HKIAC, DIAC, ICAC).',
    metric: '₽280B+ protected',
    previewImage: './assets/nsp_hero_femida_concept_1790014641994.jpg',
  },
  {
    num: '02',
    title: 'Strategic M&A & Private Equity',
    summary: 'Consolidation of strategic corporate assets, cross-border restructuring, and regulatory clearances with government commissions.',
    metric: '120+ transactions',
    previewImage: './assets/nsp_ui_homepage_concept_1790014661753.jpg',
  },
  {
    num: '03',
    title: 'Sanctions Relief & Asset Liberation',
    summary: 'Unblocking foreign asset accounts in European depositories (Euroclear, Clearstream) and delisting defense before OFAC and EU bodies.',
    metric: '98% unblocked',
    previewImage: './assets/nsp_hero_femida_concept_1790014641994.jpg',
  },
  {
    num: '04',
    title: 'Private Capital & Personal Foundations',
    summary: 'Succession architectures, defense of family wealth against predatory claims, and personal foundations (личные фонды).',
    metric: 'Confidential',
    previewImage: './assets/nsp_ui_homepage_concept_1790014661753.jpg',
  },
]

export function WorksList() {
  const [hoveredPractice, setHoveredPractice] = useState<Practice | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section 
      id="practices" 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-white border-t border-hairline py-24 sm:py-32 px-6 sm:px-12 md:px-16"
    >
      {/* Floating Hover Vignette (Signature noth.in interaction) */}
      <AnimatePresence>
        {hoveredPractice && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              left: mousePos.x + 30,
              top: mousePos.y - 100,
              pointerEvents: 'none',
              zIndex: 50,
            }}
            className="hidden lg:block w-80 h-48 rounded-lg overflow-hidden border border-black/10 bg-white shadow-2xl p-1"
          >
            <img 
              src={hoveredPractice.previewImage} 
              alt={hoveredPractice.title} 
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute bottom-2.5 left-2.5 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white">
              {hoveredPractice.metric}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Category Lettering in noth.in spaced style */}
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F1358] mb-8 font-semibold">
          ( 01 ) PRACTICES
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A] max-w-2xl leading-[1.05]">
            Good firms recite laws.<br />
            <span className="font-light text-slate-500 italic">Great firms win precedents.</span>
          </h2>
          <p className="font-mono text-xs text-slate-600 max-w-xs font-normal leading-relaxed">
            We focus exclusively on complex legal mandates where conventional template approaches collapse.
          </p>
        </div>

        {/* Minimalist Brutalist Table Rows */}
        <div className="border-t border-hairline divide-y divide-hairline">
          {practices.map((item) => (
            <div
              key={item.num}
              onMouseEnter={() => setHoveredPractice(item)}
              onMouseLeave={() => setHoveredPractice(null)}
              className="py-10 sm:py-12 group flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-colors duration-300 hover:bg-slate-50/60 px-4 -mx-4 rounded-xl cursor-pointer"
              data-cursor="explore"
              data-cursor-label={`view ${item.num}`}
            >
              <div className="flex items-baseline gap-8 sm:gap-14">
                <span className="font-mono text-xs sm:text-sm text-slate-400 group-hover:text-[#5F1358] transition-colors font-medium">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#5F1358] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 mt-2.5 max-w-2xl font-light leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 self-start lg:self-center font-mono text-xs">
                <span className="text-[#0A0A0A] font-semibold tracking-wide">
                  {item.metric}
                </span>
                <div className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-slate-700 group-hover:border-[#5F1358] group-hover:bg-[#5F1358] group-hover:text-white transition duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

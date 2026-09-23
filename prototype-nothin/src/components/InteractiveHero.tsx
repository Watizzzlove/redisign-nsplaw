import { useRef, useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onOpenConsultation: () => void
}

export function InteractiveHero({ onOpenConsultation }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [activeLetter, setActiveLetter] = useState<string | null>(null)

  // Fluid ripple / cursor trail on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Trail particles with wine/plum accent
    interface Ripple {
      x: number
      y: number
      radius: number
      maxRadius: number
      alpha: number
      color: string
    }

    const ripples: Ripple[] = []
    let lastX = 0
    let lastY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const dist = Math.hypot(x - lastX, y - lastY)
      if (dist > 15) {
        ripples.push({
          x,
          y,
          radius: 12,
          maxRadius: Math.min(180, 50 + dist * 2),
          alpha: 0.35,
          color: 'rgba(95, 19, 88, ' // royal plum #5F1358
        })
        lastX = x
        lastY = y
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        r.radius += 2.5
        r.alpha *= 0.94

        if (r.alpha < 0.01 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1)
          continue
        }

        const gradient = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, r.radius)
        gradient.addColorStop(0, `${r.color}${r.alpha})`)
        gradient.addColorStop(0.7, `${r.color}${r.alpha * 0.4})`)
        gradient.addColorStop(1, `${r.color}0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const handleLetterClick = (letter: string) => {
    setActiveLetter((prev) => (prev === letter ? null : letter))
  }

  return (
    <section className="relative w-full min-h-screen bg-white text-[#0A0A0A] flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden select-none">
      
      {/* Interactive Background Canvas (Ripple & Fluid Trail behind typography) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Top Header Row (Exact noth.in composition) */}
      <header className="relative z-20 flex items-start justify-between w-full">
        
        {/* Top-Left: Punchy Statement + Pill Action Button */}
        <div className="flex flex-col items-start space-y-3 sm:space-y-4 max-w-[240px] sm:max-w-sm">
          <p className="font-sans text-[13px] sm:text-[17px] font-semibold tracking-tight text-[#0A0A0A] leading-snug">
            Не просто юристы, а стратегический перевес.<br />
            Потому что результат решает всё.
          </p>

          <button 
            onClick={onOpenConsultation}
            className="btn-nothin mt-1 group active:scale-95 transition-transform"
            data-cursor="action"
            data-cursor-label="обсудить"
          >
            <span>Обсудить задачу</span>
            <ArrowRight className="w-3.5 h-3.5 arrow-icon group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Top-Right: Brutalist Vertical Navigation + Dot Grid Icon */}
        <div className="flex items-start gap-4 text-right">
          <nav className="hidden sm:flex flex-col space-y-1 font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#0A0A0A]">
            <a href="#practices" className="hover:text-[#5F1358] transition py-0.5" data-cursor="link" data-cursor-label="практики">
              Практики
            </a>
            <a href="#manifesto" className="hover:text-[#5F1358] transition py-0.5" data-cursor="link" data-cursor-label="подход">
              Подход
            </a>
            <a href="#partners" className="hover:text-[#5F1358] transition py-0.5" data-cursor="link" data-cursor-label="партнеры">
              Партнеры
            </a>
            <a href="#contact" className="hover:text-[#5F1358] transition py-0.5" data-cursor="link" data-cursor-label="контакты">
              Контакты
            </a>
          </nav>

          {/* noth.in 4-dot menu icon */}
          <div className="pt-1 flex flex-col gap-1 cursor-pointer active:scale-90 transition-transform" onClick={onOpenConsultation}>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] rounded-xs" />
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] rounded-xs" />
            </div>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] rounded-xs" />
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] rounded-xs" />
            </div>
          </div>
        </div>

      </header>

      {/* Centerpiece: Massive Screen-Spanning Monumental Lettering (N S P) */}
      <div className="relative z-10 my-auto w-full flex flex-col items-center justify-center py-4 sm:py-8">
        <div className="w-full flex items-center justify-center text-center select-none font-sans font-black tracking-tighter leading-none text-[#0A0A0A]">
          
          {/* Letter N */}
          <div 
            onClick={() => handleLetterClick('N')}
            onMouseEnter={() => setActiveLetter('N')}
            onMouseLeave={() => setActiveLetter(null)}
            className={`flex-1 text-[21vw] sm:text-[24vw] md:text-[26vw] transition-all duration-300 transform cursor-pointer active:scale-95 ${
              activeLetter === 'N' ? 'text-[#5F1358] -translate-y-2' : 'hover:text-[#5F1358] hover:-translate-y-2'
            }`}
            data-cursor="explore"
            data-cursor-label="некторов"
          >
            N
          </div>

          {/* Letter S */}
          <div 
            onClick={() => handleLetterClick('S')}
            onMouseEnter={() => setActiveLetter('S')}
            onMouseLeave={() => setActiveLetter(null)}
            className={`flex-1 text-[21vw] sm:text-[24vw] md:text-[26vw] transition-all duration-300 transform cursor-pointer active:scale-95 ${
              activeLetter === 'S' ? 'text-[#5F1358] -translate-y-2' : 'hover:text-[#5F1358] hover:-translate-y-2'
            }`}
            data-cursor="explore"
            data-cursor-label="савельев"
          >
            S
          </div>

          {/* Letter P */}
          <div 
            onClick={() => handleLetterClick('P')}
            onMouseEnter={() => setActiveLetter('P')}
            onMouseLeave={() => setActiveLetter(null)}
            className={`flex-1 text-[21vw] sm:text-[24vw] md:text-[26vw] transition-all duration-300 transform cursor-pointer active:scale-95 ${
              activeLetter === 'P' ? 'text-[#5F1358] -translate-y-2' : 'hover:text-[#5F1358] hover:-translate-y-2'
            }`}
            data-cursor="explore"
            data-cursor-label="партнеры"
          >
            P
          </div>

          {/* Apostrophe ’ in noth.in signature style */}
          <div 
            onClick={() => handleLetterClick('apostrophe')}
            className={`text-[14vw] sm:text-[16vw] font-serif -ml-2 sm:-ml-8 -mt-8 sm:-mt-24 text-[#5F1358] transition-transform duration-300 hover:rotate-12 cursor-pointer flex-shrink-0 active:scale-90 ${
              activeLetter === 'apostrophe' ? 'rotate-12 scale-110' : ''
            }`}
            data-cursor="action"
            data-cursor-label="с 2006"
          >
            ’
          </div>

        </div>

        {/* Dynamic Minimalist Letter Indicator on Hover / Tap */}
        <div className="min-h-5 font-mono text-[10px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#5F1358] font-semibold text-center mt-2 transition-all duration-200">
          {activeLetter === 'N' && '[ Александр Некторов • Управляющий партнер ]'}
          {activeLetter === 'S' && '[ Михаил Савельев • Партнер, M&A и корпоративное право ]'}
          {activeLetter === 'P' && '[ Партнеры и адвокаты • С 2006 года ]'}
          {activeLetter === 'apostrophe' && '[ Бюро основано в 2006 году • Москва-Сити ]'}
        </div>
      </div>

      {/* Bottom Footer Row (Exact noth.in positioning) */}
      <footer className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-mono text-[10px] sm:text-[12px] font-medium text-[#0A0A0A] text-center sm:text-left">
        
        {/* Bottom Left: Location */}
        <div>
          Адвокатское бюро в Москве и глобальных хабах
        </div>

        {/* Bottom Right: Links */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="https://t.me/nsplaw" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[#5F1358] uppercase tracking-wider transition"
            data-cursor="link"
            data-cursor-label="telegram"
          >
            Telegram
          </a>
          <span className="text-black/30">/</span>
          <a 
            href="#manifesto" 
            className="hover:text-[#5F1358] uppercase tracking-wider transition"
            data-cursor="link"
            data-cursor-label="аналитика"
          >
            Аналитика
          </a>
          <span className="text-black/30">/</span>
          <span className="text-slate-500 uppercase tracking-wider">
            Москва, Сити
          </span>
        </div>

      </footer>

    </section>
  )
}

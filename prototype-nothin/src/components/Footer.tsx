import { ArrowRight } from 'lucide-react'

interface FooterProps {
  onOpenConsultation: () => void
}

export function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer id="contact" className="relative w-full bg-[#FFFFFF] border-t border-hairline pt-20 pb-16 px-6 sm:px-12 md:px-16 font-mono text-xs text-slate-600">
      <div className="max-w-7xl mx-auto">
        
        {/* Giant Brutalist Invitation Row */}
        <div className="py-16 sm:py-24 border-b border-hairline flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F1358] mb-4 font-semibold">
              [ DIRECT MANDATE ]
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A]">
              Ready to challenge the outcome?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
            <button 
              onClick={onOpenConsultation}
              className="btn-nothin"
              data-cursor="action"
              data-cursor-label="book"
            >
              <span>Schedule partner briefing</span>
              <ArrowRight className="w-4 h-4 arrow-icon" />
            </button>
            <a 
              href="https://t.me/nsplaw" 
              target="_blank" 
              rel="noreferrer"
              className="btn-nothin-outline"
              data-cursor="link"
              data-cursor-label="telegram"
            >
              <span>telegram @nsplaw</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>

        {/* Global Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-hairline font-mono text-xs">
          <div>
            <div className="text-[#0A0A0A] font-sans font-bold uppercase tracking-wider mb-2">Moscow HQ</div>
            <p className="leading-relaxed text-slate-500">
              Federation Tower East, 45th Fl.<br />
              Presnenskaya Nab. 12<br />
              +7 (495) 646-81-76
            </p>
          </div>

          <div>
            <div className="text-[#0A0A0A] font-sans font-bold uppercase tracking-wider mb-2">Middle East</div>
            <p className="leading-relaxed text-slate-500">
              DIFC Gate Precinct 4<br />
              Dubai, United Arab Emirates<br />
              dubai@nsplaw.com
            </p>
          </div>

          <div>
            <div className="text-[#0A0A0A] font-sans font-bold uppercase tracking-wider mb-2">Asia Pacific</div>
            <p className="leading-relaxed text-slate-500">
              Two Exchange Square, Central<br />
              Hong Kong SAR<br />
              asia@nsplaw.com
            </p>
          </div>

          <div>
            <div className="text-[#0A0A0A] font-sans font-bold uppercase tracking-wider mb-2">Ethics & Confidentiality</div>
            <p className="leading-relaxed text-slate-400 text-[11px]">
              Law practice compliant with Federal Law 63-FZ. Strict attorney-client privilege.
            </p>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2006—2026 Advocate Bureau Nektorov, Saveliev & Partners.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#5F1358] transition">Terms of Engagement</a>
            <span>•</span>
            <a href="#" className="hover:text-[#5F1358] transition">Privacy Policy</a>
            <span>•</span>
            <a href="https://t.me/nsplaw" target="_blank" rel="noreferrer" className="hover:text-[#5F1358] transition">Telegram Channel</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

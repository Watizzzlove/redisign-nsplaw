import { useState } from 'react'
import { SmoothCursor } from './components/SmoothCursor'
import { InteractiveHero } from './components/InteractiveHero'
import { WorksList } from './components/WorksList'
import { PhilosophySection } from './components/PhilosophySection'
import { PeopleRoster } from './components/PeopleRoster'
import { Footer } from './components/Footer'
import { ConsultationModal } from './components/ConsultationModal'

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans relative selection:bg-[#5F1358] selection:text-white">
      {/* Signature noth.in physics smooth cursor */}
      <SmoothCursor />

      {/* Main Page Content */}
      <main className="relative z-10">
        <InteractiveHero onOpenConsultation={() => setIsModalOpen(true)} />
        <WorksList />
        <PhilosophySection />
        <PeopleRoster />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => setIsModalOpen(true)} />

      {/* Confidential Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

export default App

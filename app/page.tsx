import HeroSection from "@/components/hero-section"
import NumbersSection from "@/components/numbers-section"
import HistorySection from "@/components/history-section"
import LocationSection from "@/components/location-section"
import TestimonialsSection from "@/components/testimonials-section"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="sobre-nos">
        <NumbersSection />
        <HistorySection />
      </div>
      <div id="programas">
        <LocationSection />
      </div>
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <div id="equipe">
        <TeamSection />
      </div>
      <div id="contato">
        <Footer />
      </div>
    </main>
  )
}

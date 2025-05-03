import DownloadSection from "@/components/download-section/DownloadSection"
import FeaturesSection from "@/components/features-section/FeaturesSection"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import Stepper from "@/components/stepper/Stepper"
import Testimonials from "@/components/testimonial-section/Testimonials"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <Stepper />
        <Testimonials />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  )
}

import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Calculator from '@/components/Calculator'
import Testimonials from '@/components/Testimonials'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Calculator />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}

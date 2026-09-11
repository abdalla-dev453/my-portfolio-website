import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import Writing from './components/Writing';
import ThemeToggle from './components/ThemeToggle';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      <Navbar />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Pricing />
        <SocialProof />
        <Testimonials />
        <Writing />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+254112898506" initialMessage="Hello Msema, I'd like to discuss a project." />
      <ThemeToggle />
    </div>
  );
}

export default App;

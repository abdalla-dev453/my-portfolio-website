import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import Writing from './components/Writing';
import ThemeToggle from './components/ThemeToggle';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import NotFound from './components/NotFound';
import { siteConfig } from './data/site';

function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const isHome = window.location.pathname === `${basePath}/` || window.location.pathname === basePath;

  if (!isHome) return <NotFound />;

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      <Navbar />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Process />
        <Skills />
        <Projects />
        <Pricing />
        <FAQ />
        <SocialProof />
        <Testimonials />
        <Writing />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber={siteConfig.phone} initialMessage="Hello Msema, I'd like to discuss a project." />
      <ThemeToggle />
    </div>
  );
}

export default App;

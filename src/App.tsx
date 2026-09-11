import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import ProfessionalProfile from './components/ProfessionalProfile';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Achievements />
        <Certifications />
        <ProfessionalProfile />
        <WhyWorkWithMe />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+254112898506" initialMessage="Hello Msema, I'd like to discuss a project." />
    </div>
  );
}

export default App;

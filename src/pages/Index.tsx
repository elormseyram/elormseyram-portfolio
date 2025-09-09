import Hero from '@/components/Hero';
import About from '@/components/About';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Profile />
      <About />
      <Projects />
      <Process />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

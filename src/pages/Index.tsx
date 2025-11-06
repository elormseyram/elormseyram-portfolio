import Hero from '@/components/Hero';
import About from '@/components/About';
import RolePlanets from '@/components/RolePlanets';
import StatsConstellation from '@/components/StatsConstellation';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import TechStackRings from '@/components/TechStackRings';
import AboutPanel from '@/components/AboutPanel';
import ProgressIndicator from '@/components/ProgressIndicator';
import Hobbies from '@/components/Hobbies';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative-content">
      <Navigation />
      <ProgressIndicator />
      <div id="hero"><Hero /></div>
      <div id="planets"><RolePlanets /></div>
      <div id="stats"><StatsConstellation /></div>
      <div id="projects"><ProjectsShowcase /></div>
      <div id="tech"><TechStackRings /></div>
      <div id="about"><AboutPanel /></div>
      <Hobbies />
      <Footer />
    </div>
  );
};

export default Index;

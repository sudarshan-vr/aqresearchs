import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import HomeContactCta from '../components/HomeContactCta';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Steps />
      <Testimonials />
      <Portfolio />
      <Team preview={true} />
      <HomeContactCta />
    </main>
  );
}

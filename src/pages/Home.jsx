import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Services from '../components/Services';
import Interviews from '../components/Interviews';
import Media from '../components/Media';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Logos />
      <Services />
      <Interviews />
      <Media />
    </div>
  );
}

export default Home;

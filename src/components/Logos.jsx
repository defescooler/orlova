import LogoCarousel from './LogoCarousel';

const clientLogos = [
  {
    id: 1,
    name: 'Avon',
    image: '/logos/avon.svg'
  },
  {
    id: 2,
    name: 'Freedom Broker',
    image: '/logos/freedombroker.svg'
  },
  {
    id: 3,
    name: 'Kaspi',
    image: '/logos/kaspi.svg'
  },
  {
    id: 4,
    name: 'KPMG',
    image: '/logos/kpmg.svg'
  },
  {
    id: 5,
    name: 'Mars',
    image: '/logos/mars.svg'
  },
  {
    id: 6,
    name: 'Procter & Gamble',
    image: '/logos/proctergamble.svg'
  },
  {
    id: 7,
    name: 'UNDP',
    image: '/logos/undp.svg'
  }
];

function Logos() {
  return (
    <section className="logos clients-section">
      <LogoCarousel items={clientLogos} />
    </section>
  );
}

export default Logos;

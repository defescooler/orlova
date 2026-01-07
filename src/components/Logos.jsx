import './Logos.css';

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
      <div className="logos-carousel-wrapper">
        <div className="logos-carousel">
          <div className="logos-track">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="logo-item">
                <img src={logo.image} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logos;

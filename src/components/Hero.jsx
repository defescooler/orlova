import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-image">
          <img src="/almira5.jpg" alt="Альмира Орлова" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Нутрициолог Альмира Орлова</h1>
          <p className="hero-description">
            Закончила КазГЮУ им. Нарикбаева по предпринимательскому праву и после 5 лет успешной карьеры юриста поменяла профессию на работу в общепите, а затем стала дипломированным нутрициологом (факультет «Функциональная нутрицология» УОМ РФ).
          </p>
          <p className="hero-description">
            <strong>15 лет опыта</strong> в сфере здорового питания: руководила первым проектом по здоровому питанию при фитнес-центре World Class (первая программа доставки здорового питания в Казахстане), основала первую онлайн-школу в 2017 году по женскому и детскому здоровью «Счастье есть».
          </p>
          <p className="hero-description">
            <strong>10 лет</strong> работаю консультантом и разработчиком меню для садиков и школ в Казахстане и Узбекистане (более 15 000 детей). Основатель производства продуктов здорового питания и первой живой комбучи в Казахстане — бренд{' '}
            <a href="https://www.instagram.com/ragout_kz/" target="_blank" rel="noopener noreferrer" className="ragout-link">
              <strong>Ragout</strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ragout-icon" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>.
          </p>
          <p className="hero-description">
            Консультант по питанию для корпоративного сектора. Мама трёх детей. Мне важно, чтобы питание было понятным, доступным и поддерживало жизнь, а не усложняло её.
          </p>
          <button className="hero-cta">Записаться на индивидуальную консультацию</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

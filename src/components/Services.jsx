import { Link } from 'react-router-dom';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Индивидуальные консультации',
    description: 'Персональный подход к вашему здоровью и питанию. Работаю с женщинами, семьями и детьми — помогаю наладить питание спокойно, бережно и без крайностей.',
    link: '/individual-consultations'
  },
  {
    id: 2,
    title: 'Сопровождение садиков и школ',
    description: 'Комплексные программы здорового питания для образовательных учреждений. Создание меню, обучение персонала, работа с родителями.',
    link: '/school-support'
  }
];

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <h2>Услуги</h2>
        <p className="services-intro">
          Питание напрямую влияет на здоровье, энергию и качество жизни — у взрослых и у детей. Осознанный рацион с акцентом на цельные продукты и устойчивые привычки помогает поддерживать концентрацию, иммунитет и общее самочувствие.
          Я помогаю внедрять практичные и понятные решения: от индивидуальных рекомендаций для семьи до систем питания для школ и детских садов с учётом норм и реальных потребностей.
        </p>
        <div className="services-grid">
          {servicesData.map(service => (
            <Link key={service.id} to={service.link} className="service-card-link">
              <div className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-cta">Подробнее →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

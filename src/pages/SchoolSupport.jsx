import { ClipboardList, ChefHat, GraduationCap, BarChart3, Users, BookOpen } from 'lucide-react';
import LogoCarousel from '../components/LogoCarousel';
import './SchoolSupport.css';

const schoolLogos = [
  { id: 'alma', name: 'Alma School', image: '/schools/almaschool.svg' },
  { id: 'silicon', name: 'Silicon Steppe School', image: '/schools/siliconsteppe.svg' },
  { id: 'lakeview', name: 'Lakeview School Almaty', image: '/schools/lakeview.png' },
  { id: 'nurorda', name: 'Nurorda', image: '/schools/nurorda.png' },
  { id: 'kemel', text: 'Kemel', className: 'logo-item--kemel' },
  { id: 'tamos', name: 'Tamos Education', image: '/schools/tamos.svg' },
  {
    id: 'zerdesh',
    title: 'Zerdesh',
    subtitle: 'Детский сад',
    titleClassName: 'school-name-large',
    subtitleClassName: 'school-label',
    className: 'logo-item--stack'
  }
];

function SchoolSupport() {
  return (
    <div className="service-page school-page">
      <section className="service-hero school-hero">
        <div className="school-hero-background">
          <div className="photo-grid">
            <div className="photo-item"><img src="/schools/school_menu1.jpeg" alt="Школьное меню" /></div>
            <div className="photo-item"><img src="/schools/school_menu2.jpeg" alt="Школьное меню" /></div>
            <div className="photo-item"><img src="/schools/school_menu3.jpeg" alt="Школьное меню" /></div>
            <div className="photo-item"><img src="/schools/school_menu4.jpeg" alt="Школьное меню" /></div>
            <div className="photo-item"><img src="/schools/school_menu5.jpeg" alt="Школьное меню" /></div>
          </div>
          <div className="photo-overlay"></div>
        </div>
        <div className="service-hero-container">
          <h1>Сопровождение садиков и школ</h1>
          <p className="service-tagline">
            Комплексные программы здорового питания для образовательных учреждений
          </p>
        </div>
      </section>

      <section className="service-content">
        <div className="service-container">
          <div className="content-section schools-section schools-section--carousel">
            <div className="schools-carousel">
              <LogoCarousel items={schoolLogos} wrapperClassName="schools-carousel-wrapper" />
            </div>
          </div>

          <div className="content-section school-narrative-section">
            <div className="narrative-stats-row">
              <div className="narrative-stat">
                <span className="narrative-stat-num">1 из 5</span>
                <span className="narrative-stat-label">детей в Казахстане имеет избыточный вес или ожирение</span>
                <a href="https://doi.org/10.1002/osp4.70024" target="_blank" rel="noopener noreferrer" className="stat-source-link">
                  <span className="stat-source-text">
                    Abdrakhmanova et al. · Obesity Science &amp; Practice, 2024
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </span>
                  <span className="stat-source-logos">
                    <img src="/media/logo-1-150x150.png" alt="НЦОЗ РК" className="stat-source-logo" />
                    <img src="/media/World_Health_Organization_Logo.svg.png" alt="ВОЗ" className="stat-source-logo" />
                  </span>
                </a>
              </div>
              <div className="narrative-stat">
                <span className="narrative-stat-num">5 400+</span>
                <span className="narrative-stat-label">детей и подростков живут с диабетом 1-го типа в Казахстане</span>
                <a href="https://doi.org/10.29333/ejgm/13663" target="_blank" rel="noopener noreferrer" className="stat-source-link">
                  <span className="stat-source-text">
                    Galiyeva et al. · EJGM, 2023
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </span>
                  <span className="stat-source-logos">
                    <img src="/media/NU_horizontal_1.png" alt="Nazarbayev University" className="stat-source-logo stat-source-logo--lg" />
                  </span>
                </a>
              </div>
              <div className="narrative-stat">
                <span className="narrative-stat-num">×3,5</span>
                <span className="narrative-stat-label">за 7 лет выросла распространённость СД1 среди детей (2014–2021)</span>
                <a href="https://doi.org/10.29333/ejgm/13663" target="_blank" rel="noopener noreferrer" className="stat-source-link">
                  <span className="stat-source-text">
                    Galiyeva et al. · EJGM, 2023
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </span>
                  <span className="stat-source-logos">
                    <img src="/media/NU_horizontal_1.png" alt="Nazarbayev University" className="stat-source-logo stat-source-logo--lg" />
                  </span>
                </a>
              </div>
            </div>

            <div className="narrative-body">
              <p>Каждый пятый ребёнок в Казахстане уже сегодня имеет избыточный вес или ожирение. Параллельно растёт число детей с диабетом — болезнью, которая ещё недавно считалась взрослой.</p>
              <p>Школьная столовая с больным питанием — это не только еда. Это привычки на всю жизнь: есть быстро, невкусно, неправильно. Именно это ребёнок заберёт во взрослую жизнь.</p>
              <p>В Казахстане не хватает педиатров, хороших поваров, детских нутрициологов. Во многих школах нет диетсестёр, а контроль питания существует только на бумаге. Продукты дорожают, и биться за себестоимость становится всё сложнее.</p>
            </div>

          </div>

          <div className="school-transition">
            <p className="school-transition-text">
              Я знаю эту систему изнутри — с её бюджетными ограничениями, нехваткой персонала и инертностью. И знаю, как в ней всё-таки сделать нормальное детское питание. Именно поэтому я работаю со школами и садами уже 10 лет.
            </p>
            <p className="school-transition-sub">
              Вот как это выглядит на практике.
            </p>
          </div>

          <div className="content-section instagram-grid-section">
            <div className="school-instagram-grid">
              <div className="school-instagram-post">
                <iframe
                  src="https://www.instagram.com/p/DUiBDXMDLpr/embed/"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title="Пост 1"
                ></iframe>
              </div>
              <div className="school-instagram-post">
                <iframe
                  src="https://www.instagram.com/p/DUiE3z6jLZM/embed/"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title="Пост 2"
                ></iframe>
              </div>
              <div className="school-instagram-post">
                <iframe
                  src="https://www.instagram.com/p/DUUcv1-DJaC/embed/"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title="Пост 3"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Что входит в программу</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="icon"><ClipboardList size={36} strokeWidth={1.5} /></div>
                <h3>Аудит меню</h3>
                <p>Анализ текущего меню на соответствие нормам питания, выявление дефицитов и избытков</p>
              </div>
              <div className="service-card">
                <div className="icon"><ChefHat size={36} strokeWidth={1.5} /></div>
                <h3>Разработка меню</h3>
                <p>Создание сбалансированного меню с учётом возраста детей, сезонности и бюджета</p>
              </div>
              <div className="service-card">
                <div className="icon"><GraduationCap size={36} strokeWidth={1.5} /></div>
                <h3>Обучение персонала</h3>
                <p>Тренинги для поваров и воспитателей по принципам здорового питания</p>
              </div>
              <div className="service-card">
                <div className="icon"><BarChart3 size={36} strokeWidth={1.5} /></div>
                <h3>Мониторинг</h3>
                <p>Регулярная оценка внедрения программы и корректировка по необходимости</p>
              </div>
              <div className="service-card">
                <div className="icon"><Users size={36} strokeWidth={1.5} /></div>
                <h3>Работа с родителями</h3>
                <p>Лекции и материалы для родителей о питании детей</p>
              </div>
              <div className="service-card">
                <div className="icon"><BookOpen size={36} strokeWidth={1.5} /></div>
                <h3>Образовательные материалы</h3>
                <p>Урок «Час здоровья» для детей, инструкция для персонала, оформление столовой</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Как происходит разработка</h2>
            <p className="process-subtitle">Родители + Команда школы + Нутрициолог</p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3>Обсуждение</h3>
                  <p>План работы и предложения по меню</p>
                  <span className="timeline-duration">Договор • 70% оплаты</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>Создание меню</h3>
                  <p>Меню с тех. картами и расчетом БЖУ</p>
                  <span className="timeline-duration">2 недели</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>Тестирование</h3>
                  <p>Дегустация и корректировка</p>
                  <span className="timeline-duration">1 месяц</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">4</div>
                <div className="timeline-content">
                  <h3>Обучение</h3>
                  <p>Вебинар с родителями и обучение персонала</p>
                  <span className="timeline-duration">30% оплаты</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pricing-section">
            <h2>Тарифы</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Базовый</h3>
                <div className="price">450 000 ₸</div>
                <p className="pricing-description">60 рецептов с тех. картами + меню на 4 недели</p>
                <div className="pricing-highlight">Оплата 450 000₸ в течение 10 дней</div>
              </div>
              <div className="pricing-card featured">
                <div className="featured-badge">Рекомендуем</div>
                <h3>Полный</h3>
                <div className="price">1 000 000 ₸</div>
                <p className="pricing-description">Все из базового + обучение персонала + вебинар с родителями + годовое сопровождение</p>
                <div className="pricing-highlight">Оплата 700 000₸ + 300 000₸ после обучения</div>
              </div>
            </div>
            <p className="pricing-note">Все пакеты включают технологические карты с расчетом БЖУ, материалы для родителей и персонала</p>
          </div>

          <div className="content-section contact-info-section">
            <h2>Связаться со мной</h2>
            <p className="contact-description">
              Заинтересованы в сотрудничестве? Свяжитесь со мной для обсуждения деталей и возможностей работы.
            </p>
            <div className="contact-details">
              <a href="https://instagram.com/almira_life" target="_blank" rel="noopener noreferrer" className="contact-link">
                @almira_life
              </a>
              <a href="tel:+77027758888" className="contact-link">
                +7 (702) 775-88-88
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default SchoolSupport;

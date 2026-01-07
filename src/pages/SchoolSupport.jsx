import './SchoolSupport.css';

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
          <div className="content-section intro-section">
            <div className="intro-header">
              <h2>Альмира Орлова</h2>
              <p className="credentials">Дипломированный нутрициолог • Стаж 12 лет</p>
            </div>
            <p>
              Здравствуйте! Спасибо огромное за интерес к здоровому питанию и готовность улучшить рацион в Вашем учреждении.
            </p>
            <p>
              Здоровье человека на 80% зависит от питания. Поскольку 70% съедаемой пищи приходится на питание в школе или детском саду, утвержденный рацион заведения определяет продолжительность и качество жизни детей.
            </p>
          </div>

          <div className="content-section highlight-section">
            <h2>Почему это важно?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Улучшение успеваемости</h3>
                <p>Сокращение простых углеводов позволяет снизить скачки сахара в крови, улучшить внимание и усидчивость детей</p>
              </div>
              <div className="benefit-card">
                <h3>Укрепление иммунитета</h3>
                <p>Правильное питание повышает иммунный ответ на вирусную и бактериальную нагрузку</p>
              </div>
              <div className="benefit-card">
                <h3>Улучшение пищеварения</h3>
                <p>Исключение жирной переработанной еды и увеличение цельных продуктов улучшает работу всех систем организма</p>
              </div>
              <div className="benefit-card">
                <h3>Рост популярности</h3>
                <p>Популярность детских садов и школ со здоровым питанием растет с невероятной скоростью</p>
              </div>
            </div>
            <p className="important-note">
              Всемирная организация здравоохранения настоятельно рекомендует сокращать потребление сахара, увеличивать в рационе цельные продукты, источники клетчатки и потребление воды.
            </p>
          </div>

          <div className="content-section">
            <h2>Что входит в программу</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="icon">📋</div>
                <h3>Аудит меню</h3>
                <p>Анализ текущего меню на соответствие нормам питания, выявление дефицитов и избытков</p>
              </div>
              <div className="service-card">
                <div className="icon">🍽️</div>
                <h3>Разработка меню</h3>
                <p>Создание сбалансированного меню с учётом возраста детей, сезонности и бюджета</p>
              </div>
              <div className="service-card">
                <div className="icon">👨‍🍳</div>
                <h3>Обучение персонала</h3>
                <p>Тренинги для поваров и воспитателей по принципам здорового питания</p>
              </div>
              <div className="service-card">
                <div className="icon">📊</div>
                <h3>Мониторинг</h3>
                <p>Регулярная оценка внедрения программы и корректировка по необходимости</p>
              </div>
              <div className="service-card">
                <div className="icon">👪</div>
                <h3>Работа с родителями</h3>
                <p>Лекции и материалы для родителей о питании детей</p>
              </div>
              <div className="service-card">
                <div className="icon">📚</div>
                <h3>Образовательные материалы</h3>
                <p>Разработка материалов для детей о здоровом питании</p>
              </div>
            </div>
          </div>

          <div className="content-section highlight-section">
            <h2>Для кого</h2>
            <div className="audience-grid">
              <div className="audience-card">
                <h3>Частные детские сады</h3>
                <p>Хотите выделиться качественным питанием и привлечь осознанных родителей</p>
              </div>
              <div className="audience-card">
                <h3>Школы</h3>
                <p>Нужно улучшить систему питания и повысить удовлетворённость учеников</p>
              </div>
              <div className="audience-card">
                <h3>Образовательные центры</h3>
                <p>Ищете комплексный подход к здоровью и питанию детей</p>
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

          <div className="content-section additional-materials">
            <h2>Дополнительные материалы</h2>
            <ul className="materials-list">
              <li>Урок «Час здоровья» для детей</li>
              <li>Инструкция для персонала</li>
              <li>Оформление столовой</li>
              <li>Меню и методичка для родителей</li>
            </ul>
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

          <div className="content-section schools-section">
            <h2>Школы и детские сады, внедрившие наше меню</h2>
            <div className="schools-grid">
              <div className="school-logo-item">
                <img src="/schools/almaschool.svg" alt="Alma School" />
              </div>
              <div className="school-logo-item">
                <img src="/schools/siliconsteppe.svg" alt="Silicon Steppe School" />
              </div>
              <div className="school-logo-item">
                <img src="/schools/lakeview.png" alt="Lakeview School" />
              </div>
              <div className="school-logo-item">
                <img src="/schools/nurorda.png" alt="Nurorda" />
              </div>
              <div className="school-logo-item">
                <img src="/schools/kemel.png" alt="Kemel" />
              </div>
              <div className="school-logo-item">
                <img src="/schools/tamos.svg" alt="Tamos Education" />
              </div>
              <div className="school-logo-item">
                <img src="/schools/zerdesh.jpeg" alt="Zerdesh" />
              </div>
            </div>
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

          <div className="content-section faq-section">
            <h2>Частые вопросы</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Сколько стоит программа?</h3>
                <p>Стоимость зависит от масштаба учреждения и объёма работ. Свяжитесь со мной для индивидуального расчёта.</p>
              </div>
              <div className="faq-item">
                <h3>Как долго внедряется программа?</h3>
                <p>От первой встречи до полного внедрения обычно проходит 2-3 месяца. Поддержка может быть долгосрочной.</p>
              </div>
              <div className="faq-item">
                <h3>Работаете ли вы с государственными учреждениями?</h3>
                <p>Да, у меня есть опыт работы как с частными, так и с государственными образовательными учреждениями.</p>
              </div>
              <div className="faq-item">
                <h3>Нужны ли дополнительные инвестиции в оборудование?</h3>
                <p>Обычно работаем с имеющимся оборудованием. Если нужны изменения, обсуждаем это на этапе диагностики.</p>
              </div>
              <div className="faq-item">
                <h3>Можете ли вы помочь с сертификацией?</h3>
                <p>Да, помогаю с подготовкой документации и прохождением проверок контролирующих органов.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SchoolSupport;

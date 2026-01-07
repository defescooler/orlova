import './IndividualConsultations.css';

function IndividualConsultations() {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-background"></div>
        <div className="service-hero-container">
          <div className="service-hero-content">
            <h1>Индивидуальные консультации</h1>
            <p className="service-tagline">
              Персональный подход к вашему здоровью и питанию
            </p>
            <p className="service-subtitle">
              Работаю с женщинами, семьями и детьми — помогаю наладить питание спокойно, бережно и без крайностей
            </p>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="service-container">
          <div className="about-with-review-section">
            <div className="about-content">
              <h2>Почему это важно?</h2>
              <p>
                <strong>Здоровье человека на 80% зависит от питания.</strong> Это значит, что выбор, например, в пользу омлета с цветной капустой вместо рисовой или манной каши на завтрак, может помочь вам и вашим детям прожить более долгую и здоровую жизнь, а также реализовать свой потенциал. Представляете!
              </p>
              <p>
                Снижение количества простых углеводов в рационе позволяет избежать резких скачков сахара в крови, что улучшает внимание, усидчивость и, в конечном итоге, укрепляет здоровье.
              </p>
              <p>
                Исключение жирной и переработанной пищи, а также увеличение доли цельных продуктов улучшает пищеварение, повышает иммунитет и уровень энергии.
              </p>
              <p>
                Всемирная организация здравоохранения настоятельно рекомендует сократить потребление сахара, увеличить количество клетчатки в рационе и пить больше воды, избегать напитков, содержащих кофеин, цельное молоко и сахар.
              </p>
              <p>
                Я с удовольствием помогу вам разработать новый режим питания и предложу вкусные, доступные рецепты, которые легко приготовить!
              </p>
            </div>
            <div className="review-video-side">
              <video
                className="review-video"
                src="/reviews/review1.mp4"
                controls
                playsInline
              >
                Ваш браузер не поддерживает видео.
              </video>
              <p className="review-caption">
                Жасмин из Лондона, которая прошла курс консультаций улучшив свое питание
              </p>
            </div>
          </div>

          <div className="content-section">
            <h2>Что включает консультация</h2>
            <ul className="service-list">
              <li>Видео-консультация 60 минут</li>
              <li>Анализ результатов и рациона</li>
              <li>Персональные рекомендации</li>
              <li>Меню на неделю с рецептами</li>
              <li>Продуктовая корзина</li>
              <li>Поддержка по WhatsApp</li>
            </ul>
          </div>

          <div className="content-section highlight-section">
            <h2>Кому подойдёт</h2>
            <div className="cards-grid">
              <div className="info-card">
                <h3>Женщинам</h3>
                <p>Которые хотят наладить питание, улучшить самочувствие и энергию</p>
              </div>
              <div className="info-card">
                <h3>Семьям</h3>
                <p>Которые ищут баланс между вкусной и полезной едой для всех</p>
              </div>
              <div className="info-card">
                <h3>Мамам</h3>
                <p>Которые хотят организовать здоровое питание для детей без стресса</p>
              </div>
              <div className="info-card">
                <h3>Тем, кто устал от диет</h3>
                <p>И хочет найти устойчивый подход к питанию</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Как проходит консультация?</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Подготовка</h3>
                <p>Отправляете фото приёмов пищи за 3 дня и заполняете анкету</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Встреча 60 минут</h3>
                <p>Онлайн-консультация: обсуждаем цели и анализируем рацион</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Резюме и меню</h3>
                <p>Получаете письменные рекомендации и персональное меню с рецептами</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <h3>Поддержка</h3>
                <p>Ответы на вопросы по WhatsApp в течение выбранного периода</p>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h2>Результаты клиентов</h2>
            <div className="results-grid">
              <div className="result-placeholder">
                <div className="placeholder-box">
                  <span>📊 До и после: показатели здоровья</span>
                </div>
              </div>
              <div className="result-placeholder">
                <div className="placeholder-box">
                  <span>💬 Отзывы клиентов</span>
                </div>
              </div>
              <div className="result-placeholder">
                <div className="placeholder-box">
                  <span>📈 Примеры планов питания</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Записаться на консультацию</h2>
            <p className="booking-description">
              Выберите удобное время для консультации. После записи я свяжусь с вами для подтверждения и отправлю анкету для заполнения.
            </p>
            <div className="calendly-container">
              <iframe
                src="https://calendly.com/your-calendly-link"
                width="100%"
                height="700"
                frameBorder="0"
                title="Запись на консультацию"
              ></iframe>
            </div>
          </div>

          <div className="content-section pricing-section">
            <h2>Тарифы</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Базовый</h3>
                <div className="price">45 000 ₸</div>
                <p className="pricing-description">1 консультация + меню на неделю</p>
                <div className="pricing-highlight">Поддержка 2 дня</div>
              </div>
              <div className="pricing-card featured">
                <div className="featured-badge">Популярный</div>
                <h3>Стандартный</h3>
                <div className="price">75 000 ₸</div>
                <p className="pricing-description">1 консультация + меню на неделю</p>
                <div className="pricing-highlight">Поддержка 14 дней</div>
              </div>
              <div className="pricing-card">
                <h3>Расширенный</h3>
                <div className="price">150 000 ₸</div>
                <p className="pricing-description">2 консультации + меню на неделю</p>
                <div className="pricing-highlight">Поддержка 30 дней</div>
              </div>
            </div>
            <p className="pricing-note">Все тарифы включают: меню с рецептами, продуктовую корзину, рекомендации и поддержку по WhatsApp</p>
            <p className="contact-info">
              Записаться: <a href="https://wa.me/77027758888">+7 702 775 8888</a> • <a href="https://instagram.com/almira_life">@almira_life</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndividualConsultations;

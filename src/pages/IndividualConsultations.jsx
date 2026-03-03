import { Brain, Zap, Droplets } from 'lucide-react';
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
              <div className="stat-highlight">
                <span className="stat-number">80%</span>
                <span className="stat-text">здоровья зависит от питания — а значит, выбор еды важнее, чем кажется</span>
              </div>
              <div className="insights-list">
                <div className="insight-item">
                  <span className="insight-icon"><Brain size={22} strokeWidth={1.5} /></span>
                  <p>Меньше простых углеводов — меньше скачков сахара, лучше внимание и усидчивость</p>
                </div>
                <div className="insight-item">
                  <span className="insight-icon"><Zap size={22} strokeWidth={1.5} /></span>
                  <p>Цельные продукты вместо переработанных — крепче иммунитет, больше энергии</p>
                </div>
                <div className="insight-item">
                  <span className="insight-icon"><Droplets size={22} strokeWidth={1.5} /></span>
                  <p>ВОЗ рекомендует: больше клетчатки и воды, меньше сахара и кофеина</p>
                </div>
              </div>
              <p className="about-cta-note">Я помогу составить рацион, который подходит именно вам — с вкусными и доступными рецептами.</p>
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
                Жасмин из Лондона, которая прошла курс консультаций улучшив своё питание
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
            <div className="reviews-images-grid">
              <img src="/reviews/rev1.png" alt="Отзыв клиента" />
              <img src="/reviews/rev2.png" alt="Отзыв клиента" />
              <img src="/reviews/rev3.png" alt="Отзыв клиента" />
              <img src="/reviews/rev4.png" alt="Отзыв клиента" />
              <img src="/reviews/rev5.png" alt="Отзыв клиента" />
              <img src="/reviews/rev6.png" alt="Отзыв клиента" />
              <img src="/reviews/rev7.png" alt="Отзыв клиента" />
              <img src="/reviews/rev8.png" alt="Отзыв клиента" />
              <img src="/reviews/rev9.png" alt="Отзыв клиента" />
              <img src="/reviews/rev10.png" alt="Отзыв клиента" />
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

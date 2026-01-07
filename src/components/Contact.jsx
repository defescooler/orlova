import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Контакты</h2>
        <p className="contact-intro">
          Готовы начать свой путь к здоровью? Свяжитесь со мной, чтобы записаться на консультацию
          или задать любые вопросы.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Телефон</h3>
              <a href="tel:+77027758888">+7 702 775 8888</a>
            </div>
          </div>

          <div className="contact-social">
            <h3>Подписывайтесь</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/almira_life/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://api.whatsapp.com/send/?phone=7027758888&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

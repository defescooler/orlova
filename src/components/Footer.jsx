import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-sdg">
            <img src="/sdg_logo.png" alt="Цели устойчивого развития ООН" className="sdg-logo" />
            <div className="sdg-goals">
              <img src="/R-WEB-Goal-02.png" alt="Ликвидация голода" />
              <img src="/R-WEB-Goal-03.png" alt="Хорошее здоровье и благополучие" />
            </div>
          </div>

          <div className="footer-contact">
            <h3>Контакты</h3>
            <div className="contact-links">
              <a href="https://www.instagram.com/almira_life/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://api.whatsapp.com/send/?phone=7027758888&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href="tel:+77027758888">
                +7 702 775 8888
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="business-info">
            <p>БИН / ИИН 780629401719, ИП "Орлова А.Н.", A15D0H5</p>
            <p>Республика Казахстан, г.Алматы</p>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Альмира Орлова. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

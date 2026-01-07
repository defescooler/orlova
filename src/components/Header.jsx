import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/individual-consultations">Индивидуальные консультации</Link>
          <Link to="/school-support">Консультации для школ</Link>
          <Link to="/recipes">Рецепты</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

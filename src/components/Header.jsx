import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Главная</Link>
          <Link to="/individual-consultations" onClick={closeMenu}>Индивидуальные консультации</Link>
          <Link to="/school-support" onClick={closeMenu}>Консультации для школ</Link>
          <Link to="/recipes" onClick={closeMenu}>Рецепты</Link>
        </nav>
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;

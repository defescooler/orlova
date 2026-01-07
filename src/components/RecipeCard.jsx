import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  const dishTypeLabels = {
    'breakfast': 'Завтрак',
    'lunch': 'Обед',
    'dinner': 'Ужин',
    'snack': 'Перекус',
    'dessert': 'Десерт'
  };

  const difficultyLabels = {
    'easy': 'Легко',
    'medium': 'Средне',
    'hard': 'Сложно'
  };

  return (
    <Link to={`/recipes/${recipe.id}`} className="recipe-card">
      <div className="recipe-card-image">
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-card-badges">
          <span className="badge difficulty">{difficultyLabels[recipe.difficulty] || recipe.difficulty}</span>
          <span className="badge dish-type">{dishTypeLabels[recipe.dishType] || recipe.dishType}</span>
        </div>
      </div>
      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="recipe-card-meta">
          <span>⏱ {recipe.prepTime}</span>
          <span>👥 {recipe.servings} порций</span>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;

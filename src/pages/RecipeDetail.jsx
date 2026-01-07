import { useParams, Link } from 'react-router-dom';
import recipesData from '../data/recipes.json';
import './RecipeDetail.css';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === parseInt(id));

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

  if (!recipe) {
    return (
      <div className="recipe-detail-page">
        <div className="recipe-detail-container">
          <div className="not-found">
            <h1>Рецепт не найден</h1>
            <p>Рецепт, который вы ищете, не существует.</p>
            <Link to="/recipes" className="back-link">← Назад к рецептам</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-detail-page">
      <div className="recipe-detail-container">
        <Link to="/recipes" className="back-link">← Назад к рецептам</Link>

        <div className="recipe-detail-header">
          <div className="recipe-detail-image">
            <img src={recipe.image} alt={recipe.title} />
          </div>
          <div className="recipe-detail-info">
            <h1>{recipe.title}</h1>
            <p className="recipe-description">{recipe.description}</p>

            <div className="recipe-meta-grid">
              <div className="meta-item">
                <span className="meta-label">Время приготовления</span>
                <span className="meta-value">{recipe.prepTime}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Порций</span>
                <span className="meta-value">{recipe.servings}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Тип блюда</span>
                <span className="meta-value">{dishTypeLabels[recipe.dishType] || recipe.dishType}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Сложность</span>
                <span className="meta-value">{difficultyLabels[recipe.difficulty] || recipe.difficulty}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="recipe-detail-content">
          <div className="ingredients-section">
            <h2>Ингредиенты</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="instructions-section">
            <h2>Приготовление</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>

        {recipe.notes && (
          <div className="recipe-notes">
            <h3>Заметки и советы</h3>
            <p>{recipe.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeDetail;

import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import recipesData from '../data/recipes.json';
import './Recipes.css';

function Recipes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const filteredRecipes = recipesData.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || recipe.dishType === filterType;
    const matchesDifficulty = filterDifficulty === 'all' || recipe.difficulty === filterDifficulty;

    return matchesSearch && matchesType && matchesDifficulty;
  });

  const dishTypes = ['all', ...new Set(recipesData.map(r => r.dishType))];
  const difficulties = ['all', 'easy', 'medium', 'hard'];

  const dishTypeLabels = {
    'all': 'Все типы',
    'breakfast': 'Завтрак',
    'lunch': 'Обед',
    'dinner': 'Ужин',
    'snack': 'Перекус',
    'dessert': 'Десерт'
  };

  const difficultyLabels = {
    'all': 'Все уровни',
    'easy': 'Легко',
    'medium': 'Средне',
    'hard': 'Сложно'
  };

  return (
    <div className="recipes-page">
      <div className="recipes-container">
        <div className="recipes-header">
          <h1>Рецепты</h1>
          <p>Я создала эти рецепты, чтобы показать, что здоровое питание может быть вкусным и доступным. Каждое блюдо проверено на практике и адаптировано для современного ритма жизни. Здесь вы найдёте простые решения для завтраков, обедов и ужинов, которые поддержат ваше здоровье и не отнимут много времени.</p>
        </div>

        <div className="recipes-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Поиск рецептов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Тип блюда:</label>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              {dishTypes.map(type => (
                <option key={type} value={type}>
                  {dishTypeLabels[type] || type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Сложность:</label>
            <select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)}>
              {difficulties.map(diff => (
                <option key={diff} value={diff}>
                  {difficultyLabels[diff]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="no-results">
            <p>Рецепты не найдены. Попробуйте изменить фильтры.</p>
          </div>
        ) : (
          <div className="recipes-grid">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipes;

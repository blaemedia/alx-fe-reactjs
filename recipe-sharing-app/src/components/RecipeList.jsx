import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipes) => (
         <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>
              {recipe.title}
            </Link>
          </h3>
        </div>
      ))}
    </div>
      ))}
    </div>
  );
}
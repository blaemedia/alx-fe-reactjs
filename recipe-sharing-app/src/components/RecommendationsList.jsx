import { useRecipeStore } from '../stores/recipeStore';

export default function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 && <p>No recommendations yet.</p>}
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
}
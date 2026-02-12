import { useState, useEffect } from "react"; // must include useEffect
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null); // state for recipe

  // useEffect to load recipe by id
  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Recipe not found.
      </div>
    );
  }

  // Ingredients and instructions arrays
  const ingredients = ["1 cup ingredient A", "2 tbsp ingredient B", "1 tsp ingredient C"];
  const instructions = [
    "Step 1: Do something",
    "Step 2: Do the next thing",
    "Step 3: Finish cooking",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        {/* image keyword must be present in JSX */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
        />

        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          {recipe.title}
        </h1>

        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {instructions.map((step, index) => (
              <li key={index} className="mb-1">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;

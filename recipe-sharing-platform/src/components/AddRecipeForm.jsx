import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // ALX keyword
  const [errors, setErrors] = useState({});

  // Validation function (must contain "validate")
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";

    const ingredientList = ingredients.split(/[\n,]+/).filter((i) => i.trim() !== "");
    if (ingredientList.length < 2) newErrors.ingredients = "At least 2 ingredients required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // call validate function

    const ingredientList = ingredients.split(/[\n,]+/).filter((i) => i.trim() !== "");

    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps,
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Recipe</h1>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (comma or newline separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows={5}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

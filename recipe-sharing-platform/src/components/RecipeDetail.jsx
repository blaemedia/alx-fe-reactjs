import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  const ingredients = ["1 cup ingredient A", "2 tbsp ingredient B"];
  const steps = ["Step 1", "Step 2"];
  
  // ...
}

export default RecipeDetail;

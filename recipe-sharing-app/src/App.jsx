import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './stores/recipeStore';

export default function App() {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <BrowserRouter>
      <div style={{ padding: '1rem' }}>
        <h1>Recipe Sharing App</h1>

        {/* Search Bar */}
        <SearchBar />

        {/* Generate Recommendations */}
        <button
          onClick={generateRecommendations}
          style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}
        >
          Generate Recommendations
        </button>

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />

          {/* Recipe Details Page */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

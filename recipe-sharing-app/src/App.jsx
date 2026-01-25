
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css'

function App() {
    const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations

  return (
    <>
      <BrowserRouter>
      <h1>Recipe Sharing App</h1>

      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>

      <Routes>
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
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

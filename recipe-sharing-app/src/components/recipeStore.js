import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],       // Stores recipe IDs
  recommendations: [],

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  // Update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id), // Remove from favorites if deleted
    })),

  // Favorites
  addFavorite: (id) =>
    set((state) =>
      state.favorites.includes(id)
        ? state
        : { favorites: [...state.favorites, id] }
    ),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  // Generate mock recommendations based on favorites
  generateRecommendations: () => {
    const state = get();
    const recommended = state.recipes.filter(
      (recipe) =>
        !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
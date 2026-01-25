import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // Recipes
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  // Favorites
  favorites: [],
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

  // Recommendations
  recommendations: [],
  generateRecommendations: () => {
    const state = get();
    const recommended = state.recipes.filter(
      (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },

  // ✅ Search feature
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

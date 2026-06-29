import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://dummyjson.com/recipes";

const formatMinutes = (minutes) => `${minutes ?? 0} min`;

const formatRating = (rating) => {
  const ratingNumber = Number(rating);
  return Number.isFinite(ratingNumber) ? ratingNumber.toFixed(1) : "New";
};

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Recipe data could not be loaded.");
        }

        const recipeData = await response.json();
        setRecipes(recipeData.recipes || []);
      } catch (error) {
        setErrorMessage(error.message || "Something went wrong while loading recipes.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalCuisines = new Set(recipes.map((recipe) => recipe.cuisine).filter(Boolean)).size;
  const averageRating = recipes.length
    ? recipes.reduce((total, recipe) => total + Number(recipe.rating || 0), 0) / recipes.length
    : 0;

  return (
    <main className="recipe-page">
      <section className="recipe-hero" aria-labelledby="recipe-title">
        <div className="recipe-hero-copy">
          <p className="eyebrow">Fresh recipe collection</p>
          <h1 id="recipe-title">Explore Recipes</h1>
          <p>
            Browse colorful recipe cards with ingredients, cooking steps, timing,
            ratings, cuisine, and serving details in one clean view.
          </p>
        </div>

        <div className="recipe-summary" aria-label="Recipe summary">
          <div>
            <strong>{recipes.length}</strong>
            <span>Recipes</span>
          </div>
          <div>
            <strong>{totalCuisines}</strong>
            <span>Cuisines</span>
          </div>
          <div>
            <strong>{averageRating ? averageRating.toFixed(1) : "--"}</strong>
            <span>Avg rating</span>
          </div>
        </div>
      </section>

      {isLoading && (
        <section className="state-panel" aria-live="polite">
          <span className="loader" />
          <h2>Loading recipes...</h2>
          <p>Please wait while the recipe cards are getting ready.</p>
        </section>
      )}

      {!isLoading && errorMessage && (
        <section className="state-panel state-panel-error" role="alert">
          <h2>Unable to load recipes</h2>
          <p>{errorMessage}</p>
        </section>
      )}

      {!isLoading && !errorMessage && recipes.length === 0 && (
        <section className="state-panel">
          <h2>No recipes found</h2>
          <p>The recipe list is empty right now.</p>
        </section>
      )}

      {!isLoading && !errorMessage && recipes.length > 0 && (
        <section className="recipe-grid" aria-label="Recipe cards">
          {recipes.map((recipe) => (
            <article className="recipe-card" key={recipe.id}>
              <div className="recipe-media">
                <img src={recipe.image} alt={recipe.name} loading="lazy" />
                <span className="rating-badge">{formatRating(recipe.rating)} rating</span>
              </div>

              <div className="recipe-content">
                <div className="recipe-topline">
                  <span>{recipe.cuisine}</span>
                  <span>{recipe.difficulty}</span>
                </div>

                <h2>{recipe.name}</h2>

                <div className="meal-types" aria-label="Meal types">
                  {recipe.mealType?.map((mealType) => (
                    <span key={`${recipe.id}-${mealType}`}>{mealType}</span>
                  ))}
                </div>

                <dl className="recipe-meta">
                  <div>
                    <dt>Prep</dt>
                    <dd>{formatMinutes(recipe.prepTimeMinutes)}</dd>
                  </div>
                  <div>
                    <dt>Cook</dt>
                    <dd>{formatMinutes(recipe.cookTimeMinutes)}</dd>
                  </div>
                  <div>
                    <dt>Serves</dt>
                    <dd>{recipe.servings}</dd>
                  </div>
                  <div>
                    <dt>Calories</dt>
                    <dd>{recipe.caloriesPerServing}</dd>
                  </div>
                </dl>

                <section className="card-section">
                  <h3>Ingredients</h3>
                  <ul className="ingredient-list">
                    {recipe.ingredients?.map((ingredient, index) => (
                      <li key={`${recipe.id}-ingredient-${index}`}>{ingredient}</li>
                    ))}
                  </ul>
                </section>

                <section className="card-section">
                  <h3>Instructions</h3>
                  <ol className="instruction-list">
                    {recipe.instructions?.map((instruction, index) => (
                      <li key={`${recipe.id}-instruction-${index}`}>{instruction}</li>
                    ))}
                  </ol>
                </section>

                <div className="tag-list" aria-label="Recipe tags">
                  {recipe.tags?.map((tag) => (
                    <span key={`${recipe.id}-${tag}`}>#{tag}</span>
                  ))}
                </div>

                <footer className="recipe-footer">
                  <span>Recipe #{recipe.id}</span>
                  <span>{recipe.reviewCount} reviews</span>
                  <span>User {recipe.userId}</span>
                </footer>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default App;

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { getMealById } from "../api";
import { Preloader } from "../components/preloader";

import "../index.css"

function getIngredientsList(meal) {
  const ingredients = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredientName = `strIngredient${i}`;
    const ingredientValue = meal[ingredientName];

    if (!ingredientValue || ingredientValue.trim() === "") {
      continue;
    }

    ingredients.push(
      <div key={i} className="ingredient-container " >
        <div className="ingredient">{ingredientValue}</div>
        <div className="ingredients-value">{meal[`strMeasure${i}`]}</div>
      </div>
    );
  }
  return ingredients;
}

function Recipe() {
  const {ID} = useParams();
  const [mealRecipe, setMealRecipe] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getMealById(ID).then((data) => setMealRecipe(data.meals ? data.meals[0] : null));
  }, [ID]);

  const youtubeId = mealRecipe && mealRecipe.strYoutube ? mealRecipe.strYoutube.slice(-11) : null;

  if (!mealRecipe) {
    return <Preloader/>;
  }

  return (
    <div className="row container">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img className="recipe-image" src={mealRecipe.strMealThumb} alt={mealRecipe.strMeal}/>
          </div>
          <div className="card-content">
            <span className="card-title">{mealRecipe.strMeal}</span>
            <p>Ares: {mealRecipe.strArea}</p>
            <p>Category: {mealRecipe.strCategory}</p>
            <p>{mealRecipe.strInstructions}</p>
          </div>
          <div className="card-action">
            {getIngredientsList(mealRecipe)}
          </div>
          <div className="card-image video">
            <iframe
              title="YouTube video player"
              max-width="560"
              max-height="315"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{margin: 'auto', width: '560px !important'}}
            />
          </div>
          <div className="card-content">
            <button onClick={() => navigate(-1)} className="btn" >Go back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Recipe};
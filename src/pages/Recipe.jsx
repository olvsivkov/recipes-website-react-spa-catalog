import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getMealById } from "../api";

function getIngredientsList(meal) {
  const ingredients = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredientName = `strIngredient${i}`;
    const ingredientValue = meal[ingredientName];

    if (!ingredientValue || ingredientValue.trim() === "") {
      continue;
    }

    ingredients.push(
      <li key={i}>
        {ingredientValue} - {meal[`strMeasure${i}`]}
      </li>
    );
  }
  return ingredients;
}

function Recipe() {
  const {ID} = useParams();
  const [mealRecipe, setMealRecipe] = useState([]);
  
  useEffect(() => {
    getMealById(ID).then((data) => setMealRecipe(data.meals ? data.meals[0] : null));
  }, [ID]);


  if (!mealRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row container">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src={mealRecipe.strMealThumb} alt={mealRecipe.strMeal}/>
            <span className="card-title">{mealRecipe.strMeal}</span>
          </div>
          <div className="card-content">
            <p>Ares: {mealRecipe.strArea}</p>
            <p>Category: {mealRecipe.strCategory}</p>
            <p>{mealRecipe.strInstructions}</p>
          </div>
          <div className="card-action">
            {getIngredientsList(mealRecipe)}
          </div>
          <div className="card-image">
            <video className="responsive-video" controls>
            <source src={mealRecipe.strYoutube} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Recipe};
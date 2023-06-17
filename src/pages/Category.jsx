import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api"
import { Preloader } from "../components/preloader";
import { MealList } from "./MealList";

import "../index.css"

function Category() {
  const {name} = useParams()
  const [meals, setMeals] = useState([])
  const navigate = useNavigate();

  const fetchData = () => {getFilteredCategory(name).then((data) => setMeals(data.meals))
  }

  useEffect(() => {
    fetchData()
  }, [name])



    return <>
      <button onClick={() => navigate(-1)} className="btn-small stiky-btn" >Go back</button>
      {!meals.length ? <Preloader/>: <MealList meals={meals} />}
    </>
}


export {Category}
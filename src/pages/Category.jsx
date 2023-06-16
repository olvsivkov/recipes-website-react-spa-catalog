import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api"
import { Preloader } from "../components/preloader";
import { MealList } from "./MealList";

function Category() {
  const {name} = useParams()
  const [meals, setMeals] = useState([])

  const fetchData = () => {getFilteredCategory(name).then((data) => setMeals(data.meals))
  }

  useEffect(() => {
    fetchData()
  }, [name])



    return <>
      {!meals.length ? <Preloader/>: <MealList meals={meals} />}
    </>
}


export {Category}
import { useState, useEffect } from "react"
import { getAllCategories } from "../api"
import { Preloader } from "../components/preloader"
import { CategoryList } from "./CategoryList"

function Home() {
  const [catalog, setCatalog] = useState([])

  useEffect(
    () => {
      getAllCategories().then(data => {setCatalog(data.categories)})
    }, []
  )

  return <>
    {!catalog.length? <Preloader/>: (
      <CategoryList catalog={catalog}/>
    )}
  </>
}

export {Home}
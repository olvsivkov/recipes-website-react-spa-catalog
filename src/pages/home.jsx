import { useState, useEffect } from "react"
import { getAllCategories } from "../api"
import { Preloader } from "../components/preloader"
import { CategoryList } from "./CategoryList"
import "../index.css"

function Home() {
  const [catalog, setCatalog] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(
    () => {
      getAllCategories().then(data => {setCatalog(data.categories)})
    }, []
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    let arrayCatalog = []
    arrayCatalog.push(catalog.find(item => item.strCategory === searchTerm))
    console.log()
    setCatalog(arrayCatalog)
  }

  return <>

        <form onSubmit={handleSubmit} className="find-form search-container">
          <label className="container-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
          <button type="submit" className="btn btn-search container-2">Search</button>
        </form>

    {!catalog.length? <Preloader/>: (
      <CategoryList catalog={catalog}/>
    )}
  </>
}

export {Home}
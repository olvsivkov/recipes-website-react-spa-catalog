import { useState, useEffect } from "react"
import { getAllCategories } from "../api"
import { Preloader } from "../components/preloader"
import { CategoryList } from "./CategoryList"
import { MyModal } from "./modal"

import "../index.css"


function Home() {
  const [catalog, setCatalog] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const fetchCategories = () => {
    getAllCategories().then(data => {setCatalog(data.categories)})
    setShowPopup(false)
  }

  useEffect(
    () => {
      fetchCategories()
    }, []
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    let arrayCatalog = []
    let searchTermWord
    if(searchTerm.length) {
      searchTermWord = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase()
      const result = catalog.find(item => item.strCategory === searchTermWord)
      if(result) {
        arrayCatalog.push(result)
        setCatalog(arrayCatalog)
        setShowPopup(false)
      }
      else setShowPopup(true)
    }

    else fetchCategories()
    console.log(catalog)
  }

  const getValue = (e) => {
    let word = e.target.value
    setSearchTerm(word)
    fetchCategories()
  }

  return <>

        <form onSubmit={handleSubmit} className="find-form search-container">
          <label className="container-1">
            <input
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={getValue}
            />
          </label>
          <button type="submit" className="btn btn-search container-2">Search</button>
        </form>
        {showPopup && <MyModal/>}
    {!catalog.length? <Preloader/>: (
      <CategoryList catalog={catalog}/>
    )}
  </>
}

export {Home}
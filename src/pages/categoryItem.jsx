import { Link } from "react-router-dom"
import "../index.css"

function CategoryItem(props){
  const { strCategory, strCategoryDescription, strCategoryThumb} = props
  return <div className="card">
    <div className="card-image">
      <img src={strCategoryThumb} alt={strCategory}/>
    </div>
    <div className="card-content">
      <h4>{strCategory}</h4>
      <p>{strCategoryDescription.slice(0, 60)}...</p>
    </div>
    <div className="card-action">
      <Link to={`/category/${strCategory}`} className="btn">Watсh category</Link>
    </div>
  </div>
}

export {CategoryItem}
function CategoryItem(props){
  const {idCategory} = props
  return <div className="card">
    {idCategory}
  </div>
}

export {CategoryItem}
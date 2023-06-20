import './App.css';
import { Layout } from './components/layout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, HashRouter } from 'react-router-dom'; 
import { Home } from './pages/home';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

const router = createBrowserRouter(createRoutesFromElements(
  <HashRouter basename='/recipes-website-react-spa-catalog'> 
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='category/:name' element={<Category/>}/>
      <Route path='meal/:ID' element={<Recipe/>}/>

    </Route>
  </HashRouter>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

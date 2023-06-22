import './App.css';
import { Layout } from './components/layout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, BrowserRouter } from 'react-router-dom'; 
import { Home } from './pages/home';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

const router = createBrowserRouter(createRoutesFromElements(
<BrowserRouter basename="/recipes-website-react-spa-catalog">
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='category/:name' element={<Category/>}/>
      <Route path='meal/:ID' element={<Recipe/>}/>
    </Route>
</BrowserRouter>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

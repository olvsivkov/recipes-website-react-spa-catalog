import './App.css';
import { Layout } from './components/layout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'; // подключаем роутинг
import { Home } from './pages/home';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='category/:name' element={<Category/>}/>
    <Route path='meal/:ID' element={<Recipe/>}/>

  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;


//<Route path='category/:name' element={<Category/>}/>
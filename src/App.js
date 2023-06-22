import './App.css';
import { Layout } from './components/layout';
import { Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'; 
import { Home } from './pages/home';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

const router = createBrowserRouter(createRoutesFromElements(
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='category/:name' element={<Category/>}/>
      <Route path='meal/:ID' element={<Recipe/>}/>
    </Route>
  </Routes>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

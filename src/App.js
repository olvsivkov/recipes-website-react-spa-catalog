import './App.css';
import { Layout } from './components/layout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'; // подключаем роутинг
import { Home } from './pages/home';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>

  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

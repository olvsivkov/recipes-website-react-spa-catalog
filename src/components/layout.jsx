import { Outlet, NavLink } from "react-router-dom"
import "./layout.css"
/*
В импорте используется NavLink он добавляет автоматически класс active к активному компоненту. Необходимо самостоятельно в css указать правило ждля этого класса.  
*/
/*
Статичные объекты header и footer находятся в layout. Динамические объекты расположены в Outlet
*/

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-wrapper nav-bar amber darken-3">
            <span className="brand-logo">Goods</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/">Home</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet/>
      <footer className="page-footer orange darken-1">
        <div className="container"></div>
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/olvsivkov">My GitHub</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export {Layout}
import { NavLink } from "react-router-dom"
import style from "./index.module.css"


const Header = () => {
  return (
    <div className={style.header}>
      <ul>
        <li><NavLink to={'/'}></NavLink></li>
        <li><NavLink to={'/components'}>Components</NavLink></li>
        <li><NavLink to={'/blocks'}>Blocks</NavLink></li>
        <li><NavLink to={'/sections'}>Sections</NavLink></li>
      </ul>
    </div>
  )
}

export default Header
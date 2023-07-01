import { NavLink } from "react-router-dom"
import style from "./index.module.css"
import { Container, Row } from "../../my-lib/layout"
import { Button } from "../../my-lib/components/buttons"
import { Avatar, Image } from "../../my-lib/components/image"


const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <Row>
          <Avatar>
             <Image src="/logo.png" alt="logo" />
          </Avatar>
          <ul className={style.menu}>
            <li><NavLink to={'/'}></NavLink></li>
            <li><NavLink to={'/components'}>Components</NavLink></li>
            <li><NavLink to={'/blocks'}>Blocks</NavLink></li>
            <li><NavLink to={'/sections'}>Sections</NavLink></li>
          </ul>
          <Button>Read more</Button>
        </Row>
      </Container>
    </header>
  )
}

export default Header
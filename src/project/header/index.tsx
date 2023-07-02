import { NavLink } from "react-router-dom"
import style from "./index.module.css"
import { Container, Row } from "../../my-lib/layout"
import { Button } from "../../my-lib/components/buttons"
import { Avatar, Image } from "../../my-lib/components/image"
import { Menu, MenuItem } from "../../my-lib/blocks/menu"


const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <Row py={25}>
          <Avatar>
            <Image src="/logo.png" alt="logo" />
          </Avatar>
          <Menu>
            <MenuItem><NavLink to={'/'}></NavLink></MenuItem>
            <MenuItem><NavLink to={'/components'}>Components</NavLink></MenuItem>
            <MenuItem><NavLink to={'/blocks'}>Blocks</NavLink></MenuItem>
            <MenuItem><NavLink to={'/sections'}>Sections</NavLink></MenuItem>
          </Menu>
          <Button>Read more</Button>
        </Row>
      </Container>
    </header>
  )
}

export default Header
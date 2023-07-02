import { NavLink } from "react-router-dom";
import { Box, Container, Row } from "../../my-lib/layout";
import { Button } from "../../my-lib/components/buttons";
import { Avatar, Image } from "../../my-lib/components/image";
import { Menu, MenuItem } from "../../my-lib/blocks/menu";
import { LHeader } from "../../my-lib/sections/header";

const menuItems = [
  { link: '/', name: 'Home' },
  { link: '/components', name: 'Components' },
  { link: '/blocks', name: 'Blocks' },
  { link: '/sections', name: 'Sections' },
]

const Header = () => {
  return (
    <LHeader bg='#F6EFE8'>
      <Container>
        <Row pt={15} pb={15} >
          <Box display={'flex'}>
            <Avatar shadowColor={'pink'} size={70} mr={20}>
              <Image src="/logo.png" alt="logo" />

            </Avatar>
            <Menu display={'flex'} >
              {
                menuItems.map((e) => (
                  <MenuItem key={e.link} fs={'20px'} color={'black'} letterSpacing={'1px'}><NavLink to={e.link}>{e.name}</NavLink></MenuItem>
                ))
              }

            </Menu>
          </Box>
          <Button>Read more</Button>
        </Row>
      </Container>
    </LHeader>
  )
}

export default Header
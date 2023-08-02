import React from 'react';
import { NavLink } from 'react-router-dom';
import {Box, Col, Container, Row} from '../../my-lib/layout';
import { Avatar, Image } from '../../my-lib/components/image';
import { Menu, MenuItem } from '../../my-lib/blocks/menu';
import { LHeader } from '../../my-lib/sections/header';
import { Button } from '../../my-lib/components/buttons';


const menuItems = [
  { link: '/layout', name: 'Layout' },
  { link: '/components', name: 'Components' },
  { link: '/blocks', name: 'Blocks' },
  { link: '/sections', name: 'Sections' },
]
const Header = () => {
  return (
    <LHeader bg='#FFF'>
      <Container>
        <Row pt={'15px'} pb={'15px'} alignitems={'center'}>
          <Box display={'flex'}>
            <NavLink to={'/'}>
               <Avatar shadowcolor={'pink'} shadow={'true'} size={'70px'} mr={'20px'}>
              <Image src="/logo.png" alt="logo" />
            </Avatar>
            </NavLink>
           
            <Menu display={'flex'}>
              {
                menuItems.map((e) => (
                  <MenuItem key={e.link} fs={'18px'} color={'black'} ls={'1px'} ml={'20px'}><NavLink to={e.link}>{e.name}</NavLink></MenuItem>
                ))
              }
            </Menu>
          </Box>
          <Button hover={'reverseBorder'}>Read More</Button>
        </Row>
      </Container>
    </LHeader>
  )
}
export default Header



import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from '../../my-lib/layout';
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
    <LHeader minH='86px'>
        <Row alignitems='center' sx='height:100%' p='20px 40px'>
            <Menu>
              {
                menuItems.map((e) => (
                  <MenuItem key={e.link} fs={'18px'} color={'white'} ls={'1px'} mr={'20px'}><NavLink to={e.link}>{e.name}</NavLink></MenuItem>
                ))
              }
            </Menu>
            <Button>Read More</Button>
        </Row>
    </LHeader>
  )
}
export default Header



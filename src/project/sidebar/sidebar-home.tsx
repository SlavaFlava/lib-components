import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem } from '../../my-lib/blocks/menu';



const SidebarHome = () => {
  return (
    <>
      <Menu display='block'>
       <MenuItem mt={'10px'} ls={'1px'}><NavLink to={"/about"}>About Us</NavLink></MenuItem>
       <MenuItem mt={'10px'} ls={'1px'}><NavLink to={"/contacts"}>Contacts</NavLink></MenuItem>
      </Menu>
    </>
  )
}

export default SidebarHome;

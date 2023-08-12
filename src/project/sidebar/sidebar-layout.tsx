import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem } from '../../my-lib/blocks/menu';



const SidebarLayout = () => {
  return (
    <>
      <Menu display='block' >
        <MenuItem mt={'18px'} ls={'0.5px'} fw='500' fs='19px' color='#655DBB' ><NavLink to={"/layout/box"}>Box</NavLink></MenuItem>
        <MenuItem mt={'18px'} ls={'0.5px'} fw='500' fs='19px' color='#655DBB' ><NavLink to={"/layout/section"}>Section</NavLink></MenuItem>
        <MenuItem mt={'18px'} ls={'0.5px'} fw='500' fs='19px' color='#655DBB' ><NavLink to={"/layout/container"}>Container</NavLink></MenuItem>
        <MenuItem mt={'18px'} ls={'0.5px'} fw='500' fs='19px' color='#655DBB' ><NavLink to={"/layout/row"}>Row</NavLink></MenuItem>
        <MenuItem mt={'18px'} ls={'0.5px'} fw='500' fs='19px' color='#655DBB' ><NavLink to={"/layout/columns"}>Columns</NavLink></MenuItem>
      </Menu>
    </>
  )
}
export default SidebarLayout;

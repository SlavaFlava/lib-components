import { NavLink } from 'react-router-dom';
import { List, ListItem } from '../../my-lib/components/list';

const menuItems = [
  { link: '/about', name: 'About' },
  { link: '/contact', name: 'Contact' },
]

const SidebarHome = () => {
  return (
    <>
      <List color='white' pl='0'  >
        {
          menuItems.map((item) => (
            <ListItem key={item.link} styledLink='true'
              beforeStyle='circle' beforeLeft='15px' beforeColor='white' beforeSize='10px'
              mt={'4px'} p='23px 40px' ls={'1px'} bg='#587682' >
              <NavLink to={item.link}>
                {item.name}
              </NavLink>
            </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default SidebarHome;

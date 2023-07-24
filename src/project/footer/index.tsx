import { Col, Container, Row } from '../../my-lib/layout';
import { LFooter } from '../../my-lib/sections/footer';
import { Avatar } from '../../my-lib/components/image';
import { Menu, MenuItem } from '../../my-lib/blocks/menu';
import { H5 } from '../../my-lib/components/typography';


const Footer = () => {   
 return(    
 <LFooter bg={'#F6EFE8'} pt={'40px'} pb={'40px'}>
   <Container>
    <Row >
      <Col size={2}>
       <Avatar size={'70px'} shadowHover='true' sx={'border: 4px solid white'} >UI</Avatar> 
      </Col>
      <Col size={4}>
      <Menu display={'block'}>
        <H5 mb={'20px'}>Components</H5>
        <MenuItem mt={'10px'} ls={'1px'}>Buttons</MenuItem>
        <MenuItem mt={'10px'} ls={'1px'}>Image</MenuItem>
        <MenuItem mt={'10px'} ls={'1px'}>H5</MenuItem>
        <MenuItem mt={'10px'} ls={'1px'}>Inputs</MenuItem>
       </Menu>
      </Col>
      <Col size={4}>
       <Menu display={'block'}>
        <H5 mb={'20px'}>Blocks</H5>
        <MenuItem mt={'10px'} ls={'1px'}>Menu</MenuItem>
        <MenuItem mt={'10px'} ls={'1px'}>Pop Up</MenuItem>
        <MenuItem mt={'10px'} ls={'1px'}>FAQ</MenuItem>
        <MenuItem mt={'10px'} ls={'1px'}>Card</MenuItem>
       </Menu>
       </Col>
      <Col size={2}>
       <Menu display={'block'}>
        <H5 mb={'20px'}>Sections</H5>
        <MenuItem mt={'10px'} ls={'1px'}>Header</MenuItem>
        <MenuItem mt={'10px'} ls={'1px'}>Footer</MenuItem>
        <MenuItem mt={'10px'} ls={'1px'}>Sliders</MenuItem>
        <MenuItem mt={'10px'} ls={'1px'}>Banner</MenuItem>
       </Menu>
       </Col>
    </Row>
   </Container>
 </LFooter>
) 
}
export default Footer
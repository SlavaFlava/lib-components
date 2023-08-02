import React, { useState } from 'react';
import { Box, Col, Container, Row } from '../../../my-lib/layout';
import { Card, CardContent, CardFooter, CardHeader } from '../../../my-lib/blocks/card';
import { Avatar, Image } from '../../../my-lib/components/image';
import { H1, H3, P } from '../../../my-lib/components/typography';
import { BtnLink, Button } from '../../../my-lib/components/buttons';
import { Popup } from '../../../my-lib/blocks/pop-up';


const BlocksPopUp = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [openAllow, setOpenAllow] = useState(false)

  return (
    <Container mt={'50px'}>
      <Box display='flex' justifycontent={'flex-end'}>
         <Button onClick={() => setOpenPopup(!openPopup)}>Open Popup</Button>
      <Button onClick={() => setOpenAllow(!openAllow)}>Open Allow</Button>
      </Box>
     

      <Popup openPopup={setOpenPopup} open={openPopup} eclipseOpacity='0.4'>
        <Card border='1px solid #F6EFE8' pb='10px' shadow={'variant-1'} shadowcolor='#F6EFE8'>
          <CardHeader h='300px'>
            <Image src='https://loremflickr.com/640/360' />
          </CardHeader>
          <CardContent pl='15px' pr='15px'>
            <H3 mb='10px'>Card Title</H3>
            <P lh='1.4em'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellat assumenda culpa mollitia similique. Quod quam dolore ratione. Facere pariatur, dolore ipsam hic maxime mollitia id ut deserunt ducimus animi!
            </P>
          </CardContent>
          <CardFooter p='15px' display='flex'>
            <BtnLink mr={'10px'} hover={'reverseBorder'}>
              Read More
            </BtnLink>
            <BtnLink hover={'reverseBorder'}>
              Subscribe
            </BtnLink>
          </CardFooter>
        </Card>
      </Popup>
      <Popup openPopup={setOpenAllow} open={openAllow}  eclipseOpacity='0.3'>
        <Card>
          <CardHeader p='20px'>
            <H1>Lorem ipsum</H1>
          </CardHeader>
          <CardContent p='20px' sx={'border-top:1px solid grey'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde, excepturi neque porro nihil quidem provident voluptatum sed accusantium quo.
          </CardContent>
          <CardFooter display='flex' p='20px'>
            <Button bg='orange' hover={'reverseBorder'}>allow</Button>
            <Button hover={'reverseBorder'}>close</Button>
          </CardFooter>
        </Card>
      </Popup>
    </Container>
  )
}
export default BlocksPopUp
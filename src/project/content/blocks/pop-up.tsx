import React, { useState } from 'react';
import { Box, Col, Container, Row } from '../../../my-lib/layout';
import { Card, CardContent, CardFooter, CardHeader } from '../../../my-lib/blocks/card';
import { Image } from '../../../my-lib/components/image';
import { H1, H3, P } from '../../../my-lib/components/typography';
import { BtnLink, Button } from '../../../my-lib/components/buttons';
import { Popup } from '../../../my-lib/blocks/pop-up';


const BlocksPopUp = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [openAllow, setOpenAllow] = useState(false)

  return (
    <Container mt={'50px'}>
      <Box display={'flex'} justifyContent={'flex-end'}>
      <Button onClick={() => setOpenPopup(!openPopup)}>Open Popup</Button>
      <Button onClick={() => setOpenAllow(!openAllow)}>Open Allow</Button>
      </Box>
      <Popup openPopup={setOpenPopup} open={openPopup}  eclipseOpacity='0.4'>
        <Card border={'1px solid'} shadow={true} shadowcolor='#F6E8F8' >
          <CardHeader h='300px' >
            <Image src='https://loremflickr.com/640/360' />
          </CardHeader>
          <CardContent pl={'15px'} pr={'15px'}>
            <H3 mb={'10px'}>Card Title</H3>
            <P lh={'1.4em'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Iusto corrupti eum harum totam quod. Odit.
            </P>
          </CardContent>
          <CardFooter p={'10px'} display={'flex'} >
            <BtnLink mr={'10px'} hover={'reverseBorder'}> 
              Read more
            </BtnLink>
            <BtnLink >
              Subscribe
            </BtnLink>
          </CardFooter>
        </Card>
      </Popup>
      <Popup openPopup={setOpenAllow} open={openAllow} eclipseOpacity='0.3'>
        <Card shadow={true}>
         <CardHeader p='20px' >
          <H1>Lorem, ipsum.</H1>
         </CardHeader>
         <CardContent p='20px' sx={'border-top:1px solid grey'}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia numquam harum laudantium minus est? Minima nihil id repellendus a repudiandae.
         </CardContent>
         <CardFooter>
          <Button bg='orange' >allow</Button>
          <Button hover={'reverseBorder'}>close</Button>
         </CardFooter>
        </Card>
      </Popup>
    </Container>
  )
}
export default BlocksPopUp
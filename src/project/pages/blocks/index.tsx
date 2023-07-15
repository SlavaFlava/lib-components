import React from 'react';
import { Col, Container, Row } from '../../../my-lib/layout';
import { Card, CardContent, CardFooter, CardHeader } from '../../../my-lib/blocks/card';
import { Image } from '../../../my-lib/components/image';
import { H3, P } from '../../../my-lib/components/typography';
import { BtnLink } from '../../../my-lib/components/buttons';
import { Popup } from '../../../my-lib/blocks/pop-up';


const Blocks = () => {
  return (
    <Container mt={'50px'}>
         <Popup open mw='500px' eclipseOpacity='0.4'>
          <Card border={'1px solid'} shadow shadowColor='#F6E8F8' >
            <CardHeader height='300px' >
              <Image src='https://loremflickr.com/640/360' />
            </CardHeader>
            <CardContent pl={'10px'} pr={'10px'}>
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
    </Container>
  )
}
export default Blocks
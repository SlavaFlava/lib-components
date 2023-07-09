import React from 'react';
import { Col, Container, Row, Section } from '../../../my-lib/layout';
import { P } from '../../../my-lib/components/typography';


const Home = () => {
  return (
    <>
    <Section pt={'50px'} pb={'50px'} >
      <Container>
        <Row>
          <Col size={6} bg={'green'} p={'30px'} spacing={'15px'} color='white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sapiente!
          </Col>
          <Col size={3} bg={'green'} p={'30px'} spacing={'15px'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sapiente!
          </Col>
          <Col size={3} bg={'green'} p={'30px'} spacing={'15px'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sapiente!
          </Col>
        </Row>
      </Container>
    </Section>
    <Section bg={'#F6EFE8'} pt={'50px'}>
       <Container fullWidth>
        <P> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem. Modi corporis itaque necessitatibus, ea ab quia esse ullam aspernatur eveniet consequuntur? Libero reiciendis laborum aperiam odit enim quam consequatur repudiandae accusamus, maxime, suscipit rem distinctio, perspiciatis autem quis quas laboriosam ducimus ad ipsum amet voluptatibus velit eligendi similique voluptas incidunt! Atque hic, ab consequatur id aperiam dolores repellat, eveniet quaerat quasi, beatae illum obcaecati quo? Quia aut excepturi explicabo officia, optio, provident ut cum illo odit doloremque quae? Maiores blanditiis non quia reiciendis quibusdam suscipit velit hic nemo a. Rem doloremque nihil alias vitae sunt facere, aperiam odit esse! </P>
       </Container>
    </Section>
    </>
  )
}
export default Home
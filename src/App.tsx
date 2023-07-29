import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './project/pages/home';
import Blocks from './project/pages/blocks';
import Components from './project/pages/components';
import Header from './project/header';
import Footer from './project/footer';
import { Col, Container, Row, Section } from './my-lib/layout';
import Sections from './project/pages/sections';

function App() {
  return (
    <div className="App">
      <Container fullwidth='true' pl='0' pr='0'  bg={'#F9F9F9'}>
        <Row sx={'min-height:100vh'}>
          <Col size={2} bg='white'>
                  <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sections' element={<Sections />} />
                <Route path='/blocks' element={<Blocks />} />
                <Route path='/components' element={<Components />} />
              </Routes>
          </Col>
          <Col size={10} display='flex' flexDirection={'column'}>
            <Header />
            <Section flex={'1'}>
              
            </Section>
            <Footer />
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default App;

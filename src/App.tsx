import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './project/pages/home';
import Blocks from './project/pages/blocks';
import Components from './project/pages/components';
import Header from './project/header';
import Footer from './project/footer';
import { Section } from './my-lib/layout';
import Sections from './project/pages/sections';

function App() {
  return (
    <div className="App">
      <Header />
      <Section flex={'1'}>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sections' element={<Sections />} />
        <Route path='/blocks' element={<Blocks />} />
        <Route path='/components' element={<Components />} />
        </Routes>
      </Section>
      <Footer />
    </div>
  )
}

export default App;

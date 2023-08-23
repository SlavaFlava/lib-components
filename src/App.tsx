import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './project/header';
import Footer from './project/footer';
import { Box, Col, Container, Row, Section } from './my-lib/layout';
import Home from './project/content/pages/home';
import SidebarLayout from './project/sidebar/sidebar-layout';
import SidebarSections from './project/sidebar/sidebar-sections';
import SidebarBlocks from './project/sidebar/sidebar-blocks';
import SidebarComponents from './project/sidebar/sidebar-components';
import SidebarHome from './project/sidebar/sidebar-home';
import About from './project/content/pages/about';
import Contact from './project/content/pages/contacts';
import LayoutPage from './project/content/layout';
import LayoutBox from './project/content/layout/box';
import LayoutColumns from './project/content/layout/columns';
import LayoutContainer from './project/content/layout/container';
import LayoutRow from './project/content/layout/row';
import LayoutSections from './project/content/layout/sections';
import SectionsPage from './project/content/sections';
import SectionsHeader from './project/content/sections/header';
import SectionsFooter from './project/content/sections/footer';
import BlocksPage from './project/content/blocks';
import BlocksCard from './project/content/blocks/card';
import BlocksMenu from './project/content/blocks/menu';
import BlocksPopUp from './project/content/blocks/pop-up';
import BlocksTabs from './project/content/blocks/tabs';
import ComponentsPage from './project/content/components';
import ComponentsButtons from './project/content/components/buttons';
import ComponentsForm from './project/content/components/form';
import ComponentsImage from './project/content/components/image';
import ComponentsList from './project/content/components/list';
import ComponentsTypography from './project/content/components/typography';
import { Image } from './my-lib/components/image';
import { Separate } from './my-lib/components/separate';
import { ThemeProvider } from 'styled-components';
import { Theme } from './project/store/theme';
import { Sidebar } from './my-lib/blocks/sidebar';
import { observer } from 'mobx-react';
import Customizer from './project/content/pages/customizer';


const App = observer(() => {

  return (
    <ThemeProvider theme={Theme.currentTheme}>
      <div className="App">
        <Container fullwidth='true' pl='0' pr='0'>
          <Row sx={'min-height:100vh'}>
            <Col size={2} spacing='0px'>
              <Sidebar type='gradient'>
                <Box p='17px 15px'>
                  <NavLink to={'/'}>
                    <Image h='50px' w='auto' src="/logo.png" alt="logo" />
                  </NavLink>
                </Box>
                <Separate bg='white' mt='0px' mb='20px' />
                <Routes>
                  <Route path='/*' element={<SidebarHome />} />
                  <Route path='/layout/*' element={<SidebarLayout />} />
                  <Route path='/sections/*' element={<SidebarSections />} />
                  <Route path='/blocks/*' element={<SidebarBlocks />} />
                  <Route path='/components/*' element={<SidebarComponents />} />
                </Routes>
              </Sidebar>
            </Col>
            <Col size={10} spacing='0px' display='flex' flexDirection='column'>
              <Header />
              <Section flex={'1'} bg='#F3F6F9' p='20px'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contacts' element={<Contact />} />
                  <Route path='/customizer' element={<Customizer />} />

                  <Route path='/layout' element={<LayoutPage />} />
                  <Route path='/layout/box' element={<LayoutBox />} />
                  <Route path='/layout/columns' element={<LayoutColumns />} />
                  <Route path='/layout/container' element={<LayoutContainer />} />
                  <Route path='/layout/row' element={<LayoutRow />} />
                  <Route path='/layout/section' element={<LayoutSections />} />

                  <Route path='/sections' element={<SectionsPage />} />
                  <Route path='/sections/header' element={<SectionsHeader />} />
                  <Route path='/sections/footer' element={<SectionsFooter />} />

                  <Route path='/blocks' element={<BlocksPage />} />
                  <Route path='/blocks/cards' element={<BlocksCard />} />
                  <Route path='/blocks/menu' element={<BlocksMenu />} />
                  <Route path='/blocks/pop-up' element={<BlocksPopUp />} />
                  <Route path='/blocks/tabs' element={<BlocksTabs />} />

                  <Route path='/components' element={<ComponentsPage />} />
                  <Route path='/components/buttons' element={<ComponentsButtons />} />
                  <Route path='/components/form' element={<ComponentsForm />} />
                  <Route path='/components/image' element={<ComponentsImage />} />
                  <Route path='/components/list' element={<ComponentsList />} />
                  <Route path='/components/typography' element={<ComponentsTypography />} />
                </Routes>
              </Section>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  )
})

export default App;

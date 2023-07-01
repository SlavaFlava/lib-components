import { Route, Routes } from "react-router-dom";
import Home from "./project/pages/home";
import Sections from "./project/pages/sections";
import Blocks from "./project/pages/blocks";
import Components from "./project/pages/components";
import Header from "./project/header";
import Footer from "./project/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sections" element={<Sections/>}/>
        <Route path="/blocks" element={<Blocks/>}/>
        <Route path="/components" element={<Components/>}/>
      </Routes>
      <Footer/>
   </div>
  );
}

export default App;

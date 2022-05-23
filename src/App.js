import {Routes, Route} from "react-router-dom";
import Home from './main/Home';
import Page1 from './main/Page1';
import Page2 from './main/Page2';
import Nav from './main/Nav';

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </>
  );
}

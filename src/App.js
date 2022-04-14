import HomePage from "./pages/HomePage";
import About from './pages/About'
import Service from './pages/Service'
import Property from './pages/Property'
import Contact from './pages/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import SingleProperty from "./pages/SingleProperty";
import Message from "./components/Message";
import ScrollToTop from "./ScrollTop";
import Scroll from "./pages/Scroll";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
      <Header />
      <ScrollToTop/>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property/:slug" element={<SingleProperty />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/scroll" element={<Scroll />} />



        </Routes>
        <Footer/>
       
      </BrowserRouter>,
    </div>
  );
}

export default App;

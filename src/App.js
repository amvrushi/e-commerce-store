import logo from './logo.svg';
import './App.css';
import { FaSearch } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import FAQ from './Pages/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' exact={true} element={<Home />} /> */}
           <Route path='/shop' element={<Shop />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/faq' element={<FAQ/>} />
                     <Route path='/' exact={true} element={<Home />} />
          </Routes>
</BrowserRouter>
       </div>
  );
}

export default App;

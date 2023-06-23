import logo from './logo.svg';
import './App.css';
import { FaSearch } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='' element={<Shop />} />
          </Routes>
</BrowserRouter>
       </div>
  );
}

export default App;

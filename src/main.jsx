import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './Style.css'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Firstproject/HomePage.jsx';
import Service from './Firstproject/Service.jsx';
import About from './Firstproject/about.jsx';
import Contact from './Firstproject/Contact.jsx';
import ProductPage from './Firstproject/ProductPage.jsx';




createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </>)
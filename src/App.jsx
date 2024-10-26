import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/Login';
import Footer from './components/footer/Footer';
import CreateAccount from './components/CreateAccount';



function App() {

  return (
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/Login" element={<Login />} />
      <Route  path="CreateAccount" element={<CreateAccount />} />

    </Routes>
    <Footer/>
    
    
    </BrowserRouter>


  </div>
  )
}

export default App

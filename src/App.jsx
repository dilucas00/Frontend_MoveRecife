import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Map from './components/Map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />          
        <Route path="/register" element={<Register />} />
        <Route path = "/homepage" element = {<HomePage/>} />
        <Route path = "/map" element = {<Map/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
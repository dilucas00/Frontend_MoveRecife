import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />          
        <Route path="/register" element={<Register />} />
        <Route path = "/homepage" element = {<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
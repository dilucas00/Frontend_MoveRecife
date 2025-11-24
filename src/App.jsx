import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />          
        <Route path="/register" element={<Register />} />
        <Route path = "/homepage" element = {<HomePage/>} />
        <Route path = "/profile" element = {<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
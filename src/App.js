import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/WorkSpace/Profile/Profile';
import Friends from './components/WorkSpace/Friends/Friends';
import Chats from './components/WorkSpace/Chats/Chats';
import Mainpage from './components/WorkSpace/Mainpage/Mainpage';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' exact element={<Mainpage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/chats' element={<Chats />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

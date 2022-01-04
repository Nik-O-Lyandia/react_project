import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/WorkSpace/Profile/Profile';
import Friends from './components/WorkSpace/Friends/Friends';
import Chats from './components/WorkSpace/Chats/Chats';
import Mainpage from './components/WorkSpace/Mainpage/Mainpage';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header logo={props.state.headerData.logo} />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' exact element={<Mainpage state={props.state.mainPage} />} />
            <Route path='/profile' element={<Profile profileData={props.state.profileData} />} />
            <Route path='/friends' element={<Friends state={props.state.friendsPage} />} />
            <Route path='/chats' element={<Chats state={props.state.chatsPage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

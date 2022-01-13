import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/WorkSpace/Profile/Profile';
import Friends from './components/WorkSpace/Friends/Friends';
import Chats from './components/WorkSpace/Chats/Chats';
import Chat from './components/WorkSpace/Chats/Chat/Chat';
import Mainpage from './components/WorkSpace/Mainpage/Mainpage';
import { useSelector } from 'react-redux';
import FriendProfile from './components/WorkSpace/Friends/FriendProfile/FriendProfile';
import Login from './components/Auth/Login/Login';

function App({ config }) {
  const userId = useSelector((state) => state.user.id);
  const posts = useSelector((state) => state.posts);
  const friends = useSelector((state) => state.friends);

  const userPosts = posts.filter((p) => p.userId === userId);
  const friendPosts = posts.filter((p) => p.userId !== userId);

  const profileData = useSelector((state) => state.profile);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header logo={config.headerData.logo} />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" exact element={<Mainpage posts={friendPosts} />} />
            <Route
              path="/profile"
              element={
                <Profile
                  profileData={{ ...profileData, userId }}
                  posts={userPosts}
                />
              }
            />
            <Route path="/friends" element={<Friends friends={friends} />} />
            <Route
              path="/friends/:friendId"
              element={<FriendProfile posts={friendPosts} />}
            />
            <Route path="/chats" element={<Chats state={config.chatsPage} />} />
            <Route path="/chats/:chatId" element={<Chat />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

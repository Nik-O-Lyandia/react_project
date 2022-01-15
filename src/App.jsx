import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from 'react-router-dom';
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
import { useEffect } from 'react';
import { set } from './redux/actions/friends';
import { useDispatch } from 'react-redux';

function App({ config }) {
  const userId = useSelector((state) => state.user.id);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('App render', userId, friends);
    dispatch(set());
  }, [userId]);

  const posts = useSelector((state) => state.posts);
  const friends = useSelector((state) =>
    state.friends.filter((f) => f.id !== userId)
  );

  const userPosts = posts.filter((p) => p.userId === userId);
  const friendPosts = posts.filter((p) => p.userId !== userId);

  const profileData = useSelector((state) =>
    state.friends.find((u) => u.id === userId)
  );

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header logo={config.headerData.logo} />
        <Navbar />
        <div className="app-wrapper-content">
          {userId === null ? (
            <Login />
          ) : (
            <Routes>
              <Route
                path="/"
                exact
                element={<Mainpage posts={friendPosts} />}
              />
              <Route
                path="/profile"
                element={
                  <Profile profileData={profileData} posts={userPosts} />
                }
              />
              <Route path="/friends" element={<Friends friends={friends} />} />
              <Route
                path="/friends/:friendId"
                element={<FriendProfile posts={friendPosts} />}
              />
              <Route path="/chats" element={<Chats friends={friends} />} />
              <Route path="/chats/:chatId" element={<Chat />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

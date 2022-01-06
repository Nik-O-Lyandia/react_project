import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/WorkSpace/Profile/Profile';
import Friends from './components/WorkSpace/Friends/Friends';
import Chats from './components/WorkSpace/Chats/Chats';
import Chat from './components/WorkSpace/Chats/Chat/Chat';
import Mainpage from './components/WorkSpace/Mainpage/Mainpage';

function App({ state }) {
  const userId = state.user.id;
  const posts = state.posts;
  const userPosts = posts.filter((p) => p.userId === userId);

  const friendPosts = posts.filter((p) => p.userId !== userId);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header logo={state.headerData.logo} />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" exact element={<Mainpage posts={friendPosts} />} />
            <Route
              path="/profile"
              element={
                <Profile profileData={state.profileData} posts={userPosts} />
              }
            />
            <Route
              path="/friends"
              element={<Friends state={state.friendsPage} />}
            />
            <Route path="/chats" element={<Chats state={state.chatsPage} />} />
            <Route path="/chats/:chatId" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

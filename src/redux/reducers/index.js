import { combineReducers } from 'redux';
import { profileReducer } from './profile';
import { postsReducer } from './posts';
import { userReducer } from './user';
import { friendsReducer } from './friends';

export const reducers = combineReducers({
  profile: profileReducer,
  posts: postsReducer,
  user: userReducer,
  friends: friendsReducer
});

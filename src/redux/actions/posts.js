import { ADD_POST } from '../reducers/posts';

export const addPost = (post) => ({ type: ADD_POST, value: post });

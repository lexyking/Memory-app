import {
  FETCH_ALL,
  CREATE_POST,
  LIKE_POST,
  UPDATE_POST,
  DELETE_POST
} from '../constants/actionTypes'

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE_POST:
      return [...posts, action.payload]
    case LIKE_POST:
    case UPDATE_POST:
      return posts.map(post => post._id === action.payload._id ? action.payload : post)
    case DELETE_POST:
      return posts.filter(post => post._id !== action.payload._id)
    default:
      return posts
  }
}

export default reducer;
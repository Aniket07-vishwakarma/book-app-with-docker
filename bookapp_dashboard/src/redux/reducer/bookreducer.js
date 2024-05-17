import {
  CREATE_FAVORITE,
  CREATE_FAVORITE_FAILURE,
  CREATE_FAVORITE_SUCCESS,
  CREATE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  FETCH_BOOKS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_SUCCESS,
  FETCH_FAVORITES,
  FETCH_FAVORITES_FAILURE,
  FETCH_FAVORITES_SUCCESS,
  FETCH_USER,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  DELETE_FAVORITE,
  DELETE_FAVORITE_FAILURE,
  DELETE_FAVORITE_SUCCESS,
  SEARCH_BOOKS,
} from "../action/booksaction";
let initState = {
  books: [],
  users: [],
  user: {},
  favorites: [],
  loading: true,
  success: false,
  login: false,
};
export const BookReducer = (state = initState, action) => {
  //console.log("IN PRODUCT REducer:" + JSON.stringify(action))
  console.log("Action Type is" + action.type + JSON.stringify(action));
  console.log("data Type is" + JSON.stringify(action.data));
  switch (action.type) {
    case FETCH_BOOKS:
    case CREATE_FAVORITE:
    case FETCH_FAVORITES:
    case CREATE_USER:
    case LOGIN_USER:
    case FETCH_USER:
    case SEARCH_BOOKS:
    case DELETE_FAVORITE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FAVORITES_SUCCESS:
      console.log("inside sucess", action.data);
      return {
        ...state,
        favorites: action.data.favoriteBooks,
        loading: false,
        login: true,
      };
    case DELETE_FAVORITE_SUCCESS:
      return {
        ...state,
        onSuccess: true,
        onFailure: false,
        loading: false,
      };
    case FETCH_BOOKS_SUCCESS:
      console.log("inside sucess", action.data);
      return {
        ...state,
        books: action.data,
        loading: false,
      };
    case CREATE_FAVORITE_SUCCESS:
      return {
        ...state,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        login: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        users: action.data,
        loading: false,
        login: true,
      };
    case DELETE_FAVORITE_FAILURE:
      return {
        ...state,
        onSuccess: true,
        onFailure: false,
        loading: false,
      };
    /* case FETCH_AUTHOR_SUCCESS:
             return {
                 ...state,
                 author: action.data.author,
             }
         case CREATE_AUTHOR_SUCCESS:
             return {
                 ...state,
             }
         case DELETE_AUTHOR_SUCCESS:
                 return {
                     ...state,  
                     loading: false,
 
                 }
         case EDIT_AUTHOR_SUCCESS:
                 return {
                     ...state,
 
                 }*/
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
      };
    case FETCH_BOOKS_FAILURE:
    case CREATE_FAVORITE_FAILURE:
    case FETCH_FAVORITES_FAILURE:
    case CREATE_USER_FAILURE:
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

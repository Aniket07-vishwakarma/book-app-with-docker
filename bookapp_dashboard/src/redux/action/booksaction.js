export const FETCH_BOOKS = "FETCH_BOOKS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_FAVORITES = "FETCH_FAVORITES";
export const FETCH_FAVORITES_FAILURE = "FETCH_FAVORITES_FAILURE";
export const FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS";
export const CREATE_FAVORITE = "CREATE_FAVORITE";
export const CREATE_FAVORITE_FAILURE = "CREATE_FAVORITE_FAILURE";
export const CREATE_FAVORITE_SUCCESS = "CREATE_FAVORITE_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
/*export const FETCH_AUTHOR = "FETCH_AUTHOR";
export const FETCH_AUTHOR_FAILURE = "FETCH_AUTHOR_FAILURE";
export const FETCH_AUTHOR_SUCCESS = "FETCH_AUTHOR_SUCCESS";
export const EDIT_AUTHOR = "EDIT_AUTHOR";
export const EDIT_AUTHOR_FAILURE = "EDIT_AUTHOR_FAILURE";
export const EDIT_AUTHOR_SUCCESS = "EDIT_AUTHOR_SUCCESS";*/
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const DELETE_FAVORITE_FAILURE = "DELETE_FAVORITE_FAILURE";
export const DELETE_FAVORITE_SUCCESS = "DELETE_FAVORITE_SUCCESS";
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const SEARCH_BOOKS = "SEARCH_BOOKS";

export const fetchBooks = () => {
  return {
    type: FETCH_BOOKS,
  };
};

export const fetchBooksSuccess = (data) => ({
  type: FETCH_BOOKS_SUCCESS,
  data,
});

export const fetchBooksFailure = () => ({ type: FETCH_BOOKS_FAILURE });
export const fetchFavorites = () => {
  return {
    type: FETCH_FAVORITES,
  };
};

export const fetchFavoritesSuccess = (data) => ({
  type: FETCH_FAVORITES_SUCCESS,
  data,
});

export const fetchFavoritesFailure = () => ({ type: FETCH_FAVORITES_FAILURE });
export const createFavorite = (
  { key, title, author },
  onSuccess,
  onFailure
) => {
  return {
    type: CREATE_FAVORITE,
    title,
    author,
    key,
    onSuccess,
    onFailure,
  };
};
export const createFavoriteSuccess = (data) => ({
  type: CREATE_FAVORITE_SUCCESS,
  data,
});

export const createFavoriteFailure = () => ({ type: CREATE_FAVORITE_FAILURE });
export const createUser = (
  { email, username, password },
  onSuccess,
  onFailure
) => {
  return {
    type: CREATE_USER,
    email,
    username,
    password,
    onSuccess,
    onFailure,
  };
};
export const createUserSuccess = (data) => ({
  type: CREATE_USER_SUCCESS,
  data,
});

export const createUserFailure = () => ({ type: CREATE_USER_FAILURE });
export const loginUser = (email, password) => {
  return {
    type: LOGIN_USER,
    payload: {
      email,
      password,
    },
  };
};
export const loginUserSuccess = (data) => ({ type: LOGIN_USER_SUCCESS, data });

export const loginUserFailure = () => ({ type: LOGIN_USER_FAILURE });
export const fetchUser = (email) => {
  return { type: FETCH_USER, email };
};
export const fetchUserSuccess = (data) => ({ type: FETCH_USER_SUCCESS, data });

export const fetchUserFailure = () => ({ type: FETCH_USER_FAILURE });
export const deleteFavorite = ({ key, onSuccess, onFailure }) => {
  return {
    type: DELETE_FAVORITE,
    key,
    onSuccess,
    onFailure,
  };
};
export const deleteFavoriteSuccess = () => ({ type: DELETE_FAVORITE_SUCCESS });

export const deleteFavoriteFailure = () => ({ type: DELETE_FAVORITE_FAILURE });

export const searchBooks = ({ searchBy, searchText, onSuccess, onFailure }) => {
  return {
    type: SEARCH_BOOKS,
    searchBy,
    searchText,
    onSuccess,
    onFailure,
  };
};
/*export const fetchAuthor = (id) => {
    return {type: FETCH_AUTHOR,
    id
    };
}
export const fetchAuthorSuccess = data => ({ type: FETCH_AUTHOR_SUCCESS, data });

export const fetchAuthorFailure = () => ({ type: FETCH_AUTHOR_FAILURE });
export const editAuthor= (id,name, ) => {
    return {
        type: EDIT_AUTHOR,
        payload:{
        id,
        name},
    };
}
export const editAuthorSuccess = data => ({ type: EDIT_AUTHOR_SUCCESS, data });

export const editAuthorFailure = () => ({ type: EDIT_AUTHOR_FAILURE });
export const deleteAuthor= (id) => {
    return {
        type: DELETE_AUTHOR,        
       payload:{id} ,
    };
}
export const deleteAuthorSuccess = () => ({ type: DELETE_AUTHOR_SUCCESS });

export const deleteAuthorFailure = () => ({ type: DELETE_AUTHOR_FAILURE });*/

import { call, put, takeLatest } from "redux-saga/effects";
/*import { CREATE_AUTHOR, deleteAuthorFailure, deleteAuthorSuccess, DELETE_AUTHOR, editAuthorFailure, editAuthorSuccess, EDIT_AUTHOR , fetchAuthorSuccess } from '../action/authoraction';*/
import {
  FETCH_BOOKS,
  fetchBooksFailure,
  fetchBooksSuccess,
  CREATE_FAVORITE,
  createFavoriteSuccess,
  createFavoriteFailure,
  FETCH_FAVORITES,
  fetchFavoritesSuccess,
  fetchFavoritesFailure,
  CREATE_USER,
  LOGIN_USER,
  loginUserSuccess,
  loginUserFailure,
  fetchUserSuccess,
  fetchUserFailure,
  FETCH_USER,
  DELETE_FAVORITE,
  deleteFavoriteSuccess,
  deleteFavoriteFailure,
  SEARCH_BOOKS,
  searchBooks,
} from "../action/booksaction";
import api from "../api/bookapi";
import swal from "sweetalert2";
function* getBooks() {
  try {
    const bookslist = yield call(api.books);
    const data = bookslist.docs;
    console.log("data is from Sage", data);
    yield put(fetchBooksSuccess(data));
  } catch (error) {
    console.log("Author Fetch Error");
    yield put(fetchBooksFailure());
    console.error(error);
  }
}
function* getFavorites() {
  try {
    const data = yield call(api.favorites);
    console.log("data is from Sage", data);
    yield put(fetchFavoritesSuccess(data));
  } catch (error) {
    console.log("Author Fetch Error");
    yield put(fetchFavoritesFailure());
    console.error(error);
  }
}
function* createFavorite(action) {
  const { onSuccess, onFailure } = action;
  try {
    const { title, key, author } = action;
    let { data } = yield call(api.addfavorite, { title, author, key });
    console.log("data is", title, key);
    onSuccess(data);
  } catch (err) {
    console.log("Autho add Error");
    onFailure(err);
  }
}
function* createUser(action) {
  const { onSuccess, onFailure } = action;
  try {
    const { email, username, password } = action;
    console.log(
      "inside saga add" + JSON.stringify(email),
      JSON.stringify(username),
      JSON.stringify(password)
    );
    let data = yield call(api.addUser, { email, username, password });
    onSuccess(data);
    //fetchproductsSuccess = (data) => ({type:FETCH_PRODUCTS_SUCCESS,data})
  } catch (err) {
    console.log("create user add Error");
    onFailure(err);
  }
}
function* loginUser(action) {
  try {
    const { email, password } = action.payload;
    console.log("email and password ", email, password);
    let { data } = yield call(api.loginuser, email, password);
    let result = data.success;
    if (result == true) {
      new swal({
        title: "Success!",
        text: "Login successfully!!",
        icon: "success",
        button: "Aww yiss!",
      });
      // alert('login sucessfully')
      yield put(loginUserSuccess());
    } else {
      new swal("Opps!!", "Login failed.....");
      yield put(loginUserFailure());
    }
  } catch (err) {
    console.log("Products delete Error");
    // yield put(deleteUserFailure());
  }
}
function* getUser(action) {
  const { id } = action;
  console.log("Id from sage" + id);
  try {
    const data = yield call(api.getUser, id);
    console.log("data return from api" + JSON.stringify(data));
    yield put(fetchUserSuccess(data));
    //fetchproductsSuccess = (data) => ({type:FETCH_PRODUCTS_SUCCESS,data})
  } catch (err) {
    console.log("Products get Error");
    yield put(fetchUserFailure());
  }
}
function* deleteFavorite(action) {
  try {
    console.log("action.....................", action);
    const { key } = action;
    let { data } = yield call(api.removeFavorite, { key });
    console.log("data is", data, key);
    yield put(deleteFavoriteSuccess());
  } catch (err) {
    console.log(err);
    yield put(deleteFavoriteFailure(err));
  }
}

function* searchBooksFn(action) {
  try {
    console.log("action.....................", action);
    const { searchBy, searchText } = action;
    let { data } = yield call(api.searchBooks, { searchBy, searchText });
    console.log("data is..................", data, searchBy);
    yield put(fetchBooksSuccess(data));
  } catch (error) {
    console.log("Author Fetch Error");
    yield put(fetchBooksFailure());
    console.error(error);
  }
}
/*function* getAuthor(action) {
    const {id} = action
    try {
        
        const  data = yield call(api.getauthor,id);
        console.log("data return from api"+ JSON.stringify(data))
        yield put(fetchAuthorSuccess(data));
    } catch (err) {
        console.log("Author get Error")
        yield put(fetchAuthorFailure());
    }
}
function* editAuthor(action) {
    try {
        const {id,  name} = action.payload;
        let data = yield call(api.editauthor, id, name);
        yield put(editAuthorSuccess(data));
        //fetchproductsSuccess = (data) => ({type:FETCH_PRODUCTS_SUCCESS,data})
    } catch (err) {
        console.log("Author edit Error")
        yield put(editAuthorFailure());
    }
}
function* deleteAuthor(action) {
    console.log("inside delete "+ JSON.stringify(action))
    try {
        const {id} = action.payload
        console.log("id inside saga id", id)
        let {data} = yield call(api.deleteauthor, id);
        yield put(deleteAuthorSuccess());
        //fetchproductsSuccess = (data) => ({type:FETCH_PRODUCTS_SUCCESS,data})
    } catch (err) {
        console.log("Products delete Error")
        yield put(deleteAuthorFailure());
    }
}*/
export default function* BookSaga() {
  yield takeLatest(FETCH_BOOKS, getBooks);
  yield takeLatest(CREATE_FAVORITE, createFavorite);
  yield takeLatest(FETCH_FAVORITES, getFavorites);
  yield takeLatest(CREATE_USER, createUser);
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(FETCH_USER, getUser);
  yield takeLatest(DELETE_FAVORITE, deleteFavorite);
  yield takeLatest(SEARCH_BOOKS, searchBooksFn);
  /* yield takeLatest(FETCH_AUTHOR, getAuthor);
     yield takeLatest(EDIT_AUTHOR, editAuthor);
     yield takeLatest(DELETE_AUTHOR, deleteAuthor);*/
}

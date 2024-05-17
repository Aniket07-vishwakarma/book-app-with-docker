import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BookCard from "./bookcard";
import { fetchBooks } from "../action/booksaction";
import { Row } from "react-bootstrap";
//import { FadeLoader } from "react-spinners";
import { NavLink as Link } from "react-router-dom";
//import './table.css'

function BookListRedux() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.BookReducer.loading);
  const books = useSelector((state) => state.BookReducer.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (loading) return <div>loading...</div>;
  //if (products.length === 0 && !loading) return <div> No Products or Cant fetch from server </div>
  return (
    <div className="container border">
      <Row xs={1} md={2} lg={3} className="g-4">
        {books && books.map((book) => <BookCard key={book.key} book={book} />)}
      </Row>
    </div>
  );
}
export default BookListRedux;

import axios from "axios";
import { NavLink as Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import swal from "sweetalert2";
import book1 from "./images/book1.jpg";
import book2 from "./images/book2.jpg";
import book3 from "./images/book3.jpg";
import book4 from "./images/book4.jpg";
import book5 from "./images/book5.jpg";
// import {IoIosHeart} from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux";
//import './table.css'
import { useNavigate } from "react-router-dom";
import "./book.css";
import {
  createFavorite,
  createFavoriteFailure,
  createFavoriteSuccess,
} from "../action/booksaction";
export const BookCard = ({ book }) => {
  var randomImage = [book1, book2, book3, book4, book5];
  let number = Math.floor(Math.random() * randomImage.length);
  //console.log("checking", book.isbn[0])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSuccess = (data) => {
    console.log("IN ADD EDIT SUCCESS" + JSON.stringify(data));

    dispatch(createFavoriteSuccess());
    swal.fire({
      position: "top",
      icon: "success",
      title: "Favorite Added Successful",
      customClass: "height-40vh",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/books");
  };
  const onFailure = (data) => {
    console.log("this from failure");
    dispatch(createFavoriteFailure());
    // swal.fire({
    //   position: 'top',
    //   icon: 'success',
    //   title: 'Faied To Add ',
    //   customClass: 'height-40vh',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
    new swal("Failed to add!!", "Please login first.");
    navigate("/books");
  };
  async function addFavorite(title, key) {
    console.log("favorite list", title, key);
    dispatch(createFavorite({ title, key }, onSuccess, onFailure));
  }

  return (
    <div>
      {" "}
      <Col>
        <div className="card-group mt-4">
          <div className="card border-dark">
            <img
              src={randomImage[number]}
              className="card-img-top"
              alt="..."
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">{book.title_suggest}</p>
            </div>
            <div className="card-footer">
              <button
                className="text-muted fb-ic border-0"
                onClick={() => addFavorite(book.title, book.key)}
              >
                <i className="fa fa-heart fa-lg text-danger mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};
export default BookCard;

import { Card, Col } from "react-bootstrap";
import swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosHeartDislike } from "react-icons/io";
import { deleteFavorite } from "../action/booksaction";
import book1 from "./images/images/book1.jpg";
import book2 from "./images/images/book2.jpg";
import book3 from "./images/images/book3.jpg";
import book4 from "./images/images/book4.jpg";
import book5 from "./images/images/book5.jpg";

export const FavoriteCard = ({ favorite }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function deleteConfirmation(bookId) {
    let isRemove = await new swal({
      title: " Confirm?",
      text: "Remove book from favorite.",
      type: "warning message",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Confirm, remove it!",
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false,
    });
    if (isRemove.isConfirmed) {
      let key = bookId.split("/").slice(-1)[0];
      await dispatch(
        deleteFavorite({ key, onSuccess: true, onFailure: false })
      );
      navigate("/favorites");
      window.location.reload(false);
    }
  }
  let randomImage = [book1, book2, book3, book4, book5];
  let number = Math.floor(Math.random() * randomImage.length);
  return (
    <div>
      <Col className="mt-4">
        <Card style={{ width: "18rem" }} className="shadow-sm border-dark">
          <Card.Img variant="top" src={randomImage[number]} height="250px" />
          <Card.Body>
            <Card.Title>{favorite.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {favorite.title_suggest}
            </Card.Subtitle>
            <Card.Link
              style={{ textDecoration: "none" }}
              className="mb-4"
              onClick={() => deleteConfirmation(favorite.key)}
            >
              <button type="button" className="btn btn-outline-info btn-sm">
                <IoIosHeartDislike />
                Remove
              </button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
export default FavoriteCard;

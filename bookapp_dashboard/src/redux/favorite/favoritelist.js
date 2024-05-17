import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteCard from "./favoritecard";
import { fetchFavorites } from "../action/booksaction";
import { Row } from "react-bootstrap";
//import { FadeLoader } from "react-spinners";
import { NavLink as Link } from "react-router-dom";
//import './table.css'

function FavoriteListRedux() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.BookReducer.loading);
  const favorites = useSelector((state) => state.BookReducer.favorites);
  console.log(JSON.stringify(favorites));

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  if (loading) return <div>loading...</div>;
  //if (products.length === 0 && !loading) return <div> No Products or Cant fetch from server </div>
  return (
    <div className="container border">
      <Row xs={1} md={2} lg={3} className="g-4">
        {favorites &&
          favorites.map((favorite) => (
            <FavoriteCard key={favorite.key} favorite={favorite} />
          ))}
      </Row>
    </div>
  );
}
export default FavoriteListRedux;

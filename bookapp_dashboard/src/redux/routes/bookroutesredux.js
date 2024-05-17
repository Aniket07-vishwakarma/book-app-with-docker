import { Route, Routes } from "react-router-dom";
import BookListRedux from '../books/booklist'
import FavoriteListRedux from "../favorite/favoritelist";
import { LoginUser } from "../user/Login";
import { Signup } from "../user/Signup";
export default function BookRoutesRedux() {
    return (
        <Routes>
            <Route path="/authors" element={<BookListRedux />} />
            <Route path="/favorites" element={<FavoriteListRedux />} />
            <Route path="/" element={<BookListRedux />} />
            <Route path="/books" element={<BookListRedux />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>

    )
}
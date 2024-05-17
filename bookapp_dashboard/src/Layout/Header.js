// import { nav } from 'react-bootstrap'
// import { Navbar } from "./Navbar"
// import { useDispatch, useSelector } from 'react-redux'
// import { useState } from "react";
// import { searchBooks } from '../redux/action/booksaction';
// import swal from 'sweetalert2';

// export const Header = () => {
//     const dispatch = useDispatch();
//     const books = useSelector(state => state.BookReducer.books)
//     const [frontendName, setFrontendName] = useState("");
//     const [searchBy, setSearchBy] = useState("");
//     const [edFrontend, setSearchedFrontend] = useState(
//         "Search"
//     );

//     const onClickSearchBy = () => {
//         setSearchBy(document.getElementById("searchBy").value)
//     }

//     const SearchFrontendName = () => {
//         if (frontendName && searchBy) {
//             dispatch(searchBooks({ searchBy: searchBy, searchText: frontendName, onSuccess: true, onFailure: false }))
//         } else if(!searchBy) {
//             new swal("Oops!!", "Please select Search By option.")
//         } else {
//             new swal("Oops!!", "Books not found.");

//         }
//     };
//     const login = useSelector(state => state.BookReducer.login)
//     console.log(login)
//     if (login) {
//         return (
//             <div>
//                 <nav id="navbar-example2" className="navbar navbar-light px-3" style={{ background: 'yellow' }}>
//                     <a className="navbar-brand" href="#">BookStore</a>
//                     <form class="d-flex">
//                         <input class="form-control me-2" type="search" placeholder="Search" onChange={event => setFrontendName(event.target.value)}
//                             value={frontendName} aria-label="Search" />
//                         <select name="searchBy" id="searchBy" type="dropdown" className='btn btn-outline-light' onChange={(() => onClickSearchBy())}>
//                             <option>Search by</option>
//                             <option value="author">Author</option>
//                             <option value="title">Title</option>
//                         </select>
//                         <span><button type="button" className='btn btn-outline-light ms-2' onClick={() => SearchFrontendName()}>Search</button></span>

//                     </form>
//                     <ul className="nav nav-pills">
//                         <li className="nav-item">
//                             <a className="nav-link" href="/login">Loggedin</a>
//                         </li>
//                     </ul>
//                 </nav>
//                 <nav>
//                     <Navbar />
//                 </nav>
//             </div>
//         )
//     }
//     else {
//         return (
//             <div>
//                 <nav id="navbar-example2" className="navbar navbar-light px-3" style={{ background: 'yellow' }}>
//                     <a className="navbar-brand" href="#">BookStore</a>
//                     <form class="d-flex">
//                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <span><button type="button" className='btn btn-outline-dark'>Search</button></span>
//                     </form>
//                     <ul className="nav nav-pills">
//                         <li className="nav-item">
//                             <a className="nav-link" href="/login">Login</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/Signup">Signup</a>
//                         </li>
//                     </ul>
//                 </nav>
//                 <nav>
//                     <Navbar />
//                 </nav>
//             </div>
//         )
//     }
// }

import { nav } from "react-bootstrap";
import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchBooks } from "../redux/action/booksaction";
import swal from "sweetalert2";

export const Header = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.BookReducer.books);
  const navigate = useNavigate();
  const [frontendName, setFrontendName] = useState("");
  const [searchedFrontend, setSearchedFrontend] = useState("Search");
  const [searchBy, setSearchBy] = useState("");

  const onClickSearchBy = () => {
    setSearchBy(document.getElementById("searchBy").value);
  };
  // const searchFrontendName = () => {
  //     if (books.includes(frontendName)) {
  //         setSearchedFrontend(frontendName);
  //     } else {
  //         setSearchedFrontend("No results Found");
  //     }
  // };

  const SearchFrontendName = () => {
    if (frontendName && searchBy) {
      dispatch(
        searchBooks({
          searchBy: searchBy,
          searchText: frontendName,
          onSuccess: true,
          onFailure: false,
        })
      );
    } else if (!searchBy) {
      new swal("Oops!!", "Please select Search By option.");
    } else {
      new swal("Oops!!", "Books not found.");
    }
  };
  const login = useSelector((state) => state.BookReducer.login);
  const name = useSelector((state) => state.BookReducer.user);
  console.log(` length ${name.length} name  ${name} `);
  if (name) var username = name;
  else username = "";
  console.log("name data", JSON.stringify(name));
  console.log(login);
  if (login) {
    return (
      <div>
        <nav
          id="navbar-example2"
          className="navbar navbar-light px-3"
          style={{ background: "black" }}
        >
          <a className="navbar-brand" href="/books">
            <b style={{ color: "white" }}>BookStore</b>
          </a>
          <form class="d-flex" style={{ margin: "0px -175px 0px 0px" }}>
            <input
              class="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              onChange={(event) => setFrontendName(event.target.value)}
              value={frontendName}
              aria-label="Search"
            />
            <select
              name="searchBy"
              id="searchBy"
              type="dropdown"
              className="btn btn-outline-light btn-sm"
              onChange={() => onClickSearchBy()}
            >
              <option>Search by</option>
              <option value="author">Author</option>
              <option value="title">Title</option>
            </select>
            <span>
              <button
                type="button"
                className="btn btn-outline-light btn-sm ms-2"
                onClick={() => SearchFrontendName()}
              >
                Search
              </button>
            </span>
          </form>
          <ul className="nav nav-pills">
            <li className="nav-item ">
              <a
                className="nav-link"
                style={{ color: "white" }}
                href="/favorites"
              >
                <b style={{ fontSize: "25px" }}>
                  <AiFillHeart />
                </b>{" "}
                Favorites{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "white" }} href="/login">
                Welcome {`${name.length}` > 0 ? `${name}` : ""}
                <b style={{ fontSize: "25px" }}>
                  <RiLogoutBoxLine />
                </b>
                LogOut{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav
          id="navbar-example2"
          className="navbar navbar-light px-3"
          style={{ background: "black" }}
        >
          <a className="navbar-brand" href="#">
            <b style={{ color: "white" }}>BookStore</b>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link " style={{ color: "white" }} href="/login">
                {" "}
                <b style={{ fontSize: "25px" }}>
                  <FiLogIn />
                </b>
                Login{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "white" }} href="/Signup">
                <b style={{ fontSize: "25px" }}>
                  <IoIosContact />
                </b>
                SignUp{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

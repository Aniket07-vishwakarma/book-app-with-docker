import { Navbar } from "../Navbar";
import { Header } from "../Header";
import BookRoutesRedux from "../../redux/routes/bookroutesredux";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import { BrowserRouter as Router } from "react-router-dom";
import LoginRoutes from "./loginroutes";

export const LayoutRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <BookRoutesRedux />
      </Router>
    </div>
  );
};

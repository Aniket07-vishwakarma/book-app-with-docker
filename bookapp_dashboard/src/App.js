import "./App.css";
import Footer from "./Layout/Footer";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { LayoutRoutes } from "./Layout/routes/Layoutroutes";
import BookRoutesRedux from "./redux/routes/bookroutesredux";
import { Navbar } from "./Layout/Navbar";
import { Header } from "./Layout/Header";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LayoutRoutes />
      </Provider>
    </div>
  );
}

export default App;

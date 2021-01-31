import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CardPage from "./pages/CardPage";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import Switch from "react-bootstrap/esm/Switch";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./components/common/Footer";
import ProductPage from "./pages/ProductPage";
import MemberPage from "./pages/MemberPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <ProductListPage />
        </Route>
        <Route path={`/shop/:productId`} exact>
          <ProductPage />
        </Route>
        <Route path="/card" exact>
          <CardPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/member" exact>
          <MemberPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/">
        <HomePage />
      </Route>
    </BrowserRouter>
  );
};

export default App;

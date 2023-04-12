// libs
import { BrowserRouter, Routes, Route } from "react-router-dom";

// composants
import Accueil from "./pages/Accueil";
import Panier from "./pages/Panier";
import Articles from "./pages/Articles";

// données dummy
import { users } from "./dummy_data/users";
import { products } from "./dummy_data/products";

// variables globales
import { context } from "./context";

const user = {};
const basket = [];

const App = () => {
  return (
    <context.Provider value={{ user, users, products, basket }}>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Accueil />} />
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/panier" element={<Panier />} />
        <Route exact path="/articles/:articleId" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  </context.Provider>
  );
};

export default App;

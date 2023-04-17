// libs
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// contexte global
import { context } from "./context";

// composants
import Accueil from "./pages/Accueil";
import Panier from "./pages/Panier";
import Articles from "./pages/Articles";

// variables globales
import { users } from "./dummy_data/users";
import { products } from "./dummy_data/products";


const App = () => {
  const [user, setUser] = useState({});
  const [basket, setBasket] = useState([]);

  return (
    <context.Provider value={{ user, setUser, users, products, basket, setBasket }}>
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

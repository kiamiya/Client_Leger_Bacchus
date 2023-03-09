import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Panier from "./pages/Panier";
import Articles from "./pages/Articles";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Accueil />} />
      <Route exact path="/" element={<Accueil />} />
      <Route exact path="/panier" element={<Panier />} />
      <Route exact path="/articles/:articleId" element={<Articles />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;

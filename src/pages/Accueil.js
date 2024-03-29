// libs
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// contexte global
import { context } from "../context";

// composants
import Header from "./../components/Header";
import Footer from "./../components/Footer";


const Accueil = () => {
  // variable globale
  const { products } = useContext(context);
  
  const [family, setFamily] = useState("tous");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/*
        <dialog id="connect-modal">
          <article>
            <header>
              <a href="#close" aria-label="Close" class="close" data-target="connect-modal"
                onClick="toggleModal(event)"></a>
              Créez un compte :
            </header>
            <form action="">
              <label for="email">email :</label><br />
              <input type="text" id="email" name="email" /><br />
              <label for="password1">Mot de passe :</label><br />
              <input type="password" id="password1" name="password1" /><br />
              <label for="password2">Confirmez le mot de passe :</label><br />
              <input type="password" id="password2" name="password2" /><br />
              <input type="submit" value="Submit" />
            </form>
          </article>
        </dialog>
        */}
        <form>
          <label htmlFor="search">Rechercher :</label><br />
          <input type="search" id="search" name="search" value={search} onChange={(e) => {setSearch(e.target.value)}} /><br />
          <label htmlFor="family">Sélectionner une famille :</label>
          <select name="family" id="family" onChange={(e) => {setFamily(e.target.value);}}>
            <option value="tous">Toutes</option>
            <option value="Vin rouge">Rouges</option>
            <option value="Vin blanc">Blancs</option>
            <option value="Vin rosé">Rosés</option>
          </select>
          <label htmlFor="order">Trier</label><br />
          <input type="checkbox" id="order" name="order" value="" onClick={(e) => {setSort(e.target.checked)}} /><br />
        </form>
        <h2>Nos produits :</h2>
        <section>
          {
          products
            // filtre sur les familles
            // aucun filtre si valeur "tous"
            .filter((product) => {
              return family === "tous" ? true : product["type"] === family;
            })
            // filtre sur le texte de recherche
            // aucun filtre si texte vide
            .filter((product) => {
              return search === "" ? true : product["name"].toLowerCase().includes(search.toLowerCase());
            })
            // tri si sort == vrai
            .sort((product1, product2) => {
              return sort ? product1["name"] > product2["name"] : 0;
            })
            // génère une carte pour chaque vin de la liste finale
            .map((product) => {
              return (
              <article key={product["id"]}>
                <h3>{product["name"]}</h3>
                <p>{product["type"]}</p>
                <p>Année : {product["year"]}</p>
                <img src={`../images/${product["imageFileName"]}`} alt={product["imageAlt"]} />
                <p>prix : {product["price"].toFixed(2).replace(".", "€")}</p>
                <p><Link to={`/articles/${product["id"]}`}>Voir fiche produit</Link></p>
              </article> 
              );
            })
          }
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Accueil;

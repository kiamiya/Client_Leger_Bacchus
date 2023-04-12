// libs
import { useContext } from "react";

// composants
import Header from "./../components/Header";
import Footer from "./../components/Footer";

// contexte global
import { context } from "../context";


const Accueil = () => {
  // variable globale
  const { products } = useContext(context);

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
        <form>
          <label for="search">Rechercher :</label><br />
          <input type="search" id="search" name="search" value="" /><br />
          <label for="family">Sélectionner une famille :</label>
          <select name="family" id="family">
            <option value="tous">Toutes</option>
            <option value="rouges">Rouges</option>
            <option value="blancs">Blancs</option>
            <option value="rosés">Rosés</option>
            <option value="pétillants">Pétillants</option>
            <option value="digestifs">Digestifs</option>
          </select>
        </form>
        */}
        <section>
          <h2>Nos produits :</h2>
          {products.map((product) => {
            return (
            <article key={product["id"]}>
              <h3>{product["intitule"]}</h3>
              <p>{product["type"]}</p>
              <p>Année : {product["annee"]}</p>
              <img src={`../images/${product["image source"]}`} alt={product["image alt"]} />
              <p>prix : {product["prix"]}</p>
              <p><a href={`/articles/${product["id"]}`}>Voir fiche produit</a></p>
            </article> 
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Accueil;

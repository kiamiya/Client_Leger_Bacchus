// libs
import { useContext } from "react";
import { useParams } from "react-router-dom";

// composants
import Header from "./../components/Header";
import Main from "./../components/Main";
import Footer from "./../components/Footer";

// contexte global
import { context } from "../context";


const Articles = () => {
  // paramètre passé dans l'URL
  const { articleId } = useParams();

  // variable globale
  const { products } = useContext(context);

  // récupère l'index du produit dont l'id correspond à celui de l'URL
  const productIndex = products.findIndex((element) => element["id"] === articleId);

  return (
    <>
      <Header />
      <Main />
      <section>
        {productIndex === -1 ? (
        <article>
          <p>Aucun article avec cet identifiant.</p>
          <p>Cliquez <a href="accueil">ici</a> pour revenir à l'accueil.</p>
        </article>
        ) : (
        <article>
          <h3>{products[productIndex]["intitule"]}</h3>
          <p>{products[productIndex]["type"]}</p>
          <p>Année : {products[productIndex]["annee"]}</p>
          <p>{products[productIndex]["alcool"]}</p>
          <p>{products[productIndex]["contenance"]}</p>
          <p>
            <strong>{products[productIndex]["description strong"]}</strong><br />
            {products[productIndex]["description"]}
          </p>
          <img src={`../images/${products[productIndex]["image source"]}`} alt={products[productIndex]["image alt"]} />
          <footer>
            <p>prix : {products[productIndex]["prix"]}</p>
            <form>
              <label for="quantity">Quantité :</label><br />
              <input type="number" id="quantity" name="quantity" value="1" step="1" min="1" max="100" /><br />
              <button>Ajouter au panier</button>
            </form>
          </footer>
        </article>
        )}
      </section>
      <Footer />
    </>
  );
};
export default Articles;
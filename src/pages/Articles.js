// libs
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

// contexte global
import { context } from "../context";

// composants
import Header from "./../components/Header";
import Footer from "./../components/Footer";


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
      <section>
        {productIndex === -1 ? (
        <article>
          <p>Aucun article avec cet identifiant.</p>
          <p>Cliquez <Link to="accueil">ici</Link> pour revenir à l'accueil.</p>
        </article>
        ) : (
        <article>
          <h3>{products[productIndex]["name"]}</h3>
          <p>{products[productIndex]["type"]}</p>
          <p>Année : {products[productIndex]["year"]}</p>
          <p>{products[productIndex]["alcool"]}</p>
          <p>{products[productIndex]["volume"]}</p>
          <p>
            <strong>{products[productIndex]["descriptionShort"]}</strong><br />
            {products[productIndex]["descriptionLong"]}
          </p>
          <img src={`../images/${products[productIndex]["imageFileName"]}`} alt={products[productIndex]["imageAlt"]} />
          <footer>
            <p>prix : {products[productIndex]["price"]}</p>
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
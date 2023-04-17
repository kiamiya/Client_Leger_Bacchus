// libs
import { useContext } from "react";
import { Link } from "react-router-dom";

// contexte global
import { context } from "../context";

// composants
import Header from "./../components/Header";
import Footer from "./../components/Footer";


const Panier = () => {
  // variable globale
  const { basket } = useContext(context);

  const total = 0.00;

  return (
    <>
      <Header />
      <section>
        <h2>Votre panier :</h2>
        {basket.length < 1 ? (
          <p>Votre panier est vide</p>
        ) : (
          basket.map((item) => {
            return (
              <article key={item["id"]}>
                <h3>{item["name"]}</h3>
                <p>Prix : {item["price"]}</p>
                <p>Quantité : {item["quantity"]}</p>
                <p>Total : {item["total"]}</p>
                <p><Link to={`/articles/${item["id"]}`}>Voir fiche produit</Link></p>
              </article> 
            );
          })
        )}
        <p>TOTAL DE VOTRE PANIER : {total}€</p>
      </section>
      <Footer />
    </>
  );
};

export default Panier;

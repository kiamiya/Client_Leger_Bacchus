import Header from "./../components/Header";
import Footer from "./../components/Footer";

const Accueil = () => {
  return (
    <>
      <Header />
      <main>
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
    <section>
      <h2>Nos produits :</h2>
      <article onClick={() => {window.location="/articles/tariquet2021";}}>
        <h3>CLASSIC 2021 - DOMAINE TARIQUET</h3>
        <p>Vin blanc</p>
        <p>Année : 2021</p>
        <img src="./images/classic-2021-domaine-tariquet.png" alt="Bouteille de vin Tariquet Classic 2021" />
        <footer>
          <p>prix : 7€65</p>
        </footer>
      </article>
      <article onClick={() => {window.location="harmoniedegascogneblanc2022domainepellehaut.html";}}>
        <h3>HARMONIE DE GASCOGNE BLANC 2022 - DOMAINE PELLEHAUT</h3>
        <p>Vin blanc</p>
        <p>Année : 2022</p>
        <img src="./images/harmonie-de-gascogne-blanc-2022-domaine-pellehaut.png"
          alt="Bouteille de vin Harmonie de Gascogne Blanc 2022" />
        <footer>
          <p>prix : 9€20</p>
        </footer>
      </article>
      <article onClick={() => {window.location="leclat2021domainedejoy.html";}}>
        <h3>L'ÉCLAT 2021 - DOMAINE DE JOŸ</h3>
        <p>Vin blanc</p>
        <p>Année : 2021</p>
        <img src="./images/l-eclat-2021-domaine-de-joy.png" alt="Bouteille de vin L'éclat 2021 - Domaine de Joÿ" />
        <footer>
          <p>prix : 7€60</p>
        </footer>
      </article>
      <article onClick={() => {window.location="montagnenoire2021chateauauzias.html";}}>
        <h3>MONTAGNE NOIRE 2021 - CHATEAU AUZIAS</h3>
        <p>Vin rouge</p>
        <p>Année : 2021</p>
        <img src="./images/montagne-noire-2021-chateau-auzias.png"
          alt="Bouteille de vin Montagne Noire 2021 - Chateau Auzias" />
        <footer>
          <p>prix : 6€90</p>
        </footer>
      </article>
      <article onClick={() => {window.location="ubybyorose262021domaineuby.html";}}>
        <h3>UBY BYO ROSE N°26 2021 - DOMAINE UBY</h3>
        <p>Vin rosé</p>
        <p>Année : 2021</p>
        <img src="./images/uby-byo-rose-n26-2021-domaine-uby.png"
          alt="Bouteille de vin Uby Byo Rosé N°26 2021 - Domaine Uby" />
        <footer>
          <p>prix : 7€90</p>
        </footer>
      </article>
    </section>
  </main>
      <Footer />
    </>
  );
};
export default Accueil;

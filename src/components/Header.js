// libs
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <h1>Negosud</h1>
          </li>
        </ul>
        <ul>
          <li><Link to="signup">Inscription</Link></li>
          <li><Link to="signin">Connexion</Link></li>
          <li><Link to="panier">Panier</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
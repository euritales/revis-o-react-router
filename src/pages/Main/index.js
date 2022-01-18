import { Link } from "react-router-dom";
import "./styles.css";

function Main() {
  return (
    <div className="container-main">
      <div className="flex-row header-main">
        <h2>LOGO</h2>
        <button className="btn-dark-blue">Entrar</button>
      </div>
      <div className="card-main">
        <h1>Alugue seu filme favorito com um só click! (;</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta
          officiis aperiam et vero illum modi fuga, nemo, iusto, repellat
          adipisci autem nobis! Reiciendis, neque officia? Molestias iusto
          maxime quas.
        </p>
      </div>
      <br />
      <Link to="/signin">Login</Link>
      <br />
      <Link to="/signup">Cadastro</Link>
    </div>
  );
}

export default Main;

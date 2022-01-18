import "./styles.css";
import "../../styles/form.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="container-form">
      <form className="form-sign-in" action="">
        <div className="text-center mb-lg">
          <h1>Entrar</h1>
        </div>
        <div>
          <div className="flex-column">
            <label placeholder="Digite seu email" htmlFor="email">
              Email
            </label>
            <input type="text" name="email" id="email" />
            <label placeholder="Digite sua senha" htmlFor="password">
              Senha
            </label>
            <input type="password" name="password" id="password" />
          </div>
          <p>Novo por aqui?</p>
          <Link to="/signup">Cadastre-se já!</Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

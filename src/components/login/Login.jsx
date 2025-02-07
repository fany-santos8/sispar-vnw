import "react";
//import Capa from "../../assets/Tela de Login/imagem tela de login.png"
import Logo from "../../assets/Tela de Login/logo-ws.png"

function Login() {
  return (
    <main>
      <section id="background-navio">
      <p>Reservado para a imagem</p>
      </section>

      <section>
        <img src={Logo} alt="Logo" />
        <div id="container-titler">
        <h1>Boas Vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>
        <form action="#">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          ></input>
          <input
            type="senha"
            name="senha"
            id="senha"
            placeholder="Senha"
          ></input>

          <a href="#" rel="noopener noreferrer">Esqueci minha senha</a>

          <div id="button-container">
          <button id="entrar">Entrar</button>
          <button>Criar conta</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;

import "./register.css"

export default function register() {
  return (
    <div className="register">
        <span className="registerTitle">Registrar</span>
      <form className="registerForm">
        <label>Nome</label>
        <input type="text" className="registerInput" placeholder="Seu nome..." />
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Entre com seu Email..." />
        <label>Senha</label>
        <input type="password" className="registerInput"  placeholder="Entre com sua Senha..."/>
        <button className="registerButton">Registrar</button>
      </form>
      <button className="registerLoginButton">Login</button>

    </div>
  )
}

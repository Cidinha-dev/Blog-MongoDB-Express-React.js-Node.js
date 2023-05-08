import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Entre com seu Email..." />
        <label>Senha</label>
        <input type="password" className="loginInput"  placeholder="Entre com sua Senha..."/>
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegistreButton">Registre</button>

    </div>
  )
}

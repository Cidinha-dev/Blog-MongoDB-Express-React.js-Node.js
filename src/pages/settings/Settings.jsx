import "./settings.css"
import SideBar from "../../components/sidebar/SideBar"

export default function Settings() {
  return (
    <div className="settings">

      <div className="settingsWrapper">

        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Atualize sua Conta</span>
          <span className="settingsDeleteTitle">Delete sua Conta </span>
        </div>

        <form className="settingsForm">
          <label>Foto de Perfil</label>
          <div className="settingsPP">

            <img 
             src="https://images.pexels.com/photos/5717972/pexels-photo-5717972.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=450" className="writeImg" alt="" 
            />

            <label htmlFor="fileInput">
              <i class=" settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            
          </div>

          <label>Nome de Usuário</label>
          <input type="text" placeholder="Nome" />
          <label>Email</label>
          <input type="email" placeholder="email@email.com" />
          <label>Senha</label>
          <input type="password"placeholder="......"/>
          <button className="settingsSubmit">Atualizar</button>
        </form>

      </div>
      <SideBar />

    </div> 
  )
}

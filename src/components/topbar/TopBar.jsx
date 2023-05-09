import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i class="topIcons fa-brands fa-square-facebook"></i>
            <i class="topIcons fa-brands fa-square-pinterest"></i>
            <i class="topIcons fa-brands fa-square-twitter"></i>
            <i class="topIcons fa-brands fa-square-instagram"></i>
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">SOBRE</li>
                <li className="topListItem">DOCUMENTARIOS</li>
                <li className="topListItem">ARTIGOS</li>
                <li className="topListItem">SAIR</li>
            </ul>
        </div>
        <div className="topRight">
            <img className='topImg'
            src="https://i.pinimg.com/236x/9c/86/42/9c86420f7b20d76b67c7a6bd4d90c82a.jpg" alt="bruna" />

            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

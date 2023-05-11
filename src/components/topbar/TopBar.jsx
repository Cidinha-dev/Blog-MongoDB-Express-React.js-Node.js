import { Link } from "react-router-dom"
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
                <li className="topListItem">
                    <Link to="/" className="link">HOME</Link>
                </li>
                <li className="topListItem">
                    <Link to="" className="link">SOBRE</Link>
                </li>
                <li className="topListItem">
                    <Link to="" className="link">CONTATO</Link>
                </li>
                <li className="topListItem">
                    <Link to="" className="">ESCREVER</Link>
                </li>
                <li className="topListItem">
                    <Link to="" >LOGIN</Link>
                </li>
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

import "./sideBar.css"

export default function SideBar() {
  return (
    <div className="sidebar">

      <div className="sidebarItem">
        <span className="sidebarTitle">SOBRE</span>
        <img className="sidebarImg" src="https://images.pexels.com/photos/8369520/pexels-photo-8369520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic autem minima asperiores rerum nihil consectetur unde 
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">DOCUMENTÁRIO</li>
          <li className="sidebarListItem">CRIMES SEM RESPOSTA</li>
          <li className="sidebarListItem">INOCENTES PRESOS </li>
          <li className="sidebarListItem">MISTÉRIOS</li>
          <li className="sidebarListItem">JULGAMENTOS</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">SIGA-ME</span>
        <div className="sidebarSocial">
          <i class="sidebarIcons fa-brands fa-square-facebook"></i>
          <i class="sidebarIcons fa-brands fa-square-pinterest"></i>
          <i class="sidebarIcons fa-brands fa-square-twitter"></i>
          <i class="sidebarIcons fa-brands fa-square-instagram"></i>
        </div>
      </div>

    </div> 
  )
}

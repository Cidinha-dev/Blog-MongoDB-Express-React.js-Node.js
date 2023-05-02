import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">

      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/7497788/pexels-photo-7497788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={250} height={200} alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic autem minima asperiores rerum nihil consectetur unde 
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">MODA</li>
          <li className="sidebarListItem">ROUPAS</li>
          <li className="sidebarListItem">CALÇADOS</li>
          <li className="sidebarListItem">ESTAÇÕES</li>
          <li className="sidebarListItem"></li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
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

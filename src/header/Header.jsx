import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <div className="headerTitleSm"></div>
            <div className="headerTitle Lg"></div>
        </div>
        <img className='headerImg'
        src="https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" />
    </div>
  )
}

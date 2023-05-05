import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            className="singlePostImg" />

            <h1 className="singlePostTitle">
                Lorem, ipsum dolor sit amet 
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i class=" singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Aparecida Bruna</span>
                <span classNane="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eaque. Dolores, expedita incidunt optio error harum iure quo molestiae nihil corporis impedit sint fuga adipisicing elit. Animi, eaque. Dolores, expedita incidunt optio error harum iure quo molestiae nihil corporis impedit sint fuga veniam accusantium blanditiis rem, quos quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eaque. Dolores, expedita incidunt optio error harum iure quo molestiae nihil corporis impedit sint fuga veniam accusantium blanditiis rem, quos quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eaque. Dolores, expedita incidunt optio error harum iure quo molestiae nihil corporis impedit sint fuga veniam accusantium blanditiis rem, quos quia.
            veniam accusantium blanditiis rem, quos quia.
            Dolores, expedita incidunt optio error harum iure quo molestiae nihil corporis impedit sint fuga veniam accusantium blanditiis rem, quos quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eaque. Dolores, expedita incidunt optio error harum iure quo molestiae nihil corporis impedit sint fuga veniam accusantium blanditiis rem, quos quia.
            Dolores, expedita incidunt optio error harum iure quo molestiae nihil corporis impedit sint fuga veniam accusantium blanditiis rem, quos quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eaque. Dolores, expedita incidunt optio error harum iure quo molestiae nihil corporis impedit sint fuga veniam accusantium blanditiis rem, quos quia.
            </p>
        </div>
    </div>
  )
}

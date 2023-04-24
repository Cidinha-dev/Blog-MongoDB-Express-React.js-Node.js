import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://images.pexels.com/photos/3363111/pexels-photo-3363111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">MÚSICA</span>
                <span className="postCat">VIDA</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti, vero a soluta ducimus velit sapiente molestiae quam aspernatur minima cumque provident atque error quas fuga repudiandae voluptas praesentium molestias.</p>
    </div>
  )
  
}

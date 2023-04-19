import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">MÚSICA</span>
                <span className="postCat">VIDA</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
    </div>
  )
  
}

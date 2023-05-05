import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.pexels.com/photos/5717972/pexels-photo-5717972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="writeImg" />
        <form className="writeForm">
            <div className="writeFormGroup">

                <label htmlFor="fileInput">
                    <i class="writeIcon fa-solid fa-plus"></i>
                </label>

                <input type="file" id="fileInput" style={{ display: "none" }}/>

                <input type="text" placeholder="Título" className="writeInput" autoFocus={true}/>                
            </div>

            <div className="writeFormGroup">
                <textarea placeholder="Escreva seu texto..." type="text" className="writeInput writeText"></textarea>
            </div>
            <div className="writeSubmit">Publicar</div>
        </form>
    </div>
  )
}

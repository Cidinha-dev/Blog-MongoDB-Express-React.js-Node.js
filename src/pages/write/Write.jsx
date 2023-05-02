import "./write.css"

export default function Write() {
  return (
    <div className="write">
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

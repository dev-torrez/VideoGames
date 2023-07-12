import style from './form.module.css';

export default function Form(){
    return(
        <div className={style.container_form}>
            <div className={style.container_form_inputs}>
                <div className={style.container_form_inputs_label}>
                <h1>Crear Videojuego</h1>
                <label htmlFor="">Nombre</label>
                <input type="text" className={style.input_normal}/>
                <label htmlFor="">Imagen</label>
                <input type="url" className={style.input_normal}/>
                <label htmlFor="">Descripcion</label>
                <input type="text" className={style.input_normal}/>
                <label htmlFor="">Fecha de lanzamiento</label>
                <input type="date" className={style.input_normal}/>
                <label htmlFor="">Clasificación</label>
                <input type="number" className={style.input_normal}/>
                <label htmlFor="">Plataformas</label>
                <div className={style.plataformas}>
                    <label htmlFor="">PC</label>
                    <input type="checkbox" />
                    <label htmlFor="">iOS</label>
                    <input type="checkbox" />
                    <label htmlFor="">Android</label>
                    <input type="checkbox" />
                    <label htmlFor="">macOS</label>
                    <input type="checkbox" />
                    <label htmlFor="">Play Station 4</label>
                    <input type="checkbox" />
                    <label htmlFor="">Play Station 5</label>
                    <input type="checkbox" />
                    <label htmlFor="">xBOX</label>
                    <input type="checkbox" />
                    <label htmlFor="">PS Vita</label>
                    <input type="checkbox" />
                </div>
                <label htmlFor="">Generos</label>
                <div className={style.genres}>
                    <label htmlFor="">Action</label>
                    <input type="checkbox" />
                    <label htmlFor="">Indie</label>
                    <input type="checkbox" />
                    <label htmlFor="">Adventure</label>
                    <input type="checkbox" />
                    <label htmlFor="">RPG</label>
                    <input type="checkbox" />
                    <label htmlFor="">Strategy</label>
                    <input type="checkbox" />
                    <label htmlFor="">Shooter</label>
                    <input type="checkbox" />
                    <label htmlFor="">Casual</label>
                    <input type="checkbox" />
                    <label htmlFor="">Simulation</label>
                    <input type="checkbox" />
                    <label htmlFor="">Puzzle</label>
                    <input type="checkbox" />
                    <label htmlFor="">Arcade</label>
                    <input type="checkbox" />
                    <label htmlFor="">Platformer</label>
                    <input type="checkbox" />
                    <label htmlFor="">Massively Multiplayer</label>
                    <input type="checkbox" />
                    <label htmlFor="">Racing</label>
                    <input type="checkbox" />
                    <label htmlFor="">Sports</label>
                    <input type="checkbox" />
                    <label htmlFor="">Fighting</label>
                    <input type="checkbox" />
                    <label htmlFor="">Family</label>
                    <input type="checkbox" />
                    <label htmlFor="">Board Games</label>
                    <input type="checkbox" />
                    <label htmlFor="">Educational</label>
                    <input type="checkbox" />
                    <label htmlFor="">Card</label>
                    <input type="checkbox" />
                </div>
                <br />
                <button>Crear</button>
                </div>
            </div>
        </div>
    )
}
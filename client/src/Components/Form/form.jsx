import { useState } from 'react';
import style from './form.module.css';
import axios from 'axios'

export default function Form(){

    const [dato, setDato] = useState({ name: '', image: '', description: '', platforms: [], date: '', rating: 0, genres: []});
    const [message, setMessage] = useState('')

    const validateName =  /^(?!.* $)[A-Z][a-z ]+$/;
    const validateImage = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/;
    const validateDescription = /^[A-Z a-z].{10,}$/;

    const onchangeDatos = (event)=>{
        const newDato = {...dato, [event.target.name]: event.target.value}
        setDato(newDato);
    }
    
    const handleEnviarDatos = ()=>{
        if(!dato.name || !dato.image || !dato.description || dato.platforms.length === 0 || !dato.date || dato.rating === 0 || dato.genres.length === 0){
            setMessage('Faltan datos a completar')
        }
        else{
            if(!validateName.test(dato.name)){
                setMessage('El nombre no es valido')
            }
            else{
                if(!validateImage.test(dato.image)){
                    setMessage('La imagen debe ser una url')
                }
                else{
                    if(!validateDescription.test(dato.description)){
                        setMessage('La descripcion debe contener mas de 15 caracteres')
                    }
                    else{
                        if(dato.date.length > 10){
                            setMessage('la fecha de lanzamineto esta mal')
                        }
                        else{
                            if(dato.rating > 5 || dato.rating <0){
                                setMessage('La clasificacion debe estar entre 0-10')
                            }
                            else{
                                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                                checkboxes.forEach((checkbox) => {checkbox.checked = false});
                                axios.post('http://localhost:3001/videogames', dato)
                                .then(response=>setMessage(response.data.message))
                                setDato({ name: '', image: '', description: '', platforms: [], date: '', rating: 0, genres: []})
                            }
                        }
                    }
                }
            }
        }
    }

    const estadoControl = ()=>{
        setMessage('')
    }

    const platformInput=(event)=>{
        if(event.target.checked === true){
             const newInput = {...dato, platforms: [...dato.platforms, event.target.name]}
            setDato(newInput);
        } 
        else{
            const newInput = {...dato, platforms: [...dato.platforms.filter(el=>el !== event.target.name)]}
            setDato(newInput);
        }
    }

    const genreInput=(event)=>{
        if(event.target.checked === true){
            const newInput = {...dato, genres: [...dato.genres, event.target.name]}
            setDato(newInput);
        } 
        else{
            const newInput = {...dato, genres: [...dato.genres.filter(el=>el !== event.target.name)]}
            setDato(newInput);
        }
    }

    const generos = ['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Massively Multiplayer', 'Racing', 'Sports', 'Fighting', 'Family', 'Board Games', 'Educational', 'Card'];

    const plataformas = ['PC', 'iOS', 'Android', 'macOS', 'PLay Station 4', 'Play Station 5', 'xBOX', 'PS Vita'];

    return(
        <div className={style.container_form}>
            <div className={style.container_form_inputs}>
                <div className={style.container_form_inputs_label}>
                <h1>Crear Videojuego</h1>

                <label htmlFor="">Nombre</label>
                <input type="text" value={dato.name} name='name' onChange={onchangeDatos} className={style.input_normal}/>

                <label htmlFor="">Imagen</label>
                <input type="url" value={dato.image} name='image' onChange={onchangeDatos} className={style.input_normal}/>

                <label htmlFor="">Descripcion</label>
                <input type="text" value={dato.description} name='description' onChange={onchangeDatos} className={style.input_normal}/>

                <label htmlFor="">Fecha de lanzamiento</label>
                <input type="date" value={dato.date} name='date' onChange={onchangeDatos} className={style.input_normal}/>

                <label htmlFor="">Clasificación</label>
                <input type="number" value={dato.rating} name='rating' onChange={onchangeDatos} className={style.input_normal}/>

                <label htmlFor="">Plataformas</label>
                <div className={style.plataformas}>
                    {plataformas.map((plataforma, id)=>{return(
                        <div key={id}>
                            <label htmlFor="">{plataforma}</label>
                            <input type="checkbox" name={plataforma} onChange={platformInput}/>
                        </div>
                    )})}
                </div>

                <label htmlFor="">Generos</label>
                <div className={style.genres}>
                    {generos.map((genero, id)=>{return(
                        <div key={id}>
                            <label htmlFor={genero}>{genero}</label>
                            <input type="checkbox" name={genero} onChange={genreInput}/>
                        </div>
                    )})}
                </div>
                <br />
                {
                    message? 
                    <div className={style.container_mensaje}>
                        <div className={style.mensaje}>
                            <p>{message}</p>
                            <button className={style.mensaje_boton} onClick={estadoControl}>ok</button>
                        </div>
                    </div>: null
                }
                <button onClick={handleEnviarDatos} className={style.formulario_boton}>Crear</button>
                </div>
            </div>
        </div>
    )
}
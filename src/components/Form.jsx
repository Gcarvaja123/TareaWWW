import { useRef } from "react";

export const Form = ({ addEncuesta }) => {
    const title = useRef("");
    const desc = useRef("");
    const handleOnSubmit = (e) => {
        e.preventDefault();
        addEncuesta({Titulo: title.current.value, Descripcion: desc.current.value});
    }
    return (
        <div className="form">
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <span className="form-desc">Nueva encuesta</span>
                <h1>Crear nueva encuesta</h1>
                <label htmlFor="">Título</label>
                <input type="text" name="" id="" ref={title}/>
                <label htmlFor="">Descripción</label>
                <textarea name="" id="" cols="30" rows="10" ref={desc}></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

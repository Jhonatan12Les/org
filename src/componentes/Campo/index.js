import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

     //destructuracion
     const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value) //muy importante porque siempre se trabaja  con esa  etiqueta
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado}
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio} 
            type={type}
        />

    </div>
}

export default Campo
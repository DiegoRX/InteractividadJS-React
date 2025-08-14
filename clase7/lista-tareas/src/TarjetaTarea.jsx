import { useState } from "react"

export function TarjetaTarea({ texto, completada }) {


    return (
        <div className="tarea"
        //  onClick={manejarCompletado}
        >
            <p>{texto}</p>
            {completada ? <span>✅</span> : <span>❌</span>}
        </div>
    )
}
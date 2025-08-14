import { useState, useEffect } from "react";

export const UseEffectComponent = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        console.log('Ejecutando efecto: Creando intervalo.')

        const intervalId = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000)
        return () => {
            console.log('Limpiando el intervalo')
            clearInterval(intervalId)
        }
    }, [])
    return <p>Temporizador: {seconds} segundos</p>
}
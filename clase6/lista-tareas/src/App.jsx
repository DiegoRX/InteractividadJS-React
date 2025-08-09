import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TarjetaTarea } from './TarjetaTarea'

function App() {

  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Hacer ejercicio', completada: true },
    { id: 2, texto: 'Almorzar', completada: true },
    { id: 3, texto: 'Hacer mercado', completada: false },
    { id: 4, texto: 'Estudiar', completada: true },
  ])
  const [input, setInput] = useState('')
  const agregarTarea = () => {
    if (!input) return
    const nuevaTarea = { id: Date.now(), texto: input, completada: false }
    setTareas([...tareas, nuevaTarea])
    setInput('')
  }
  useEffect(() => {
    const pendientes = tareas.filter(t => !t.completada).length
    document.title = `Tienes ${pendientes} tareas pendientes`
  }, [tareas])
  return (
    <>
      <h1>Mis tareas</h1>
      <div>
        <h2>Añadir Tareas</h2>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <p>Tareas pendientes: {tareas.length}</p>
      {tareas.map((tarea) => (
        <TarjetaTarea key={tarea.id} texto={tarea.texto} completada={tarea.completada} />
      ))}
    </>
  )
}

export default App

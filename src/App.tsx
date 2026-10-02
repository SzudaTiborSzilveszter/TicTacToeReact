import { useState } from 'react'
import './App.css'
import Jatekter from './components/Jatekter'

function App() {
  const [lista, setLista] = useState(["X","O","X","O","X","O","X","O","X"])
  const [lepes, setLepes] = useState(0) 

  function kivalaszt(index:number){
    setLepes(lepes + 1)
    const listaMasolat=[...lista]
      lepes % 2 ? listaMasolat[index] = "X" : listaMasolat[index] = "O"
    setLista(listaMasolat)
  }
  return (
    <>
      <header><h1>TicTacToe</h1></header>
      <article>
          <Jatekter lista={lista} kivalaszt={kivalaszt}/>
      </article>
      <footer><p>Szuda Tibor Szilveszter</p></footer>
    </>
  )
}

export default App

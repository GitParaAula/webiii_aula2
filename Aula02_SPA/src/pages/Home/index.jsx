import { useState } from 'react'

function Home(){
    let contador = 0
    const [contadorState, setContadorState] = useState(0)

    function somar() {
        contador++
        console.log(contador)
    }
   
    function somarState(){
        setContadorState(contadorState+1)
    }

    return(
        <div>
            <h1>Página Inicial</h1>
            <p>Essa é a primeira página do meu site.</p>
            
            <p>{contador}</p>
            <button onClick={somar}>Somar</button>

            <p>{contadorState}</p>
            <button onClick={somarState}>Somar</button>
        </div>
    )
}

export default Home
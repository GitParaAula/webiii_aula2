import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contatos from './pages/Contatos';
import { useState } from 'react'

function App()  {
  const [pagina, setPagina] = useState('Home')

  const renderizarPagina = ()=>{
    if(pagina === 'Home') return <Home/>
    if(pagina === 'Sobre') return <Sobre/>
    if(pagina === 'Contatos') return <Contatos/>
  }

  return(
    <div className="Container">
      <h1>MEU SITE</h1>
      <p>Esse é meu primeiro site</p>
      <nav>
        <button onClick={()=>setPagina('Home')}>Home</button>
        <button onClick={()=>setPagina('Contatos')}>Contatos</button>
        <button onClick={()=>setPagina('Sobre')}>Sobre</button>
      </nav>
      <div>{renderizarPagina()}</div>
    </div>
  )
}

export default App;
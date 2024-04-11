import React from 'react'
import Header from './componentes/header'
import Footer from './componentes/footer'
import Aside from './componentes/aside'

function App() {
  return(
    <div>
      <Header/>
      <div style={{ display : "flex" }}>
        <Aside/>
        <main style={{ flex: 1, padding: "20px" }}>
          <h2>Bem vindo a página principal</h2>
        </main>        
      </div>
      <Footer/>
    </div>
  );
}

export default App;

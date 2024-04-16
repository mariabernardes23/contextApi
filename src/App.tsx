import './App.css'
import { Header } from './components/Header'
import { Aluno } from './components/Aluno'
import { UserProvider } from './context/user'
import { Formulario } from './components/Formulario'
import { Total } from './components/Total'
import { Footer } from './components/Footer'

function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <section className='conteudo'>
          <Total />
          <Formulario />
          <Aluno />
        </section>
        <Footer />
      </div>
    </UserProvider>
  )
}

export default App

import { useContext, useState } from "react"
import { UserContext } from "../../context/user"
import './style.css'
export function Formulario() {
    const [ aluno, setAluno ] = useState('')
    const { adicionarAluno } = useContext(UserContext)

    function salvarDadosAluno() {
        if(aluno.trim() === ''){
            alert('Digite o nome do aluno para adicionar!')
            return
        }
        adicionarAluno(aluno)
        setAluno('')
    }
    
    return(
        <div className="formulario">
            <input 
                type="text"
                value={aluno}
                onChange={(e) => setAluno(e.target.value)}
                className="input" 
            />

            <button onClick={salvarDadosAluno} className="button">
                Adicionar Aluno
            </button>
        </div>
    )
}
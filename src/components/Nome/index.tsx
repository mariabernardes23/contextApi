import { useContext } from "react"
import { UserContext } from "../../context/user"

export function Nome() {
    const { alunos } = useContext(UserContext)

    return(
        <div>
            {
                alunos.map((aluno, index) => (
                    <ul key={index}>
                        <li>Aluno(a): {aluno}</li>
                    </ul>
                ))
            }
        </div>
    )
}
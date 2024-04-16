import { useContext } from "react";
import { UserContext } from "../../context/user";
import './style.css'

export function Total () {
    const { qtdAlunos } = useContext(UserContext);
  
    return (
        <h1 className="font">Quantidade de Alunos: {qtdAlunos}</h1>
    )
}
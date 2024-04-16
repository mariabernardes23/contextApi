import { ReactNode, createContext, useEffect, useRef, useState } from 'react';

interface UserProviderProps{
    children: ReactNode;
}

interface UserContextData{
    alunos: string[];
    qtdAlunos: number;
    adicionarAluno: (nome: string) => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children } : UserProviderProps ) {
    const [ alunos, setAlunos ] = useState<string[]>([])
    const [ qtdAlunos, setQtdAlunos ] = useState(0)
    const primeiraRenderizacao = useRef(true)

    useEffect(() => {
        const alunosSalvos = localStorage.getItem('alunos')

        if(alunosSalvos) {
            setAlunos(JSON.parse(alunosSalvos))
        }
    }, [])

    useEffect(() => {
        if(primeiraRenderizacao.current){
            primeiraRenderizacao.current = false
            return;
        }
        localStorage.setItem('alunos', JSON.stringify(alunos));
        setQtdAlunos(alunos.length);
    }, [alunos]);
        
    function adicionarAluno(aluno: string) {
       setAlunos(alunos => [...alunos, aluno])
    }

    return(
        <UserContext.Provider value={ {alunos, qtdAlunos, adicionarAluno} }>
            {children}
        </UserContext.Provider>
    )
}
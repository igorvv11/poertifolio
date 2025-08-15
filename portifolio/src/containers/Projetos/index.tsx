import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './stiles'

type Repositorio = {
  id: number
  name: string
  description: string | null
  html_url: string
}

const Projetos = () => {
  const [repos, setRepos] = useState<Repositorio[]>([])
  const [estaCarregando, setEstaCarregando] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/igorvv11/repos')
      .then((res) => res.json())
      .then((data: Repositorio[]) => {
        setRepos(data)
        setEstaCarregando(false)
      })
      .catch((err) => {
        console.error('Erro ao buscar repositórios:', err)
        setEstaCarregando(false)
      })
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>

      {estaCarregando ? (
        <p>Carregando...</p>
      ) : (
        <Lista>
          {repos.map((repo) => (
            <li key={repo.id}>
              <Projeto
                nome={repo.name}
                descricao={repo.description}
                url={repo.html_url}
              />
            </li>
          ))}
        </Lista>
      )}
    </section>
  )
}

export default Projetos

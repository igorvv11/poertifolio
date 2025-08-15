import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './style'

interface ProjetoProps {
  nome: string
  descricao: string | null
  url: string
}

const Projeto = ({ nome, descricao, url }: ProjetoProps) => {
  return (
    <Card>
      <Titulo fontSize={14}>{nome}</Titulo>
      <Paragrafo tipo="secundario">{descricao || 'Sem descrição'}</Paragrafo>
      <LinkBotao href={url} target="_blank" rel="noopener noreferrer">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Titulo fontSize={14}>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJ</Paragrafo>
    <LinkBotao> Visualizar</LinkBotao>
  </Card>
)
export default Projeto

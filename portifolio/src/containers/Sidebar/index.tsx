import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Igor Viana</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Igorvv11
      </Paragrafo>
      <Descricao tipo="principal">Desenvolverdor Full-Stack Java</Descricao>
      <Paragrafo tipo="principal" fontSize={10}>
        Email:Igor.viana560@gmail.com Telefone: 81 99281-4280
      </Paragrafo>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar

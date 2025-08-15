import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Sou Igor Viana Viegas, desenvolvedor apaixonado por tecnologia e resolução
      de problemas. Tenho experiência no desenvolvimento de aplicações web
      utilizando diferentes linguagens e frameworks, sempre buscando escrever um
      código limpo, eficiente e escalável. Meu objetivo é evoluir constantemente
      como profissional, contribuindo para projetos que impactem positivamente
      pessoas e empresas. Tenho como ambição alcançar o nível de desenvolvedor
      sênior, atuando em projetos desafiadores e colaborando com equipes que
      valorizam inovação, aprendizado contínuo e boas práticas de
      desenvolvimento. Vejo cada desafio como uma oportunidade de crescimento e
      acredito que a combinação entre dedicação, curiosidade e trabalho em
      equipe é o que constrói resultados de excelência.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=igorvv11&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=igorvv11&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre

import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import styled from 'styled-components'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00" tamanhoFonte="36px">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map(livro => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por felicidade na alura"
        subtitulo="Angular 12"
        descricao="Construindo"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos

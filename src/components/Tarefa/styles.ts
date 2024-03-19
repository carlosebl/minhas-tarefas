import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

type TagProps = {
  prioridade?: string
  status?: string
}

function retornaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'pendente') return variaveis.amarelo
    if (props.status === 'concluída') return variaveis.verde
  } else if ('prioridade' in props) {
    if (props.prioridade === 'urgente') return variaveis.vermelho
    if (props.prioridade === 'importante') return variaveis.amarelo2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 16px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`

export const Descricao = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #8b8b8b;
  background-color: transparent;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  border: none;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: #2f3640;
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

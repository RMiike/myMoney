import React from 'react'
import { Background, TipoText, SaldoText} from './styles'

export default function HistoricoList({data}) {
  return (
    <Background>
      <TipoText tipo={data.tipo} >
        {data.tipo}
      </TipoText>
      <SaldoText >
       R$ {data.valor}
      </SaldoText>
    </Background>
  )
}

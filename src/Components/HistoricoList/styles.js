import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'

export const Background = styled(LinearGradient).attrs({
  colors: ['#999', '#fff']
})`
  margin-bottom: 12px;
  padding: 7px;
  border-radius: 5px;
  z-index: 3;
  box-shadow: 2px 2px rgba(0,0,0,.2);
`

export const ViewSaldo = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`
export const TipoText = styled.Text`
  color: ${props => props.tipo === 'despesa' ? '#ef493a' : '#049301'};
  font-size: 18px;
  text-transform: uppercase;
` 
export const SaldoText = styled.Text`
  color: #222;
  font-size: 20px;
  font-weight: bold;
` 


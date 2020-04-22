import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'

export const Background = styled(LinearGradient).attrs({
  colors: ['#262630', '#1b2d4e']
})`
  flex: 1;
`

export const ViewSaldo = styled.View`
  align-items: center;
  margin: 30px 0;
`
export const SaldoTitle = styled.Text`
  color: #ddd;
  font-size: 18px;
  font-style: italic;
` 
export const Saldo = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
` 

export const Registros = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`
export const RegistroTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
` 
export const IconRight = styled.TouchableOpacity`
 
` 

export const List = styled.FlatList.attrs({
  paddingHorizontal: 15,
  paddingVertical: 70,
})`
  margin-top: 12px;
  

`





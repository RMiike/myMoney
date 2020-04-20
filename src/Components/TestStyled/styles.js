import styled from 'styled-components/native'
import { getStatusBarHeight} from 'react-native-status-bar-height'



export const Container = styled.View`
  padding-top: ${0 + getStatusBarHeight()};
  flex: 1;
  background-color: #999;
  align-items: center;
  justify-content: center;
`
export const Titulo = styled.Text`
  color: #fff;
  font-size: 30;
  text-decoration: underline;
`

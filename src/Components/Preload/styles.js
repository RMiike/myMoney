import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'

export const Background = styled(LinearGradient).attrs({
  colors: ['#262630', '#1b2d4e']
})`
  flex: 1;
`
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
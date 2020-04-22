import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Background = styled(LinearGradient).attrs({
  colors: ["#262630", "#1b2d4e"],
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


export const Title  = styled.Text`
  font-size: 30px;
  color:#999;
  margin-bottom: 20px;

`
export const Nome = styled.Text`
 font-size: 40px;
 font-weight: bold;
  color:#999;
  margin-bottom: 20px;

`
export const LogoutButton = styled.TouchableOpacity`
align-items: center;
  justify-content: center;
  height: 35px;
  width: 30%;
  background: #f26363;
  border-radius: 7px;
  margin-top: 20px;`
export const LogoutText = styled.Text`
  color: #fff;
  font-size: 20px;
`


import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Background = styled(LinearGradient).attrs({
  colors: ["#262630", "#1b2d4e"],
})`
  flex: 1;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#222",
})`
  background: rgba(255, 255, 255, 0.5);
  height: 50px;
  font-size: 17px;
  border-radius: 7px;
  width: 90%;
  margin-top: 30px;
  padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 90%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 7px;
  margin-top: 20px;
`;
export const SubmitText = styled.Text`
  color: #222;
  font-size: 17px;
`;

export const PickerItem = styled.Picker`
  width: 90%;
  font-size: 17px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.5);
  height: 50px;
  margin-top: 20px;
  color: #222;
`;

import {
  GestureResponderEvent,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAppSettings } from "../../../context";

interface IButtonProps {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
  style?: StyleProp<ViewStyle>;
}

export const Button = ({ onPress, title, style }: IButtonProps) => {
  const { createStyles } = useAppSettings();
  const buttonStyles = createStyles((theme) => ({
    common: {
      backgroundColor: theme.secondary_light,
      paddingHorizontal: 8,
      borderRadius: 15,
      height: 48,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: 'white',
      textTransform: "capitalize",
      fontWeight: 'bold',
    },
  }));
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[buttonStyles.common, style]}>
        <Text style={[buttonStyles.text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

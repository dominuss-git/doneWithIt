import { Text as RNText, TextProps } from "react-native"
import { useAppSettings } from "../../../context"


export const Text = ({ children, style, ...rest }: TextProps) => {
  const { createStyles } = useAppSettings();
  const textStyle = createStyles((theme) => ({
    text: {
      color: theme.contrast 
    }
  }))
  return <RNText style={[textStyle.text, style]}>{children}</RNText>
}
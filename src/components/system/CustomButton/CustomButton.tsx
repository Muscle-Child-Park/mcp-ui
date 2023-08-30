import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  useWindowDimensions,
} from "react-native";
import { colors } from "../../../constants/colors";

interface CustomButtonProps {
  text: string;
  layoutmode: "small" | "fullWidth";
  variant: "stroke" | "fill" | "big" | "whiteBig";
  className?: string;
  isActive?: boolean;
  bgColor?: string;
  disabled?: boolean;
}

interface Props extends TouchableOpacityProps, CustomButtonProps {}

const CustomButton = ({
  text,
  layoutmode,
  variant,
  className,
  isActive = false,
  bgColor = colors.primary,
  disabled,
  ...rest
}: Props) => {
  const { width: deviceWidth } = useWindowDimensions();
  const buttonStyles = StyleSheet.create({
    button: {
      // flex: 1,
      // marginHorizontal: 16,
      width: layoutmode === "fullWidth" ? deviceWidth - 40 : deviceWidth - 75, // 레이아웃 모드에 따라 width 조절
      minHeight: 52,
      maring: "auto",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      borderRadius: 8,
      opacity: variant === "fill" && !isActive ? 0.4 : 1, // for Survey's Next Btn
      // elevation: 6,
      backgroundColor:
        variant === "fill" || variant === "big" || isActive ? bgColor : "white",
      borderWidth: variant === "stroke" ? 2 : 0,
      borderColor:
        variant === "stroke" && !isActive ? colors.testBorder : "transparent",
      // shadowColor: '#171717',
      // shadowOffset: {width: -3, height: 3},
      // shadowOpacity: 0.2,
      // shadowRadius: 3,
    },
    // active: {
    //   backgroundColor: '#404040',
    //   borderColor: 'transparent',
    // },
    text: {
      fontSize: variant === "stroke" ? 15 : 18,
      lineHeight: 21.48,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color:
        variant === "whiteBig" || (variant === "stroke" && !isActive)
          ? "black"
          : "white",
      // textAlign: 'center',
    },
  });

  type styleKeys = keyof typeof buttonStyles;

  const selectedStyles = className ? buttonStyles[className as styleKeys] : {};

  return (
    // <Pressable
    <TouchableOpacity
      style={[
        buttonStyles.button,
        selectedStyles,
        disabled && { opacity: 0.7 },
      ]}
      {...rest}
    >
      <Text style={buttonStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

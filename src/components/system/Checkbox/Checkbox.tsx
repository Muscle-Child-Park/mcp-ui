import React from "react";
import { StyleSheet, Text, View, Pressable, ViewStyle } from "react-native";
import { Check } from "../../../assets";

interface Props {
  isChecked: boolean;
  disabled?: boolean;
  onValueChangeHandler?: (checked: boolean) => void;
  text: string;
  style?: ViewStyle;
  size?: "small" | "medium";
  textColor?: string;
  checkBoxColor?: string;
}

const SIZE = {
  small: 18,
  medium: 24,
};

const Checkbox = ({
  isChecked,
  text,
  disabled,
  onValueChangeHandler,
  style,
  textColor,
  checkBoxColor,
  size = "medium",
}: Props) => {
  const onPressedHandler = () => {
    if (onValueChangeHandler) {
      onValueChangeHandler(!isChecked);
    }
  };

  const triggerCheckbox = () => {
    if (disabled) return;
    onPressedHandler();
  };

  return (
    <View style={[styles.container, style]}>
      <Pressable
        // disabled={disabled}
        onPress={onPressedHandler}
        style={[
          styles.checkbox,
          {
            width: SIZE[size],
            height: SIZE[size],
          },
          isChecked && styles.checked,
          { borderColor: checkBoxColor },
          isChecked && { backgroundColor: checkBoxColor },
        ]}
      >
        <Check
          width={16}
          height={16}
          fill={isChecked ? "white" : "transparent"}
        />
      </Pressable>
      <Pressable style={styles.textContainer} onPress={triggerCheckbox}>
        <Text
          style={[
            { color: textColor ?? "#555555" },
            size === "small" && { fontSize: 16 },
            size === "medium" && { fontSize: 17 },
          ]}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#555555",
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#555555",
    borderColor: "#555555",
  },
  textContainer: {
    margin: 0,
    fontWeight: "500",
    lineHeight: 19.2,
  },
});

export default Checkbox;

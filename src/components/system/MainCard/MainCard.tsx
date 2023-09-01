import React from "react";
import { StyleSheet, View, Dimensions, ViewStyle } from "react-native";

interface Props {
  paddingTop?: number;
  paddingBottom?: number;
  children: React.ReactNode;
  style?: ViewStyle;
}

const MainCard = ({ children, style }: Props) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "white",
    width: deviceWidth - 40,
    // marginHorizontal: 20,
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 12,
    elevation: 1,
  },
});

export default MainCard;

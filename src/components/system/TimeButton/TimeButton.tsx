import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "src/constants/colors";

interface Props {
  time: string;
  onSelectTime: (time: string) => void;
  selected: string | null;
  isActive: boolean;
}
// just for storybook
// const backgroundColor = {
//   able: ["#EBECEC", "#FFFFFF"],
//   disable: ["#E4E4E4", "#F3F3F3"],
//   selected: ["#1F70FF", "#EEF3FF"],
// };

const TimeButton = ({ time, onSelectTime, selected, isActive }: Props) => {
  return (
    <Pressable
      disabled={!isActive}
      // delayPressIn={0}
      onPress={() => {
        onSelectTime(time);
      }}
    >
      <View
        style={[
          styles.box,
          isActive && selected === time && { borderColor: "#1F70FF" },
          !isActive && { borderColor: "#E4E4E4" },
          !isActive
            ? { backgroundColor: "#F3F3F3" }
            : selected === time
            ? { backgroundColor: "#EEF3FF" }
            : { backgroundColor: "#FFFFFF" },
        ]}
      >
        <Text
          style={[
            styles.text,
            !isActive && {
              color: "#989898",
            },
            isActive &&
              selected === time && {
                color: "#1F70FF",
              },
          ]}
        >
          {time}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 80,
    // paddingHorizontal: 20.5,
    paddingVertical: 12.5,
    borderWidth: 1,
    borderColor: "#EBECEC",
    borderRadius: 4,
  },
  text: {
    color: colors.gray100,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19.09,
    textAlign: "center",
  },
});

export default TimeButton;

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { MyButton } from "./Button";
import { View } from "react-native";

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  args: {
    text: "Hello world",
  },
  decorators: [
    // 필수
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: "red", value: "#f00" },
  //       { name: "green", value: "#0f0" },
  //       { name: "blue", value: "#00f" },
  //     ],
  //   },
  // },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Basic: MyButtonStory = (args) => <MyButton {...args} />;

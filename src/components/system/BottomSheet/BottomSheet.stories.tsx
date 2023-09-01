import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import BottomSheet from "./BottomSheet";
import { View, Text } from "react-native";
import { useState } from "react";

export default {
  title: "Components/System/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    selected: { control: "select", options: [0, 1, 2] },
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
        <Text>Check out the component on SortingBar</Text>
        <Text>(Components 👉 System 👉 SortingBar)</Text>
        <Story />
      </View>
    ),
  ],
} as ComponentMeta<typeof BottomSheet>;

type Story = ComponentStory<typeof BottomSheet>;

const MyBottomSheetTemplate: Story = (args) => {
  const [selectedNum, setSelectedNum] = useState(0);
  const [visible, setVisible] = useState(false);
  return (
    <BottomSheet
      {...args}
      modalVisible={visible}
      selected={selectedNum}
      setModalVisible={(visible: boolean) => {
        setVisible(visible);
      }}
      setSelected={(num: number) => {
        setSelectedNum(num);
      }}
    />
  );
};

export const MyBottomSheet = MyBottomSheetTemplate.bind({});
MyBottomSheet.args = {
  selected: 0,
  modalVisible: false,
};

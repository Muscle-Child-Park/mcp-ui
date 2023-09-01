import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import DropDownBox from "./DropDownBox";
import { View, Text } from "react-native";
import { sortTypes } from "src/constants/common";

const meta: ComponentMeta<typeof DropDownBox> = {
  title: "Components/System/DropDownBox",
  component: DropDownBox,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    title: { control: "select", options: sortTypes },
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
};

export default meta;

type Story = ComponentStoryObj<typeof DropDownBox>;

export const MyDropDownBox: Story = {
  args: {
    title: sortTypes[0],
  },
};

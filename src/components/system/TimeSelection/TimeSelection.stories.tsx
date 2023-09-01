import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { View } from "react-native";
import TimeSelection from "./TimeSelection";

const meta: ComponentMeta<typeof TimeSelection> = {
  title: "Components/System/TimeSelection",
  component: TimeSelection,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    title: { control: "radio", options: ["오전", "오후"] },
    selected: { control: "radio", options: ["7:00", "null"] },
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
};

export default meta;

type Story = ComponentStoryObj<typeof TimeSelection>;

export const TimeSelectionForAll: Story = {
  args: {
    title: "오전",
    selected: null,
  },
};

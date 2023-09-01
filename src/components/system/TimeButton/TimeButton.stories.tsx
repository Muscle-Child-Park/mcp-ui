import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { View } from "react-native";
import TimeButton from "./TimeButton";

const meta: ComponentMeta<typeof TimeButton> = {
  title: "Components/System/TimeButton",
  component: TimeButton,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    selected: { control: "radio", options: ["07:00", "08:00"] },
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

type Story = ComponentStoryObj<typeof TimeButton>;

export const TimeButtonForAll: Story = {
  args: {
    time: "07:00",
    selected: "08:00",
    isActive: true,
  },
};

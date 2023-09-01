import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import ProgressBar from "./ProgressBar";
import { View } from "react-native";

const meta: ComponentMeta<typeof ProgressBar> = {
  title: "Components/System/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    percent: {
      control: "select",
      options: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
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

type Story = ComponentStoryObj<typeof ProgressBar>;

export const BasicProgressBar: Story = {
  args: {
    percent: 30,
  },
};

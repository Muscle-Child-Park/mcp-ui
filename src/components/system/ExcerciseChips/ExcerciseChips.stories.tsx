import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import ExcerciseChips from "./ExcerciseChips";
import { View } from "react-native";
import { ExcerciseChipsNames } from "src/constants/common";

const meta: ComponentMeta<typeof ExcerciseChips> = {
  title: "Components/System/ExcerciseChips",
  component: ExcerciseChips,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    mode: { control: "select", options: ExcerciseChipsNames },
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

type Story = ComponentStoryObj<typeof ExcerciseChips>;

export const BasicChip: Story = {
  args: {
    mode: "pt",
  },
};

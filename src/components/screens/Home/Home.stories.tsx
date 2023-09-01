import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { View } from "react-native";
import Home from "./Home";

const meta: ComponentMeta<typeof Home> = {
  title: "Components/System/Home",
  component: Home,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    selected: { control: "date" },
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

type Story = ComponentStoryObj<typeof Home>;

export const MyHome: Story = {
  args: {},
};

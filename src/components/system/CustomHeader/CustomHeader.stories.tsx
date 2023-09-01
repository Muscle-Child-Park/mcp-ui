import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import CustomHeader from "./CustomHeader";
import { View } from "react-native";

const meta: ComponentMeta<typeof CustomHeader> = {
  title: "Components/System/CustomHeader",
  component: CustomHeader,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    headerSize: { control: "select", options: ["h2", "h3,", "h4"] },
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

type Story = ComponentStoryObj<typeof CustomHeader>;

export const MyCustomHeader: Story = {
  args: {
    headerSize: "h2",
    headerText: "My Custom Header",
  },
};

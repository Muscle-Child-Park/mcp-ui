import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import MainCard from "./MainCard";
import { View, Text } from "react-native";

const meta: ComponentMeta<typeof MainCard> = {
  title: "Components/System/MainCard",
  component: MainCard,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
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

type Story = ComponentStoryObj<typeof MainCard>;

export const MyMainCard: Story = {
  args: {
    children: <Text>MyMainCard</Text>,
  },
};

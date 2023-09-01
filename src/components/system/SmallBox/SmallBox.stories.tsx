import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import SmallBox from "./SmallBox";
import { View } from "react-native";

const meta: ComponentMeta<typeof SmallBox> = {
  title: "Components/System/SmallBox",
  component: SmallBox,
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

type Story = ComponentStoryObj<typeof SmallBox>;

export const MySmallBox: Story = {
  args: {
    header: "하체, 유산소",
    body: "5일 (토) 오전 10:00",
  },
};

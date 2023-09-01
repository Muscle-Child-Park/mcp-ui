import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import Tag from "./Tag";
import { View } from "react-native";

const meta: ComponentMeta<typeof Tag> = {
  title: "Components/System/Tag",
  component: Tag,
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

type Story = ComponentStoryObj<typeof Tag>;

export const TagForAll: Story = {
  args: {
    text: "전체",
    isSelected: true,
  },
};

export const TagForClassContents: Story = {
  args: {
    text: "수업내용",
  },
};

export const TagForCancelContents: Story = {
  args: {
    text: "취소내용",
  },
};

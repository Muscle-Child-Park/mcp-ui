import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import SortingBar from "./SortingBar";
import { View } from "react-native";
import { sortTags } from "src/constants/common";

const meta: ComponentMeta<typeof SortingBar> = {
  title: "Components/System/SortingBar",
  component: SortingBar,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    currentTag: { control: "select", options: sortTags },
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

type Story = ComponentStoryObj<typeof SortingBar>;

export const MySortingBar: Story = {
  args: {
    currentTag: sortTags[0],
    setCurrentTag: (tag: string) => {},
  },
};

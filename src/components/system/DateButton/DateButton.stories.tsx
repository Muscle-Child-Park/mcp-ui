import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import DateButton from "./DateButton";
import { View } from "react-native";
import { format } from "date-fns";

const meta: ComponentMeta<typeof DateButton> = {
  title: "Components/System/DateButton",
  component: DateButton,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  args: {
    date: new Date(),
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

type Story = ComponentStory<typeof DateButton>;

export const SelectedButton: Story = (args) => (
  <DateButton {...args} selected="2022-08-30" />
);

export const unSelectedButton: Story = (args) => (
  <DateButton {...args} selected={format(new Date(), "yyy-MM-dd")} />
);

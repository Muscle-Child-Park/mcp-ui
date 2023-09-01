import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
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

type Story = ComponentStoryObj<typeof DateButton>;

export const MyDateButton: Story = {
  args: {
    date: new Date(),
    selected: "2023-09-01",
  },
};

// export const unSelectedButton: Story = {
//   args: {
//     date: new Date(),
//     selected: format(new Date(), "yyy-MM-dd"),
//   },
// };

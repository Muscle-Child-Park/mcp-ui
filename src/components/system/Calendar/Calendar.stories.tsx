import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { View } from "react-native";
import Calendar from "./Calendar";
import { format } from "date-fns";

const meta: ComponentMeta<typeof Calendar> = {
  title: "Components/System/Calendar",
  component: Calendar,
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

type Story = ComponentStoryObj<typeof Calendar>;

export const CalendarForAll: Story = {
  args: {
    selected: format(new Date(), "yyy-MM-dd"),
  },
};

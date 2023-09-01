import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import ReservationCard from "./ReservationCard";
import { View, Text } from "react-native";
import { ExcerciseChipsNames } from "src/constants/common";

const meta: ComponentMeta<typeof ReservationCard> = {
  title: "Components/System/ReservationCard",
  component: ReservationCard,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    mode: { control: "radio", options: ExcerciseChipsNames },
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

type Story = ComponentStoryObj<typeof ReservationCard>;

export const MyReservationCard: Story = {
  args: {
    mode: "today",
    text: "하체, 유산소 운동",
    time: "09:00 - 10:00",
  },
};

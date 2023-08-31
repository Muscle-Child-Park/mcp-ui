import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import ExcerciseChips from "./ExcerciseChips";
import { View } from "react-native";

const meta: ComponentMeta<typeof ExcerciseChips> = {
  title: "Components/System/ExcerciseChips",
  component: ExcerciseChips,
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

type Story = ComponentStory<typeof ExcerciseChips>;

export const PtChip: Story = () => <ExcerciseChips mode="pt" />;

export const TodayChip: Story = () => <ExcerciseChips mode="today" />;

export const CancelSuccessChip: Story = () => (
  <ExcerciseChips mode="cancelSuccess" />
);

export const ClassSuccessChip: Story = () => (
  <ExcerciseChips mode="classSuccess" />
);

export const ReservationSuccessChip: Story = () => (
  <ExcerciseChips mode="reservationSuccess" />
);

export const PersonalExerciseChip: Story = () => (
  <ExcerciseChips mode="personalExercise" />
);

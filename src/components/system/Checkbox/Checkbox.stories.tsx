import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import Checkbox from "./Checkbox";
import { View } from "react-native";
import { colors } from "../../../constants/colors";

const meta: ComponentMeta<typeof Checkbox> = {
  title: "Components/System/Checkbox",
  component: Checkbox,
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

type Story = ComponentStory<typeof Checkbox>;

export const InActiveCheckbox: Story = () => (
  <Checkbox
    isChecked
    text="네, 확인했어요!"
    size="small"
    style={{ gap: 8 }}
    textColor={colors.gray100}
    checkBoxColor={colors.primary}
  />
);

export const ActiveCheckbox: Story = () => (
  <Checkbox
    isChecked={false}
    text="네, 확인했어요!"
    size="small"
    style={{ gap: 8 }}
    textColor={colors.gray100}
    checkBoxColor={colors.primary}
  />
);

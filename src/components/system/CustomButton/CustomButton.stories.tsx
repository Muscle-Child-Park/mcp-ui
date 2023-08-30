import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import CustomButton from "./CustomButton";
import { View } from "react-native";
import { colors } from "../../../constants/colors";

const meta: ComponentMeta<typeof CustomButton> = {
  title: "Components/System/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  args: {
    text: "Hello world",
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

type Story = ComponentStory<typeof CustomButton>;

export const SmallButton: Story = (args) => (
  <CustomButton
    {...args}
    layoutmode="small"
    variant="fill"
    bgColor={colors.primary}
  />
);

export const BigButton: Story = (args) => (
  <CustomButton
    {...args}
    layoutmode="fullWidth"
    variant="fill"
    bgColor={colors.primary}
  />
);

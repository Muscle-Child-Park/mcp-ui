import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import CustomButton from "./CustomButton";
import { View } from "react-native";

const meta: ComponentMeta<typeof CustomButton> = {
  title: "Components/System/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  args: {
    text: "Hello world!",
  },
  argTypes: {
    layoutmode: { control: "select", options: ["basic", "fullWidth"] },
    variant: {
      control: "select",
      options: ["stroke", "fillPrimary", "fillSecondary"],
    },
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

type Story = ComponentStoryObj<typeof CustomButton>;

export const MyCustomButton: Story = {
  args: {
    layoutmode: "basic",
    variant: "fillPrimary",
  },
};

// export const StrokeButton: Story = (args) => (
//   <CustomButton {...args} layoutmode="fullWidth" variant="stroke" />
// );

// export const BasicButton: Story = (args) => (
//   <CustomButton {...args} layoutmode="basic" />
// );

import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { View } from "react-native";

export const decorators = [
  withBackgrounds,
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
];

export const parameters = {
  // View: {
  //   default: "plain",
  //   values: [
  //     {
  //       alignItems: "center",
  //       justifyContent: "center",
  //       flex: 1,
  //     },
  //   ],
  // },
  backgrounds: {
    default: "plain",
    values: [
      { name: "plain", value: "white" },
      { name: "warm", value: "hotpink" },
      { name: "cool", value: "deepskyblue" },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

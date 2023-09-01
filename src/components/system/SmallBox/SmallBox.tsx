import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { colors } from "src/constants/colors";

interface Props {
  header: string;
  body: string;
}

const SmallBox = ({ header, body }: Props) => {
  // don't use outside during working about storybook

  return (
    <View style={styles.boxWrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
      {/* <TouchableOpacity style={styles.button}></TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    width: "100%",
    backgroundColor: colors.background,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  textWrapper: {
    width: "100%",
    flexDirection: "column",
    gap: 8,
  },
  header: {
    color: colors.gray100,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19.2,
  },
  body: {
    color: colors.gray50,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16.8,
  },

  button: {
    backgroundColor: colors.gray2,
    width: 32,
    height: 32,
    borderRadius: 50,
  },
});
export default SmallBox;

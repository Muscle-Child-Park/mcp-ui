import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Tag } from "../Tag";
import { colors } from "src/constants/colors";
import { SortDown } from "src/assets";
import { sortTags, sortTypes } from "src/constants/common";
import { BottomSheet } from "../BottomSheet";

interface Props {
  currentTag: string;
  setCurrentTag: (tag: string) => void;
}

const SortingBar = ({ currentTag, setCurrentTag }: Props) => {
  const { width } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(0); // [0, 1, 2]
  const pressButton = () => {
    setModalVisible(true);
  };
  return (
    <View style={[styles.container, { width: width - 40 }]}>
      <View style={styles.left}>
        {sortTags.map((tagName, idx) => (
          <Tag
            text={tagName}
            isSelected={tagName === currentTag}
            onClick={() => setCurrentTag(tagName)}
            key={idx}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.right} onPress={pressButton}>
        <Text style={styles.text}>{sortTypes[selected]}</Text>
        <SortDown style={{ width: 24, height: 24 }} fill={"black"} />
      </TouchableOpacity>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selected={selected}
        setSelected={setSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  right: { flexDirection: "row", alignItems: "center" },
  text: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16.8,
    color: colors.gray100,
  },
});

export default SortingBar;

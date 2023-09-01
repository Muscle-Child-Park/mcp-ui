import React from "react";
import { MainCard } from "../MainCard";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { colors } from "src/constants/colors";
import { ExcerciseChips } from "../ExcerciseChips";
import { ExcerciseChipsType } from "../ExcerciseChips/ExcerciseChips";

interface Props {
  text: string;
  time: string;
  mode: ExcerciseChipsType;
}

const ReservationCard = ({ text, time, mode }: Props) => {
  return (
    <MainCard style={styles.container}>
      <View style={styles.innerWrapper}>
        <ExcerciseChips mode={mode} />
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      {mode === "reservationSuccess" && (
        <Pressable onPress={() => {}}>
          <Text style={styles.cancelText}>예약 취소</Text>
        </Pressable>
      )}
    </MainCard>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerWrapper: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
  },
  title: {
    color: colors.gray100,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19.2,
  },
  time: {
    color: colors.gray100,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16.8,
  },
  cancelText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16.8,
    color: colors.gray100,
  },
});

export default ReservationCard;

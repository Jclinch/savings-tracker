import { SavingsContext } from "../contexts/SavingsContext";
import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { ProgressBar } from "react-native-paper";


const HomeScreen = ({ navigation }: any) => {
  const context = useContext(SavingsContext);
  if (!context) return null;

  const { data } = context;

  const progress = data.targetAmount
    ? Math.min(data.savedAmount / data.targetAmount, 1)
    : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.goalText}>
        {data.goalName || "Set a goal to get started"}
      </Text>
      <Text style={styles.progressText}>
        ₦{data.savedAmount ?? 0} saved of ₦{data.targetAmount ?? 0} (
        {(progress * 100).toFixed(1)}%)
      </Text>
      <ProgressBar progress={progress} style={styles.progressBar} />

      <Button
        title="Set Goal / Update Progress"
        onPress={() => navigation.navigate("Form")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  goalText: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  progressText: { marginBottom: 16 },
  progressBar: { height: 10, borderRadius: 5, backgroundColor: "#ddd", marginBottom: 12 },
});

export default HomeScreen;

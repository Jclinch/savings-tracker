import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { ProgressBar } from "react-native-paper";
import { SavingsContext } from "../contexts/SavingsContext";

const HomeScreen = ({ navigation }: any) => {
  const context = useContext(SavingsContext);
  if (!context) return null;

  const { data } = context;

  const progress = data.targetAmount
    ? Math.min(data.savedAmount / data.targetAmount, 1)
    : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Progress</Text>

      <Text style={styles.goalText}>
        {data.goalName || "Set a goal to get started!"}
      </Text>

      <Text style={styles.progressText}>
        ₦{data.savedAmount ?? 0} saved of ₦{data.targetAmount ?? 0} (
        {(progress * 100).toFixed(1)}%)
      </Text>

      <View style={styles.progressBarContainer}>
        <ProgressBar progress={progress} style={styles.progressBar} color="#4CAF50" />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Set Goal / Update Progress"
          onPress={() => navigation.navigate("Form")}
          color="#007BFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#343A40",
    marginBottom: 16,
  },
  goalText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#495057",
    textAlign: "center",
    marginBottom: 8,
  },
  progressText: {
    fontSize: 16,
    color: "#6C757D",
    marginBottom: 12,
    textAlign: "center",
  },
  progressBarContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  progressBar: {
    height: 14,
    borderRadius: 7,
    backgroundColor: "#E9ECEF", // Subtle gray for the progress background
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default HomeScreen;

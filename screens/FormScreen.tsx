import React, { useContext, useState } from "react";
import { SavingsContext } from "../contexts/SavingsContext";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";

const FormScreen = ({ navigation }: any) => {
  const context = useContext(SavingsContext);
  if (!context) return null;

  const { setGoal, updateSavings } = context;
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [savedAmount, setSavedAmount] = useState("");

  const handleSetGoal = () => {
    if (!goalName || !targetAmount) {
      Alert.alert("Missing Fields", "Please fill in both fields to set your goal.");
      return;
    }
    setGoal(goalName, parseFloat(targetAmount));
    navigation.goBack();
  };

  const handleUpdateSavings = () => {
    if (!savedAmount || parseFloat(savedAmount) <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid amount to add to your savings.");
      return;
    }
    updateSavings(parseFloat(savedAmount));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Tracker</Text>
      
      <TextInput
        placeholder="Goal Name"
        style={styles.input}
        value={goalName}
        onChangeText={setGoalName}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Target Amount"
        style={styles.input}
        value={targetAmount}
        keyboardType="numeric"
        onChangeText={setTargetAmount}
        placeholderTextColor="#999"
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Set Goal" onPress={handleSetGoal} color="#007BFF" />
      </View>
      
      <View style={styles.dividerContainer}>
        <Text style={styles.dividerText}>OR</Text>
      </View>
      
      <TextInput
        placeholder="Add Saved Amount"
        style={styles.input}
        value={savedAmount}
        keyboardType="numeric"
        onChangeText={setSavedAmount}
        placeholderTextColor="#999"
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Update Savings" onPress={handleUpdateSavings} color="#28A745" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "#343A40",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CED4DA",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    fontSize: 16,
    color: "#495057",
  },
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  dividerContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  dividerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6C757D",
  },
});

export default FormScreen;

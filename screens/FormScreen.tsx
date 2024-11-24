//path: savings-tracker\screens\FormScreen.tsx
import { SavingsContext } from "../contexts/SavingsContext";
import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const FormScreen = ({ navigation }: any) => {
  const context = useContext(SavingsContext);
  if (!context) return null;

  const { setGoal, updateSavings } = context;
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [savedAmount, setSavedAmount] = useState("");

  const handleSetGoal = () => {
    if (!goalName || !targetAmount) {
      alert("Please fill in both fields to set your goal.");
      return;
    }
    setGoal(goalName, parseFloat(targetAmount));
    navigation.goBack();
  };

  const handleUpdateSavings = () => {
    if (!savedAmount || parseFloat(savedAmount) <= 0) {
      alert("Please enter a valid amount to add to your savings.");
      return;
    }
    updateSavings(parseFloat(savedAmount));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Goal Name"
        style={styles.input}
        value={goalName}
        onChangeText={setGoalName}
      />
      <TextInput
        placeholder="Target Amount"
        style={styles.input}
        value={targetAmount}
        keyboardType="numeric"
        onChangeText={setTargetAmount}
      />
      <Button title="Set Goal" onPress={handleSetGoal} />
      <View style={{ alignItems: "center", marginVertical: 16 }}>
        <Text>OR</Text>
      </View>
      <TextInput
        placeholder="Add Saved Amount"
        style={styles.input}
        value={savedAmount}
        keyboardType="numeric"
        onChangeText={setSavedAmount}
      />
      <Button title="Update Savings" onPress={handleUpdateSavings} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 8, borderRadius: 4 },
});

export default FormScreen;

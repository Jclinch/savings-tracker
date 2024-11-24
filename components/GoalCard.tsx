// GoalCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';

interface GoalCardProps {
  goalName: string;
  targetAmount: number;
  savedAmount: number;
}

const GoalCard = ({ goalName, targetAmount, savedAmount }: GoalCardProps) => {
  const progress = (savedAmount / targetAmount) * 100;

  return (
    <View style={styles.card}>
      <Text style={styles.goalName}>{goalName}</Text>
      <Text style={styles.details}>Target: ${targetAmount}</Text>
      <Text style={styles.details}>Saved: ${savedAmount}</Text>
      <ProgressBar progress={progress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  goalName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default GoalCard;

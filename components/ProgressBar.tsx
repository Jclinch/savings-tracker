// ProgressBar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
  progress: number; // Percentage of progress
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Savings Progress</Text>
      <View style={[styles.bar, { width: `${progress}%` }]} />
      <Text>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  bar: {
    height: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
});

export default ProgressBar;

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type DisplayProps = {
  value: string;
};

export default function Display({ value }: DisplayProps) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

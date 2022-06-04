import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import Button from '../../components/Button';
import Display from '../../components/Display';

import styles from './styles';

export default function Home() {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [operation, setOperation] = useState<string>('');

  const onClearMemory = useCallback(() => {
    setDisplayValue('0');
  }, [displayValue]);

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={onClearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={setDisplayValue} />
        <Button label="8" onClick={setDisplayValue} />
        <Button label="9" onClick={setDisplayValue} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={setDisplayValue} />
        <Button label="5" onClick={setDisplayValue} />
        <Button label="6" onClick={setDisplayValue} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={setDisplayValue} />
        <Button label="2" onClick={setDisplayValue} />
        <Button label="3" onClick={setDisplayValue} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={setDisplayValue} />
        <Button label="." onClick={setDisplayValue} />
        <Button label="=" operation onClick={setOperation} />
      </View>
    </View>
  );
}

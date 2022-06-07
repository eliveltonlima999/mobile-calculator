import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import Button from '../../components/Button';
import Display from '../../components/Display';

import styles from './styles';

type DisplayProps = {
  displayValue: string;
  clearDisplay: boolean;
  operation: null | string;
  values: number[];
  current: number;
};

const defaultValuesDisplay: DisplayProps = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default function Home() {
  const [display, setDisplay] = useState<DisplayProps>(defaultValuesDisplay);

  const onClearMemory = useCallback(() => setDisplay(defaultValuesDisplay), []);

  const onAddDigit = useCallback(
    (digit: string): void => {
      if (digit !== '.' && !display.displayValue.includes('.')) {
        const clearDisplay = display.displayValue === '0' || display.clearDisplay;

        const currentValue = clearDisplay ? '' : display.displayValue;
        const displayValue = currentValue + digit;

        if (digit !== '.') {
          const values = [...display.values];
          values[display.current] = parseFloat(displayValue);
          setDisplay({ ...display, values, displayValue });
        } else {
          setDisplay({
            ...display,
            displayValue,
          });
        }
      }
    },
    [display],
  );

  useEffect(() => console.log('display', display), [display]);

  const onSetOperation = useCallback(
    (operation: string) => {
      setDisplay({
        ...display,
        operation,
      });
    },
    [display],
  );

  return (
    <View style={styles.container}>
      <Display value={display.displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={onClearMemory} />
        <Button label="/" operation onClick={onSetOperation} />
        <Button label="7" onClick={onAddDigit} />
        <Button label="8" onClick={onAddDigit} />
        <Button label="9" onClick={onAddDigit} />
        <Button label="*" operation onClick={onSetOperation} />
        <Button label="4" onClick={onAddDigit} />
        <Button label="5" onClick={onAddDigit} />
        <Button label="6" onClick={onAddDigit} />
        <Button label="-" operation onClick={onSetOperation} />
        <Button label="1" onClick={onAddDigit} />
        <Button label="2" onClick={onAddDigit} />
        <Button label="3" onClick={onAddDigit} />
        <Button label="+" operation onClick={onSetOperation} />
        <Button label="0" double onClick={onAddDigit} />
        <Button label="." onClick={onAddDigit} />
        <Button label="=" operation onClick={onSetOperation} />
      </View>
    </View>
  );
}

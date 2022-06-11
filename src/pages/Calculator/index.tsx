import React, { useCallback, useState } from 'react';
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
    (digit: string): any => {
      const clearDisplay = display.displayValue === '0' || display.clearDisplay;

      if (digit === '.' && !clearDisplay && display.displayValue.includes('.')) return;

      const currentValue = clearDisplay ? '' : display.displayValue;
      const displayValue = currentValue + digit;

      setDisplay({
        ...display,
        displayValue,
      });

      if (digit !== '.') {
        const values = [...display.values];
        values[display.current] = parseFloat(displayValue);
        setDisplay({ ...display, values, displayValue, clearDisplay: false });
      }
    },
    [display],
  );

  const onSetOperation = useCallback(
    (operation: string) => {
      if (display.current === 0) {
        setDisplay({
          ...display,
          operation,
          current: 1,
          clearDisplay: true,
        });
      } else {
        const equals = operation === '=';
        const values = [...display.values];

        try {
          values[0] = eval(`${values[0]} ${display.operation} ${display.values[1]}`);
        } catch (err) {
          values[0] = display.values[0];
        }

        values[1] = 0;

        setDisplay({
          displayValue: values[0].toString(),
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: !equals,
          values,
        });
      }
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

import React, { useMemo, useState } from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';

type ButtonProps = {
  label: string;
  onClick?: (label: string) => void;
  double?: boolean;
  triple?: boolean;
  operation?: boolean;
};

export default function Button({ onClick, label, double, triple, operation }: ButtonProps) {
  const [stylesButton, setStylesButton] = useState(styles.button);

  useMemo(() => {
    if (double) setStylesButton({ ...stylesButton, ...styles.buttonDouble });
    if (triple) setStylesButton({ ...stylesButton, ...styles.buttonTriple });
    if (operation) setStylesButton({ ...stylesButton, ...styles.operationButton });
  }, [double, triple, operation]);

  return (
    <TouchableHighlight onPress={() => onClick && onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
}

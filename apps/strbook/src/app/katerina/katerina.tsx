
import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface KaterinaProps {
  name: string;
  age: number;
  best: boolean;
}


export function Katerina(props: KaterinaProps) {
  return (
    <View>
      <Text>Welcome to katerina!</Text>
      <p>{props.age}</p>
      <p>{props.name}</p>
      <p>{props.best}</p>
    </View>
  );
};


export default Katerina;

import { Switch as SwitchELement, SwitchProps } from 'tamagui';

import type { FC } from 'react';

export const Switch: FC<SwitchProps> = (props) => {
  return (
    <SwitchELement {...props}>
      <SwitchELement.Thumb animation="bouncy" />
    </SwitchELement>
  );
};

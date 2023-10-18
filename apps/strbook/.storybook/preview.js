import { TamaguiProvider, Theme } from 'tamagui';
import tamaguiConfig from '../src/tamagui.config';

export const decorators = [
  (Story) => {
    return (
      <TamaguiProvider config={tamaguiConfig}>
        <Theme name={'light'}>
          <Story />
        </Theme>
      </TamaguiProvider>
    );
  },
];

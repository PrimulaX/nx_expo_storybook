import type { Meta } from '@storybook/react-native';
import { Katerina } from './katerina';

const Story: Meta<typeof Katerina> = {
  component: Katerina,
  title: 'Katerina',
};
export default Story;

export const Primary = {
  args: {
    name: '',
    age: 0,
    best: false,
  },
};

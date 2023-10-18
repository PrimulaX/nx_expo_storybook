import type { Meta } from '@storybook/react-native';
import { App } from './App';

const Story: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default Story;

export const Primary = {
  args: {},
};

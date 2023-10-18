import {
  addDecorator,
  clearDecorators,
  configure,
  getStorybookUI,
} from '@storybook/react-native';

import { loadStories } from '../../../../.storybook/story-loader.js';
import { decorators } from '../../.storybook/preview.js';

import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-actions/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-notes/register';

if (decorators) {
  // stops the warning from showing on every HMR
  require('react-native').LogBox.ignoreLogs([
    '`clearDecorators` is deprecated and will be removed in Storybook 7.0',
  ]);

  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

configure(() => loadStories(), module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;

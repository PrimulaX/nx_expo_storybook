import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { Switch as SwitchElement } from './Switch';

const SwitchMeta: ComponentMeta<typeof SwitchElement> = {
  title: 'atoms/Switch',
  component: SwitchElement,
};

export default SwitchMeta;

type SwitchElementStory = ComponentStory<typeof SwitchElement>;

export const DefaultSwitch: SwitchElementStory = (args) => {
  return <SwitchElement {...args} />
}

DefaultSwitch.args = {
  value: 'true'
}

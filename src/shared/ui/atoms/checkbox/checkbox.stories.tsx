import type { Meta, Story } from '@storybook/react';

import type { CheckboxProps } from './checkbox';

import { Checkbox } from './checkbox';

const Base: Story<CheckboxProps> = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

Base.args = {
  value: false,
  onChange: () => {}
};

const story: Meta<CheckboxProps> = {
  component: Checkbox,

  title: 'Atoms/Checkbox'
};

export { Base };

export default story;

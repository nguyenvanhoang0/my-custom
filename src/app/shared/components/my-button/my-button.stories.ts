import { Meta, StoryObj } from '@storybook/angular';
import { MyButtonComponent } from './my-button.component';

const meta: Meta<MyButtonComponent> = {
  title: 'Components/MyButton',
  component: MyButtonComponent,
  tags: ['autodocs'],

  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'link', 'text'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'round', 'soft', 'none'],
    },
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
    },
    customColor: {
      control: 'color',
    },
  },
};
export default meta;

type Story = StoryObj<MyButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    shape: 'soft',
    size: 'default',
    block: false,
    disabled: false,
    loading: false,
  },
};

export const Ghost: Story = {
  args: {
    ghost: true,
    type: 'dashed',
    shape: 'round',
    size: 'large',
  },
};

export const WithCustomColor: Story = {
  args: {
    customColor: '#ff4081',
    type: 'primary',
  },
};

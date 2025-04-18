import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MyGroupButtonComponent } from './my-group-button.component';
import { MyButtonComponent } from '../my-button/my-button.component'; // Đảm bảo import MyButtonComponent

const meta: Meta<MyGroupButtonComponent> = {
  // Thêm kiểu cho Meta để rõ ràng hơn
  title: 'Components/MyGroupButton',
  component: MyGroupButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        MyGroupButtonComponent, // standalone
        MyButtonComponent, // standalone - Cần import cả MyButtonComponent nữa nhé!
      ],
    }),
  ],
  argTypes: {
    shape: { control: 'select', options: ['round', 'soft', 'none'] },
    size: { control: 'select', options: ['large', 'default', 'small'] },
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'link', 'text'],
    },
    customColor: { control: 'color' },
    block: { control: 'boolean' },
  },
};
export default meta;
// Sử dụng StoryObj<MyGroupButtonComponent> để có type safety tốt hơn
type Story = StoryObj<MyGroupButtonComponent>;

export const Default: Story = {
  args: {
    shape: 'soft',
    size: 'default',
    type: 'primary',
    customColor: undefined,
    block: false,
  },
};

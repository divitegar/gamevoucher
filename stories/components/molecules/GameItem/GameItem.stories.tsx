import { Meta } from '@storybook/react';
import GameItem, { GameItemProps } from '../../../../components/molecules/GameItem';

export default {
  title: 'Components/molecules/GameItem',
  component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'super merchant',
  category: 'mobile',
  thumbnail: '/img/Thumbnail-1.png',
};

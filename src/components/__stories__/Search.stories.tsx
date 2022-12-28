import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from '../Search';
import { SearchProps } from '../Search.types';

export default {
  title: 'Search',
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: () => {},
};
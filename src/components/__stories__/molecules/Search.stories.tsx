import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from '../../molecules/Search';
import { SearchProps } from '../../molecules/Search.types';

export default {
  title: 'molecules/Search',
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: () => {},
};

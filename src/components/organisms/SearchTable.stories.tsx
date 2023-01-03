import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchTable from '../organisms/SearchTable';


const headings = ['Name', 'Email', 'Phone'];
const data = [
  ['John Doe', 'johndoe@example.com', '555-555-5555'],
  ['Jane Doe', 'janedoe@example.com', '444-444-4444'],
  ['Bob Smith', 'bobsmith@example.com', '333-333-3333'],
];

export default {
  title: 'organisms/SearchTable',
  component: SearchTable,
  argTypes: {},
} as ComponentMeta<typeof SearchTable>;

const Template: ComponentStory<typeof SearchTable > = (args) => <SearchTable {...args} headings={headings} data={data}  />;

export const Default = Template.bind({});
Default.args = {
  onSearch: () => { },
};

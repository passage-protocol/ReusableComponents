
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import Search from '../molecules/Search';
import { TableProps } from './Table.types';


const headings = ['Name', 'Email', 'Phone'];
const data = [
    ['John Doe', 'johndoe@example.com', '555-555-5555'],
    ['Jane Doe', 'janedoe@example.com', '444-444-4444'],
    ['Bob Smith', 'bobsmith@example.com', '333-333-3333'],
];

const StyledSearchWrapper = styled.table`
    float: right;
    padding-bottom: 10px;
`;

const SearchTable = (props: TableProps) => {
    const { headings } = props;
    const [data, setData] = useState(props.data)

    const filterData = (data: string[][], search: string): string[][] => {
        return data.filter((item) => {
            return item.some((field) => field.toLowerCase().includes(search.toLowerCase()));
        });
    };

    const onSearch = (query: string) => {
        if (!query) {
            setData(props.data)
        }
        filterData(data, query)
        setData(filterData(data, query))
    }

    return (
        <>
            <StyledSearchWrapper> <Search onSearch={onSearch} /></StyledSearchWrapper>
            <Table headings={headings} data={data} />
        </>

    );
};
export default SearchTable;

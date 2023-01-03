import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

import { SearchProps } from './Search.types';

import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
`;

const Search = (props: SearchProps) => {
    const { onSearch } = props;
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <SearchWrapper>
            <Input
                placeholder="Enter your search query"
                onChange={handleInputChange}
            />
            <Button text="Search" onClick={handleSearch} />
        </SearchWrapper>
    );
};

export default Search;

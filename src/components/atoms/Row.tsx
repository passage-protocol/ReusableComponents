import React from 'react';
import styled from 'styled-components';

const StyledTableRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    &:nth-of-type(odd) {
        background-color: #f9f9f9;
    }
`;

const Row = (props: any) => {
    return <StyledTableRow {...props}>{props.children}</StyledTableRow>;
};

export default Row;

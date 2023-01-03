
import React from 'react';
import styled from 'styled-components';
import Row from '../atoms/Row';
import Search from '../molecules/Search';
import { TableProps } from './Table.types';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

`;

const StyledTableHead = styled.thead`
  background-color: #f5f5f5;
`;

const StyledTableHeader = styled.td`
  vertical-align: middle;
  font-weight: bold;
  text-align: left;
  width: 200px;
`;

const StyledCell = styled.div`
// background-color: red;
    width: 200px;
`

const Table = (props: TableProps) => {
    const { headings, data } = props;

    return (
        <>
            <StyledTable>
                <StyledTableHead>
                    <Row>
                        {headings.map((heading) => (
                            <StyledTableHeader key={heading}>{heading}</StyledTableHeader>
                        ))}
                    </Row>
                </StyledTableHead>
                {data.map((row, index) => (
                    <Row key={index}>
                        {row.map((cell: any, index: any) => (
                            <StyledCell key={index}>{cell}</StyledCell>
                        ))}
                    </Row>
                ))}
            </StyledTable>
        </>

    );
};

export default Table;

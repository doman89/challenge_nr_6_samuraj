import React from 'react';
import { StyledTableCell } from '../common/StyledTableCell/StyledTableCell';
import { StyledTableRow } from '../common/StyledTableRow/StyledTableRow';

interface TableRowLetterProps {
	letter: string;
}

export const TableRowLetter: React.FC<TableRowLetterProps> = props => {
	return (
		<StyledTableRow>
			<StyledTableCell colSpan={6} component="td" scope="row">
				{props.letter}
			</StyledTableCell>
		</StyledTableRow>
	);
};
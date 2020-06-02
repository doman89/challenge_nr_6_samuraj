import React from 'react';
import { StyledTableCell } from '../common/StyledTableCell/StyledTableCell';
import { StyledTableRow } from '../common/StyledTableRow/StyledTableRow';
import { Character } from '../../actions/charactersAction';

export const TableRow: React.FC<Character> = props => {
	return (
		<StyledTableRow>
			<StyledTableCell component="th" scope="row">
				{props.name}
			</StyledTableCell>
			<StyledTableCell align="right">
				{props.eye_color}
			</StyledTableCell>
			<StyledTableCell align="right">
				{props.gender}
			</StyledTableCell>
			<StyledTableCell align="right">
				{props.hair_color}
			</StyledTableCell>
			<StyledTableCell align="right">
				{props.height}
			</StyledTableCell>
			<StyledTableCell align="right">
				{props.mass}
			</StyledTableCell>
		</StyledTableRow>
	);
};
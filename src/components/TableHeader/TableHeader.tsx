import React from 'react';
import {
	TableHead,
	TableRow,
} from '@material-ui/core';
import { StyledTableCell } from '../common/StyledTableCell/StyledTableCell';

export const TableHeader: React.FC = () => (
	<TableHead>
		<TableRow>
			<StyledTableCell>Name</StyledTableCell>
			<StyledTableCell align="right">Eyes Color</StyledTableCell>
			<StyledTableCell align="right">Gender</StyledTableCell>
			<StyledTableCell align="right">Hair Color</StyledTableCell>
			<StyledTableCell align="right">Height</StyledTableCell>
			<StyledTableCell align="right">Mass</StyledTableCell>
		</TableRow>
	</TableHead>
);

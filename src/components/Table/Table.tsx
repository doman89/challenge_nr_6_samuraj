import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Table as MUITable,
	TableBody,
	TableContainer,
} from '@material-ui/core';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { TableRowLetter } from '../TableRowLetter/TableRowLetter';
import { RootState } from '../../reducers/rootReducer';

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export const Table: React.FC = () => {
	const classes = useStyles();
	const characters = useSelector((state: RootState) => state.characters);
	const tableData: JSX.Element[] = [];

	characters.forEach((keysCharacters, key) => {
		tableData.push(
			// eslint-disable-next-line react/no-array-index-key
			<React.Fragment key={key}>
				<TableRowLetter letter={key} />
				{keysCharacters.map(character => <TableRow key={character.name} {...character} />)}
			</React.Fragment>
		);
	});

	return (
		<TableContainer component={Paper}>
			<MUITable aria-label="customized table" className={classes.table}>
				<TableHeader />
				<TableBody>
					{tableData}
				</TableBody>
			</MUITable>
		</TableContainer>
	);
};
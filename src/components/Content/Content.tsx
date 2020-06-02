import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { useDispatch } from 'react-redux';
import { Table } from '../Table/Table';
import { getDataFromServer } from '../../actions/charactersAction';
import { default as ContentStyles } from './Content.module.scss';

const style = bemCssModules(ContentStyles);

export const Content: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getDataFromServer());
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []
	);

	return (
		<section className={style()}>
			<Switch>
				<Route component={Table} path="/" />
			</Switch>
		</section>
	);
};

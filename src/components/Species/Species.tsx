import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { default as bemCssModules } from 'bem-css-modules';
import { RootState } from '../../reducers/rootReducer';
import { default as ListingStyles } from '../common/ListingStyles/Listing.module.scss';

const style = bemCssModules(ListingStyles);

export const Species: React.FC = () => {
	const species = useSelector((state: RootState) => state.species);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	species.sort((a, b) => a.name > b.name ? 1 : -1);

	return (
		<nav className={style()}>
			<p className={style('title')}>Species in SW universe:</p>
			<ul className={style('list')}>
				{species.map(species => (
					<li className={style('list-element')} key={species.name}>
						<Link className={style('link')} to={`/species/${species.name}`}>
							{species.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
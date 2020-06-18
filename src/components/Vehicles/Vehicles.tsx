import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { default as bemCssModules } from 'bem-css-modules';
import { RootState } from '../../reducers/rootReducer';
import { default as ListingStyles } from '../common/ListingStyles/Listing.module.scss';

const style = bemCssModules(ListingStyles);

export const Vehicles: React.FC = () => {
	const vehicles = useSelector((state: RootState) => state.vehicles);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	vehicles.sort((a, b) => a.name > b.name ? 1 : -1);

	return (
		<nav className={style()}>
			<p className={style('title')}>Vehicles in SW universe:</p>
			<ul className={style('list')}>
				{vehicles.map(vehicle => (
					<li className={style('list-element')} key={vehicle.name}>
						<Link className={style('link')} to={`/vehicles/${vehicle.name}`}>
							{vehicle.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
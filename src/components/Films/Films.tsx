import React from 'react';
import bemCssModules from 'bem-css-modules';
import { default as FilmsStyles } from '../common/ListingStyles/Listing.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { Link } from 'react-router-dom';

const style = bemCssModules(FilmsStyles);

export const Films: React.FC = () => {
	const films = useSelector((state: RootState) => state.films);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	films.sort((a, b) => a.title > b.title ? 1 : -1);

	return (
		<nav className={style()}>
			<h2 className={style('title')}>Films from Star-Wars universe</h2>
			<ul className={style('list')}>
				{films.map(film => (
					<li className={style('list-element')} key={film.title}>
						<Link className={style('link')} to={`/films/${film.title}`}>
							{film.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
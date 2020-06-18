import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bemCssModules from 'bem-css-modules';
import { RootState } from '../../reducers/rootReducer';
import { Species } from '../../helpers/Species';
import { default as ListingStyles } from '../common/ListingStyles/Listing.module.scss';

const style = bemCssModules(ListingStyles);

export const SpeciesPage: React.FC = () => {
	const { name } = useParams();
	const state = useSelector((state: RootState) => state);
	const species = new Species(name, state);

	return (
		<article className={style()}>
			<h2 className={style('title')}>
				{`Name: ${species.name}`}
			</h2>
			<ul className={style('list')}>
				<p>People:</p>
				{species.people.map(character => (
					<li className={style('list-element')} key={character}>
						<Link className={style('link')} to={`/characters/${character}`} >
							{character}
						</Link>
					</li>
				))}
			</ul>
			<ul className={style('list')}>
				<p>Films:</p>
				{species.films.map(film => (
					<li className={style('list-element')} key={film}>
						<Link className={style('link')} to={`/films/${film}`} >
							{film}
						</Link>
					</li>
				))}
			</ul>
		</article>
	);
};
import React from 'react';
import bemCssModules from 'bem-css-modules';
import { default as CharatersStyles } from '../common/ListingStyles/Listing.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { Link } from 'react-router-dom';

const style = bemCssModules(CharatersStyles);

export const Characters: React.FC = () => {
	const characters = useSelector((state: RootState) => state.characters);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	characters.sort((a, b) => a.name > b.name ? 1 : -1);

	return (
		<nav className={style()}>
			<h2 className={style('title')}>Charcters from Star-Wars universe</h2>
			<ul className={style('list')}>
				{characters.map(character => (
					<li className={style('list-element')} key={character.name}>
						<Link className={style('link')} to={`/characters/${character.name}`}>
							{character.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
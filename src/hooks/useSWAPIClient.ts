import React from 'react';
import { SWAPIClient } from '../providers/swapiProvider/SWAPIClient';

const SWAPIClientContext = React.createContext(new SWAPIClient('https://swapi.dev/api'));

SWAPIClientContext.displayName = 'swapiClient';

export function useSWAPIClient(): SWAPIClient {
	const clientInstance = React.useContext(SWAPIClientContext);

	return clientInstance;
}
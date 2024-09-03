import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		searchTracks: build.query<
			SEARCH.SearchTracksResponse,
			SEARCH.SearchTracksRequest
		>({
			query: (searchTerm) => ({
				url: '/search',
				method: 'GET',
				params: {
					q: searchTerm,
					type: 'track',
					limit: 10
				}
			}),
			providesTags: ['search']
		})
	})
});

export const { useSearchTracksQuery } = api;

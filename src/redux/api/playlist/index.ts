import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getPlayLists: build.query<
			PLAYLIST.GetPlayListsResponse,
			PLAYLIST.GetPlayListsRequest
		>({
			query: (playlists) => ({
				url: '/me/playlists',
				method: 'GET',
				params: {
					limit: 10
				}
			}),
			providesTags: ['playlist']
		}),
		getPlayListById: build.query<
			PLAYLIST.GetPlayListByIdResponse,
			PLAYLIST.GetPlayListByIdRequest
		>({
			query: (playlist_id) => ({
				url: `/playlists/${playlist_id}`,
				method: 'GET',
				params: {}
			}),
			providesTags: ['playlist']
		})
	})
});

export const { useGetPlayListsQuery, useGetPlayListByIdQuery } = api;

import { create } from 'zustand';

interface FooterStore {
	accessToken: string;
	setAccessToken: (accessToken: string) => void;

	tracksUris: string[];
	setTracksUris: (tracksUris: string[]) => void;

	currentTrackUri: number | null;
	setCurrentTrackUri: (currentTrackUri: number | null) => void;
}

export const useFooterStore = create<FooterStore>((set) => ({
	accessToken: '',
	setAccessToken: (accessToken) => set(() => ({ accessToken: accessToken })),

	tracksUris: [],
	setTracksUris: (tracksUris) => set(() => ({ tracksUris: tracksUris })),

	currentTrackUri: null,
	setCurrentTrackUri: (currentTrackUri) =>
		set(() => ({ currentTrackUri: currentTrackUri }))
}));

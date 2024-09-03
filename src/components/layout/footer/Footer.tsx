'use client';
import { useFooterStore } from '@/stores/useFooterStore';
import SpotifyPlayer from 'react-spotify-web-playback';
import scss from './Footer.module.scss';

const Footer = () => {
	const { accessToken, tracksUris, currentTrackUri, setCurrentTrackUri } =
		useFooterStore();

	return (
		<>
			{tracksUris.length > 0 ? (
				<footer className={scss.Footer}>
					<div className={scss.content}>
						<SpotifyPlayer
							offset={currentTrackUri!}
							token={accessToken}
							uris={tracksUris}
							callback={(state) => {
								if (state.isPlaying) {
									const activeIndex = tracksUris.findIndex(
										(uri) => uri === state.track.uri
									);
									setCurrentTrackUri(activeIndex);
								}
							}}
							styles={{
								activeColor: '#fff',
								bgColor: 'black',
								color: '#fff',
								loaderColor: '#fff',
								sliderColor: '#1cb954',
								trackArtistColor: '#ccc',
								trackNameColor: '#fff'
							}}
						/>
					</div>
				</footer>
			) : (
				''
			)}
		</>
	);
};

export default Footer;

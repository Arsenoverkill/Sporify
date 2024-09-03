'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSearchTracksQuery } from '@/redux/api/search';
import scss from './Tracks.module.scss';
import axios from 'axios';
import { useFooterStore } from '@/stores/useFooterStore';

const Tracks = () => {
	const { currentTrackUri, setAccessToken, setTracksUris, setCurrentTrackUri } =
		useFooterStore();
	const { searchQuery } = useParams();
	const decodedQuery = decodeURIComponent(String(searchQuery));
	const { data, isLoading } = useSearchTracksQuery(decodedQuery);

	const getAccessToken = async () => {
		const { data: token } = await axios.get('/api/auth/get-access-token');
		setAccessToken(token);
	};

	useEffect(() => {
		getAccessToken();
	}, []);

	useEffect(() => {
		if (data?.tracks.items) {
			const tracks = data.tracks.items.map((item) => item.uri);
			setTracksUris(tracks);
		}
	}, [data]);

	return (
		<section className={scss.Tracks}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.tracks}>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							data?.tracks.items.map((item, index) => (
								<div
									key={index}
									className={
										index === currentTrackUri
											? `${scss.track} ${scss.active}`
											: `${scss.track}`
									}
									onClick={() => setCurrentTrackUri(index)}
								>
									<img src={item.album.images[0].url} alt={item.name} />
									<h5>{item.name}</h5>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tracks;

'use client';
import { useParams } from 'next/navigation';
import { useGetPlayListByIdQuery } from '@/redux/api/playlist';
import scss from './Playlist.module.scss';

const Playlist = () => {
	const { playlistId } = useParams();
	const { data } = useGetPlayListByIdQuery(String(playlistId));
	console.log("🚀 ~ Playlist ~ data:", data)

	return (
		<div className={scss.PlayList}>
			<div className="container">
				<div className={scss.content}>
					{data?.tracks.items.map((item, index) => (
						<div key={index}>
							<h3>{item.track.name}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Playlist;

'use client';
import { useGetPlayListsQuery } from '@/redux/api/playlist';
import scss from './PlayLists.module.scss';
import { useRouter } from 'next/navigation';

const PlayLists = () => {
	const { data } = useGetPlayListsQuery();

	const router = useRouter();

	return (
		<div className={scss.PlayLists}>
			<div className="container">
				<div className={scss.content}>
					{data?.items.map((item, index) => (
						<div
							onClick={() => router.push(`/playlist/${item.id}`)}
							key={index}
						>
							<h4>{item.id}</h4>
							<span>{item.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PlayLists;

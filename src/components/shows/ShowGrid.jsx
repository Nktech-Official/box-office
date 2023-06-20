import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStarredShows';

export default function ShowGrid({ shows }) {
  const [starredShows, dispatchStarred] = useStarredShows();
  console.log(starredShows);

  /**
   *
   * @param {Number} showId
   */
  const starMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    isStarred
      ? dispatchStarred({ type: 'UNSTAR', showId: showId })
      : dispatchStarred({ type: 'STAR', showId: showId });
  };

  return (
    <div>
      {shows.map(data => {
        const show = data.show;
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : '/image-not-found.png'}
            summary={show.summary}
            onStarClick={starMeClick}
            isStarred={starredShows.includes(show.id)}
          />
        );
      })}
    </div>
  );
}

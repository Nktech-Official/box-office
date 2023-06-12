import ShowCard from './ShowCard';

export default function ShowGrid({ shows }) {
  return (
    <div>
      {shows.map(data => {
        const show = data.show;
        return (
          <ShowCard
            key={show.id}
            name={show.name}
            image={show.image ? show.image.medium : '/image-not-found.png'}
            summary={show.summary}
          />
        );
      })}
    </div>
  );
}

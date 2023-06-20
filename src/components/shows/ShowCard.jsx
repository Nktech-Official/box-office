import { Link } from 'react-router-dom';

export default function ShowCard({ name, image, summary, id }) {
  const SummaryStriped = summary
    ? summary.replace(/<.+?>/g, '').split(' ').slice(0, 10).join(' ')
    : 'No Description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{SummaryStriped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button type="button">star me</button>
      </div>
    </div>
  );
}

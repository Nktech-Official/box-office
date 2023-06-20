import ActorsCard from './ActorsCard';
import { FlexGrid } from '../common/FlexGrid';

export default function ActorsGrid({ actors }) {
  return (
    <FlexGrid>
      {actors.map(data => {
        const actor = data.person;
        return (
          <ActorsCard
            key={actor.id}
            name={actor.name}
            image={actor.image ? actor.image.medium : '/image-not-found.png'}
            gender={actor.gender}
            birthday={actor.birthday}
            deathday={actor.deathday}
            country={actor.country ? actor.country.name : null}
          />
        );
      })}
    </FlexGrid>
  );
}
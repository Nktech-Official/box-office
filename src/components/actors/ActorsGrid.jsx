import ActorsCard from './ActorsCard';
import { FlexGrid } from '../common/FlexGrid';
import imageNotFound from '../../lib/image-not-found.png';

export default function ActorsGrid({ actors }) {
  return (
    <FlexGrid>
      {actors.map(data => {
        const actor = data.person;
        return (
          <ActorsCard
            key={actor.id}
            name={actor.name}
            image={actor.image ? actor.image.medium : imageNotFound}
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

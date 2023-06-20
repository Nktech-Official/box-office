import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

export default function ActorsCard({
  name,
  image,
  gender,
  country,
  birthday,
  deathday,
}) {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && ` (${gender})`}
      </h1>
      <p>{country ? `comes from ${country}` : 'unknown country'}</p>
      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
}

import { styled } from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { StarIcon } from '../common/StarIcon';
export default function ShowCard({
  name,
  image,
  summary,
  id,
  onStarClick,
  isStarred,
}) {
  const SummaryStriped = summary
    ? summary.replace(/<.+?>/g, '').split(' ').slice(0, 10).join(' ')
    : 'No Description';
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{SummaryStriped}...</p>
      <ActionSection>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <StarBtn type="button" onClick={() => onStarClick(id)}>
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
}
const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

import { styled } from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { StarIcon } from '../common/StarIcon';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
  const starBtnRef = useRef();

  const handelStarClick = () => {
    onStarClick(id);
    const starBtnEl = starBtnRef.current;
    if (!starBtnEl) return;
    if (isStarred) starBtnEl.classList.remove('animate');
    else starBtnEl.classList.add('animate');
  };
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{SummaryStriped}...</p>
      <ActionSection>
        <Link to={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </Link>
        <StarBtn ref={starBtnRef} type="button" onClick={handelStarClick}>
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
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

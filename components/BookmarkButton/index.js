import Heart from "../../assets/heart.svg";
import styled from "styled-components";

export default function BookmarkButton({ onToggleBookmark, isBookmarked }) {
  return (
    <>
      <StyledButton type="button">
        <StyledHeart
          aria-label="Click to add the activity to bookmarks"
          width={55}
          onClick={onToggleBookmark}
          $isBookmarked={isBookmarked}
        />
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  padding: 5px;
  position: absolute;
  right: 15px;
  top: 10px;
  border: none;
  background-color: transparent;
`;

const StyledHeart = styled(Heart)`
  fill: ${({ $isBookmarked }) => ($isBookmarked ? "var(--coral)" : "white")};
`;

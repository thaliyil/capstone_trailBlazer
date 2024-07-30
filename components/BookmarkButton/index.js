import Heart from "../../assets/heart.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ $isBookmarked }) =>
    $isBookmarked ? "orange" : "white"};
  border-radius: 5px;
`;

export default function BookmarkButton({ onToggleBookmark, isBookmarked }) {
  return (
    <>
      <StyledButton
        onClick={onToggleBookmark}
        $isBookmarked={isBookmarked}
        type="button"
      >
        <Heart width={44} />
      </StyledButton>
    </>
  );
}

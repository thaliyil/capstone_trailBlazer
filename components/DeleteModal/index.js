import styled from "styled-components";
export default function DeleteModal({ onCancel, onConfirm, isOpen }) {
  if (!isOpen) return null;
  return (
    <ModalContainer>
      <p>Are you sure You want to delete this item?</p>
      <button type="button" onClick={onConfirm}>
        Yes
      </button>
      <button type="button" onClick={onCancel}>
        No
      </button>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  position: fixed;
  top: 300px;
  left: 300px;
  right: 300px;
  z-index: 1;
  background-color: white;
  width: 350px;
  height: 100px;
  opacity: 0.9;
`;

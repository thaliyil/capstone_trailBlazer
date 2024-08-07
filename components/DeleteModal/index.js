import styled from "styled-components";
export default function DeleteModal({ onCancel, onConfirm, showModal }) {
  if (!showModal) return null;
  return (
    <ModalContainer>
      <p>Are you sure you want to delete this item?</p>
      <ModalButton type="button" onClick={onConfirm}>
        <b>Yes</b>
      </ModalButton>
      <ModalButton type="button" onClick={onCancel}>
        <b>No</b>
      </ModalButton>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  position: fixed;
  top: 300px;
  left: 20px;
  right: 20px;
  z-index: 1;
  background-color: white;
  padding: 20px;
  opacity: 0.9;
`;

const ModalButton = styled.button`
  background-color: orange;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  width: 10rem;
`;

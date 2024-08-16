import styled from "styled-components";

export default function DeleteModal({ onCancel, onConfirm, showModal }) {
  if (!showModal) return null;
  return (
    <ModalBackground>
      <ModalContainer>
        <p>Are you sure you want to delete this item?</p>
        <ModalButton type="button" onClick={onConfirm}>
          <b>Yes</b>
        </ModalButton>
        <ModalButton type="button" onClick={onCancel}>
          <b>No</b>
        </ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
}
const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 2;
`;
const ModalContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  position: fixed;
  top: 200px;
  left: 20px;
  right: 20px;
  z-index: 3;
  background-color: var(--light-green);
  padding: 20px;
  opacity: 0.9;
`;

const ModalButton = styled.button`
  background-color: var(--coral);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  width: 10rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

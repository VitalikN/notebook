import styled from '@emotion/styled';

export const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 350px;
  width: 100%;
  padding: 30px;
  background-color: rgb(0, 30, 60);
  border-radius: 20px;
`;

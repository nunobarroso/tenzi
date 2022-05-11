import styled from "styled-components";

export const DieFace = styled.div`
  height: 50px;
  width: 50px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: ${({ isHeld }) => (isHeld ? "#59E391" : "#ffffff")};
`;

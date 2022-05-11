import styled from "styled-components";

export const MainBtn = styled.button`
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 6px;
  background-color: #5035ff;
  color: white;
  font-size: 1.2rem;
  font-family: "Karla", sans-serif;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
  }
`;

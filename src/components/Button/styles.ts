import styled from "styled-components";

interface IButtonMainProps {
  backgroundColor: string;
}

export const ButtonMain = styled.button<IButtonMainProps>`
  border: 1px solid #f10;
  border-radius: 10px;
  padding: 5px;
  color: #fff;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

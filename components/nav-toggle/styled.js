import styled from "styled-components";

export const NavToggleButton = styled.button`
  position: absolute;
  top: -8px;
  right: 0;
  width: ${({theme}) => theme.space[5] + theme.space[3]}px;
  border: none;
  background: none;
  font-size: ${({theme}) => theme.fontSizes[7]+theme.fontSizes[1]}px;
  color: black;
`;
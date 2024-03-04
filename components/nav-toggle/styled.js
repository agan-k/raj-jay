import styled from "styled-components";
import { Z_INDEX } from "../../utils/constants";
import { mediaQuery } from "../../utils/mediaQuery";

export const NavToggleButton = styled.button`
  position: ${({$isNavOpen}) => $isNavOpen ? 'fixed' : 'absolute'};
  top: -8px;
  padding: 0;
  right: 0;
  width: ${({theme}) => theme.space[5] + theme.space[3]}px;
  border: none;
  background: none;
  font-size: ${({theme}) => theme.fontSizes[7]+theme.fontSizes[1]}px;
  color: black;
  z-index: ${Z_INDEX.mobileNav};
`;
import styled from "styled-components";
import { Z_INDEX } from "../../utils/constants";
import { mediaQuery } from "../../utils/mediaQuery";

export const NavToggleButton = styled.button`
  top: -8px;
  padding: 0;
  right: 0;
  height: ${({theme}) => theme.space[5]}px;
  // width: ${({theme}) => theme.space[5]}px;
  border: none;
  background: none;
  font-size: ${({theme}) => theme.fontSizes[6]}px;
  color: black;
  z-index: ${Z_INDEX.mobileNav};
  ${mediaQuery({
    position: [
      ({$isNavOpen}) => $isNavOpen ? 'fixed' : 'absolute',
      'relative',
    ],
  })}
`;
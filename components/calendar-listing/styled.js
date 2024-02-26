import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Listing = styled.div`
  margin-bottom: ${({theme}) => theme.space[3]}px;
  ${mediaQuery({
    width: ['unset', ({$width}) => $width],
    marginBottom: [
      ({theme}) => theme.space[5]+'px',
      ({theme}) => theme.space[3]+'px',
    ],
    padding: ['unset', ({theme}) => theme.space[3]+'px']
  })}
`;

export const Header = styled.div`

`;

export const Body = styled.div`
  ul {
    font-style: italic;
    padding: 0 16px;
    li {
      font-size: 12px;
    }
  }
`;

export const Footer = styled.div`
`;

export const Icon = styled.img`
  height: ${({theme}) => theme.space[3]+theme.space[2]}px;
  opacity: ${({theme}) => theme.opacity.faded};
  vertical-align: baseline;
`;

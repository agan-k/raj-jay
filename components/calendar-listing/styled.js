import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Listing = styled.div`
  width: 100%;
  letter-spacing: 1px;
  margin-bottom: 32px;
  padding: 8px;
`;

export const Header = styled.div`

`;

export const Body = styled.div`
  ul {
    list-style: none;
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
  height: 12px;
  opacity: .4;
  vertical-align: baseline;
`;

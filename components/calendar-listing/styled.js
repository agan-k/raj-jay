import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Listing = styled.div`
  width: 100%;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-bottom: 32px;
`;

export const Header = styled.div`
  h2 {
    font-weight: 500;
  }
  h3 {
    text-transform: capitalize;
  }
  img {
    height: 1.3rem;
    opacity: .7;
    margin: .2rem 0 0 0;
    transition: .2s;
    padding-top: .2rem;
  }
`;

export const Body = styled.div`
  ul {
    list-style: none;
    font-style: italic;
    padding: 0;
    li {
      padding: .2rem;
    }
  }
`;

export const Footer = styled.div`
  
`;

export const Links = styled.div`
  img {
    display: block;
    height: 1.3rem;
    transition: .2s;
  }
`;

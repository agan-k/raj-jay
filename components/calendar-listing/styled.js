import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Listing = styled.div`
  width: 80%;
  min-height: min-content;
  padding: 1rem;
  margin: .5rem 0;
  box-shadow: 0px 3px 7px 1px rgb(245, 245, 245);
`;

export const Header = styled.div`
  h2 {
    font-weight: 500;
    margin: 1rem 0 0 1rem;
    text-transform: capitalize;
  }
  h3 {
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0 .5rem 1rem;
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
    margin: .5rem 0;
    font-weight: 100;
    letter-spacing: 1px;
    font-style: italic;
    li {
      padding: .2rem;
    }
  }
`;

export const Footer = styled.div`
  h4 {
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0 .5rem 1rem;
  }
`;

export const Links = styled.div`
margin-left: 1rem;
  img {
    display: block;
    height: 1.3rem;
    opacity: .7;
    margin: .2rem 0 0 0;
    transition: .2s;
    padding-top: .2rem;
  }
`;

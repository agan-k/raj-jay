import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.footer`
  ${mediaQuery({
    justifyContent: ['center', 'start'],
  })}
  display: flex;
  a {
    text-decoration: none;
  }
  a:hover {
    color: orange;
  }
`;
export const FlipperWrapper = styled.div`
  ${mediaQuery({
    position: ['unset', 'relative'],
    display: ['flex', 'initial'],
    alignItems: ['end', 'unset'],
    height: ['100px', '300px'],
    width: ['unset', '300px'],
  })}
`;
export const Flipper = styled.div`
  ${mediaQuery({
    position: ['unset', 'absolute'],
    top: ['unset', '130px'],
    left: ['unset', '-130px'],
    transform: ['unset', 'rotate(-90deg)'],
  })}
`;
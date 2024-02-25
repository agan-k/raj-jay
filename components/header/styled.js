import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: ${({theme}) => theme.space[4]}px;
  ${mediaQuery({
    width: ['96%', '80%'],
    maxWidth: ['unset', '1200px']
  })}
`;

export const Logo = styled.div`
  display: flex;
  min-width: 20%;
  h1 {
    text-transform: uppercase;
    white-space: nowrap;
    margin: 0;
    font-weight: ${({theme}) => theme.fontWeight.thin};
    font-size: ${({theme}) => theme.fontSizes[4]}px;
  }
  ${mediaQuery({
  })}
`;

export const ActivePage = styled.div`
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  letter-spacing: ${({theme}) => theme.letterSpacing[2]}px;
  color: ${({theme}) => theme.colors.diffused};
  background-color: black;
  height: min-content;
  padding-left: ${({theme}) => theme.space[2]}px;
  padding-right: ${({theme}) => theme.space[1]}px;
`;
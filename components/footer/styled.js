import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.footer`
  // height: ${({theme}) => theme.space[7]}px;
  // background: url('/images/footer-bg.png');
  border-bottom: ${({theme}) => theme.borders.dashedGray};

  border-bottom-right-radius: 50px 50px;
  // border-bottom-left-radius: 50px 50px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: ${({theme}) => theme.space[2]}px;
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  margin-top: ${({theme}) => theme.space[5]}px;
  // margin-bottom: ${({theme}) => theme.space[5]}px;
  &:hover a {
    color: ${({theme}) => theme.colors.diffused};
  }
`;
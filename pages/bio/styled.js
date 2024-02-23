import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  h2, p {
    margin-bottom: ${({theme}) => theme.space[3]}px;
  }
  p {
    margin-top: 0;
  }
  img {
    float: left;
    margin-right: ${({theme}) => theme.space[4]}px;
    margin-bottom: ${({theme}) => theme.space[4]}px;
    max-height: ${({theme}) => theme.space[8]}px;
    border: ${({theme}) => theme.borders.thinCharcoal};
    border-radius: 12px;
  }
`;
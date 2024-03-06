import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${mediaQuery({
    fontSize: [
      ({theme}) => theme.fontSizes[3]+'px',
      'unset'
    ],
  })}
`;
export const LinkCardContainer = styled.div`
  width: 16%;
  text-align: right;
  padding: ${({theme}) => theme.space[3]}px;
  margin: ${({theme}) => theme.space[1]}px;
  background: ${({theme}) => theme.colors.diffused};
  ${mediaQuery({
    width: ['48%', '16%']
  })}
  
`;
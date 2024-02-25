import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  margin-top: ${({theme}) => theme.space[5]}px;
`;
export const PressLogo = styled.img`
  max-height: ${({theme}) => theme.space[7]}px;
  max-width: ${({theme}) => theme.space[8]}px;
`;
export const ArticleBody = styled.div`
  img {
    ${mediaQuery({
      width: [
        '100%',
        ({theme}) => theme.space[9]+'px',
      ],
    })}
  }
`;

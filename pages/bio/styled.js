import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  img {
    float: left;
    max-height: ${({theme}) => theme.space[8]}px;
    border: ${({theme}) => theme.borders.thinCharcoal};
    ${mediaQuery({
      width: ['100%', 'unset'],
      margin: [
        'unset',
        ({theme}) => `0 ${theme.space[4]}px ${theme.space[4]}px 0`,
      ],
      float: ['unset', 'left'],
      maxHeight: [
        'unset',
        ({theme}) => `${theme.space[8]}px`,
      ]
    })}
  }
`;
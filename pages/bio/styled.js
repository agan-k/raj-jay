import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
h2 {
  ${mediaQuery({
    margin: ['0', 'unset']
  })}
  
}
  h2, p {
    margin-bottom: ${({theme}) => theme.space[3]}px;
  }
  p {
    margin-top: 0;
  }
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
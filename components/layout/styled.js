import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  ${mediaQuery({
    marginTop: [
      ({theme}) => theme.space[6]+'px',
      'unset'
    ],
    width: ['96%', '80%'],
    maxWidth: ['unset', '1200px']
  })}
`;
export const PageWrapper = styled.main`
  min-height: 90vh;
`;
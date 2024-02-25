import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  ${mediaQuery({
    display: ['unset', 'flex'],
    justifyContent: ['unset', 'space-between'],
  })}
`;
export const PublicityWrapper = styled.div`
  ${mediaQuery({
    width: ['100%', '30%'],
  })}
  `;
  export const MessageWrapper = styled.div`
  ${mediaQuery({
    width: ['100%', '50%'],
  })}
`;
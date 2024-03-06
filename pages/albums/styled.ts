import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
display: flex;
  section {
    ${mediaQuery({
      display: ['none', 'unset'],
      width: ['unset', '70%'],
    })}
  }
  aside {
    ${mediaQuery({
      width: ['100%', '30%'],
    })}
  }
`;
export const UidContainer = styled.div`
  ${mediaQuery({
    display: ['unset', 'flex'],
    justifyContent: ['unset', 'space-between']
  })}
  section {
    ${mediaQuery({
      width: ['100%', '70%'],
    })}
  }
  aside {
    ${mediaQuery({
      width: ['unset', '30%'],
      display: ['none', 'unset'],
    })}
  }
`;

export const DisplayOption = styled.div`
  ${mediaQuery({
    display: ['block', 'none'],
  })}
`;
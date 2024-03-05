import styled from "styled-components";
import { mediaQuery } from "../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  section,
  ${mediaQuery({
    display: ['initial', 'flex'],
    gap: [
      'unset',
      ({theme}) => theme.space[5]+'px',
    ]
  })}
  aside {
  }
  section {
    flex: 2.3;
  }
  aside {
    flex: 1;
  }
`;
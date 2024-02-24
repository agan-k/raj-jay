import styled from "styled-components";
import { mediaQuery } from "../utils/mediaQuery";
import {theme} from '../theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: ${({theme}) => theme.space[5]}px;
  section,
  aside {
  }
  section {
    flex: 2.3;
  }
  aside {
    flex: 1;
  }
`;
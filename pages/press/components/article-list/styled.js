import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  ul {
    padding: 0;
    margin: 0;
    margin-left: ${({theme}) => theme.space[3]}px;
  }
  
`;
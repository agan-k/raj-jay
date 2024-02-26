import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  ${mediaQuery({
    justifyContent: ['space-between', 'end']
  })}
`;
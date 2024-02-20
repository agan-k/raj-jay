import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  section {
    width: 60%;
  }
  aside {
    width: 30%;
  }
`;

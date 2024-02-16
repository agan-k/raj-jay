import styled from "styled-components";
import { mediaQuery } from "../utils/mediaQuery";
import { Z_INDEX } from "../utils/constants";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  section,
  aside {
    margin-top: 16px;
  }
  section {
    width: 70%;
  }
  aside {
    width: 28%;
  }
`;
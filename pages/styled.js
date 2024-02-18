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

export const BlockTitle = styled.div`
  font-size: 16px;
  font-weight: 100;
  border-top: 1px dashed grey;
  letter-spacing: 5px;
  text-transform: lowercase;
  margin-bottom: 24px;
`;
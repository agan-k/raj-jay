import styled from "styled-components";
import { mediaQuery } from "../utils/mediaQuery";
import { Z_INDEX } from "../utils/constants";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  section,
  aside {
  }
  section {
    width: 70%;
  }
  aside {
    width: 28%;
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        transition: .7s;
      }
    }
  }
`;
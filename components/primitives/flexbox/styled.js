import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({justifyContent}) => justifyContent};
`;
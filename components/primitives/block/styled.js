import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
  padding: ${({$padding}) => $padding};
  margin-top: ${({$marginTop}) => $marginTop}px;
  margin-Bottom: ${({$marginBottom}) => $marginBottom}px;

`;
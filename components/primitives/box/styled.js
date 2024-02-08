import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
width: ${({width}) => width};
margin: ${({margin}) => margin};
  margin-left: ${({marginLeft}) => marginLeft};
`;
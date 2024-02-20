import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
text-align: ${({textAlign}) => textAlign};
  font-size: 16px;
  font-weight: 100;
  border-top: 1px dashed grey;
  padding-top: 2px;
  letter-spacing: 5px;
  text-transform: lowercase;
  margin: ${({margin}) => margin};
`;
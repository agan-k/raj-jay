import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
  letter-spacing: ${({letterSpacing}) => letterSpacing + 'px'};
  font-size: ${({fontSize}) => fontSize + 'px'};
  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWeight}) => fontWeight};
`;
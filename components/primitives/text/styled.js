import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
  letter-spacing: ${({letterSpacing}) => letterSpacing + 'px'};
  font-size: ${({fontSize}) => fontSize + 'px'};
  font-style: ${({fontStyle}) => fontStyle};
  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWeight}) => fontWeight};
  text-align: ${({textAlign}) => textAlign};
  vertical-align: ${({verticalAlign}) => verticalAlign};
  text-transform: ${({textTransform}) => textTransform};
  color: ${({color}) => color};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  white-space: ${({whiteSpace}) => whiteSpace};
  
`;
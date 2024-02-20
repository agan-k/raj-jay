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
  display: ${({display}) => display};
  color: ${({color}) => color};
  background: ${({background}) => background};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  border: ${({border}) => border};
  white-space: ${({whiteSpace}) => whiteSpace};
  
`;
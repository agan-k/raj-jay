import styled from "styled-components";
import { BoxProps } from "./Box";

export const Container = styled.div<BoxProps>`
  position: ${({$position}) => $position};
  flex: ${({$flex}) => $flex};
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};
  margin: ${({$margin}) => $margin};
  padding: ${({$padding}) => $padding};
  margin-top: ${({$marginTop}) => $marginTop + 'px'};
  margin-bottom: ${({$marginBottom}) => $marginBottom + 'px'};
  margin-left: ${({$marginLeft}) => $marginLeft + 'px'};
  padding-bottom: ${({$paddingBottom}) => $paddingBottom + 'px'};
  background: ${({$background}) => $background};
  border: ${({$border}) => $border};

`;
import styled from "styled-components";
import { FlexBoxProps } from "./FlexBox";

export const Container = styled.div<FlexBoxProps>`
  width: ${({$width}) => $width};
  gap: ${({$gap}) => $gap};
  display: flex;
  flex-wrap: ${({$flexWrap}) => $flexWrap || 'wrap'};
  flex-direction: ${({$flexDirection}) => $flexDirection};
  justify-content: ${({$justifyContent}) => $justifyContent};
  align-content: ${({$alignContent}) => $alignContent};
  align-items: ${({$alignItems}) => $alignItems};
`;
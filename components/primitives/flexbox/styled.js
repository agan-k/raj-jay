import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
  width: ${({width}) => width};
  display: flex;
  flex-wrap: ${({flexWrap}) => flexWrap || 'wrap'};
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justifyContent}) => justifyContent};
  align-content: ${({alignContent}) => alignContent};
  align-items: ${({alignItems}) => alignItems};
`;
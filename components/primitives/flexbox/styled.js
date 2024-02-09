import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(flexDirection) => flexDirection}
  width: ${({width}) => width};
  justify-content: ${({justifyContent}) => justifyContent};
  align-content: ${({alignContent}) => alignContent};
  align-items: ${({alignItems}) => alignItems};
`;
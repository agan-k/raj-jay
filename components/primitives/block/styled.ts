import styled from "styled-components";
import { BlockProps } from "./Block";

export const Container = styled.div<BlockProps>`
  padding: ${p => p.$padding};
  margin-top: ${p => p.$marginTop}px;
  margin-Bottom: ${p => p.$marginBottom}px;
`;
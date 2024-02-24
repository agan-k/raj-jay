import styled from "styled-components";

export const Container = styled.div`
  width: 16%;
  text-align: right;
  padding: ${({theme}) => theme.space[3]}px;
  margin: ${({theme}) => theme.space[1]}px;
  background: ${({theme}) => theme.colors.diffused};
`;
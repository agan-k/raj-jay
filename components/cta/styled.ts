import styled from "styled-components";

export const Container = styled.footer`
  
`;
export const Image = styled.img`
  width: 50%;
  margin: 0 25%;
  border: ${({theme}) => theme.borders.thinCharcoal}
`;
export const Action = styled.div`
  text-align: center;
  display: block;
  width: 50%;
  margin: 0 auto;
  margin-bottom: ${({theme}) => theme.space[5]}px;
  background: black;
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${({theme}) => theme.colors.diffused};
  padding: ${({theme}) => theme.space[3]}px;
  cursor: pointer;

`;
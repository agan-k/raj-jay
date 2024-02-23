import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
  
export const TitleImage = styled.img`
  width: 50%;
  display: block;
  cursor: ${({pointer}) => pointer ? 'pointer' : ''};
`;

export const Date = styled.div`
  border-top: ${({theme}) => theme.borders.dashedGray};
  font-size: ${({theme}) => theme.fontSizes[6]}px;
  font-weight: ${({theme}) => theme.fontWeight.thin};
  text-transform: uppercase;  
  white-space: nowrap;
  margin-bottom: ${({theme}) => theme.space[4]}px;
`;

export const Body = styled.div`
  width: 40%;
  border-top: ${({theme}) => theme.borders.dashedGray};
  img {
    margin: 16px 15% 0; //centered
    width: 70%;
  }
`;
import styled from "styled-components";

export const Container = styled.div`
`;
  
export const TitleImage = styled.img`
  width: 50%;
  display: block;
  margin: 0 auto;
  cursor: ${({pointer}) => pointer ? 'pointer' : ''};
`;

export const Date = styled.div`
  text-transform: uppercase;  
  white-space: nowrap;
  margin-bottom: 16px;
`;

export const Body = styled.div`
padding-top: 16px;
border-top: 1px dashed grey;
  p {
    color: grey;
  }
  img {
    margin: 16px 15% 0;
    width: 70%;
  }
`;
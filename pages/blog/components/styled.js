import styled from "styled-components";

export const Container = styled.div`
height: min-content;
padding: 12px;
flex-basis: 18%;
margin: 5px;
background: white;
`;
  
export const TitleImage = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
  cursor: ${({pointer}) => pointer ? 'pointer' : ''};
`;

export const Date = styled.div`
  white-space: nowrap;
  margin-bottom: 16px;
`;

export const Body = styled.div`
  p {
    font-size: 12px;
  }
  img {
    width: 100%;
  }
`;
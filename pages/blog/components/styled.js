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
  text-transform: uppercase;  
  white-space: nowrap;
  margin-bottom: 16px;
`;

export const Body = styled.div`
  width: 40%;
  border-top: 1px dashed grey;
  p {
    color: grey;
  }
  img {
    flex: 0 1;
    margin: 16px 15% 0;
    width: 70%;
  }
`;
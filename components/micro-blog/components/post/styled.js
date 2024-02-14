import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
  
export const TitleImage = styled.img`
  height: 128px;
  max-width: 100%;
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
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 128px;
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
  margin-bottom: 32px;
`;

export const Body = styled.div`
  img {
    width: 100%;
  }
`;
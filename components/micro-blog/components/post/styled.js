import styled from "styled-components";

export const Container = styled.div`
  background: white;
  width: 100%;
  margin-bottom: 32px;
`;

export const TitleImage = styled.img`
  max-width: 150px;
  width: 100%;
  display: block;
  margin: 0 auto;
  cursor: ${({pointer}) => pointer ? 'pointer' : ''};
`;

export const Date = styled.div`
  white-space: nowrap;
`;

export const Body = styled.div`
  p {
  }
  img {
    width: 100%;
  }
`;
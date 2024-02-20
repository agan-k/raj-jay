import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 8px;
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
  font-weight: 100;
  text-transform: uppercase;
`;

export const Body = styled.div`
  p {
  }
  img {
    width: 100%;
  }
`;
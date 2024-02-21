import styled from "styled-components";

export const Container = styled.div`
  height: 16px;
  width: 16px;
  display: flex;
  align-items: start;
  border-radius: 5px;
  `;
  export const Arrow = styled.div`
  transform: rotate(-45deg);
  color: ${({$color}) => $color};
  font-weight: 100;
`;
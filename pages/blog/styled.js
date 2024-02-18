import styled from "styled-components";

export const Wrapper = styled.div`
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  flex-wrap: wrap;
  &::after {
    content: "";
    flex: auto;
  }
`;
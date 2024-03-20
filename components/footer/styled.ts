import styled from "styled-components";

export const Container = styled.footer`
display: flex;
justify-content: start;
a {
  text-decoration: none;
}
a:hover {
  color: orange;
}
`;
export const FlipperWrapper = styled.div`
  height: 260px;
  width: 300px;
  position: relative;
`;
export const Flipper = styled.div`
  position: absolute;
  top: 130px;
  left: -95px;
  transform: rotate(-90deg);
`;
import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.footer`
  height: 250px;
  background: url('/images/footer-bg.png');
  border-bottom-right-radius: 50px 50px;
  border-bottom-left-radius: 50px 50px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 16px;
  font-size: 12px;
  color: grey;
  margin: 64px 0;
  a {
    color: grey;
  }
`;
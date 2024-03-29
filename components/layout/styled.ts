import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  ${mediaQuery({
    width: ['96%', '90%'],
    maxWidth: ['unset', '1200px']
  })}
`;
export const PageWrapper = styled.main`
  min-height: 100vh;
`;
import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";
import { Z_INDEX } from "../../utils/constants";

export const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background: white;

`;
export const PageWrapper = styled.main`
  // min-height: 50vh;
`;

export const Banner = styled.div`
  width: 100%;
  height: 250px;
  background: center / cover no-repeat url('/images/banner1.png');
  z-index: ${Z_INDEX.banner};
  img {
    width: 100%;
  }
`;
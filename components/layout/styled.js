import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";
import { Z_INDEX } from "../../utils/constants";

export const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 1200px;
  padding: 0 .5rem 128px .5rem;
  margin: 0 auto;
  background: white;

`;
export const PageWrapper = styled.main`
  min-height: 100vh;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: center / cover no-repeat url('/images/shows_banner.jpg');
  z-index: ${Z_INDEX.banner};
  img {
    width: 100%;
  }
`;
import styled from "styled-components";
import { mediaQuery } from "../utils/mediaQuery";
import { Z_INDEX } from "../utils/constants";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  section {
    width: 60%;
  }
  aside {
    width: 35%;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  // position: absolute;
  margin-top: -140px;
  opacity: .5;
  z-index: ${Z_INDEX.banner};
  img {
    width: 100%;
  }
`;
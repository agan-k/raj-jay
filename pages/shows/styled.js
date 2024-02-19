import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const ListingWrapper = styled.div`
  width: 32%;
`;

export const SelectedPastShows = styled.div`
  width: 60%;
`;

export const FeaturedFlyers = styled.aside`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    opacity: .8;
  }
`;

import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const Banner = styled.div`
  img {
    width: 100%
  }
`;

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  section {
    width: 60%
  }
`;

export const SelectedPastShows = styled.div`
  width: 60%;
`;

export const FeaturedFlyers = styled.aside`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  img {
    width: 100%;
    margin: 1rem 0;
    opacity: .8;
  }
`;

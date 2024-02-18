import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  section {
    width: 80%;
    // display: flex;
    
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
  img {
    width: 100%;
    opacity: .8;
  }
`;

import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";
import { CalendarListingProps } from "./CalendarListing";

export const Listing = styled.div<CalendarListingProps>`
  margin-bottom: ${({theme}) => theme.space[3]}px;
  padding: ${({theme}) => theme.space[3]}px;
  background: ${({$nextShow, theme}) => !$nextShow ? theme.colors.diffused : ''};
  ${mediaQuery({
    width: ['unset', ({$width}) => $width],
    marginBottom: [
      ({theme}) => theme.space[5]+'px',
      ({theme}) => theme.space[3]+'px',
    ],
  })}
`;

export const Header = styled.div`
`;

export const Body = styled.div`
  ul {
    font-style: italic;
    padding: 0 16px;
    li {
    }
  }
`;

export const Footer = styled.div`
`;

export const Icon = styled.img`
  height: ${({theme}) => theme.space[3]+theme.space[2]}px;
  opacity: ${({theme}) => theme.opacity.faded};
  vertical-align: baseline;
`;

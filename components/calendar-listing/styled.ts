import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";
import { CalendarListingProps } from "./CalendarListing";

export const Listing = styled.div<CalendarListingProps>`
  margin-bottom: ${({theme}) => theme.space[3]}px;
  padding: ${({theme}) => theme.space[3]}px;
  border-radius: 15px;
  color: ${({$pastShow, theme}) => $pastShow ? 'blue' : 'red'}
  ${mediaQuery({
    width: ['100%', ({$width}) => $width],
    marginBottom: [
      ({theme}) => theme.space[3]+'px',
      ({theme}) => theme.space[4]+'px',
    ],
    background: [
      'unset',
      ({$pastShow, theme}) => $pastShow ? theme.colors.diffused : '#d0d5db'
    ],
    border: [
      'unset',
      ({$pastShow, theme}) => $pastShow ? 'none' : theme.borders.hover
    ],
    color: [
      ({$pastShow, theme}) => $pastShow ? theme.colors.subtle : '',
    ]
  })}
`;

export const Header = styled.div`
`;

export const Body = styled.div`
  ul {
    font-style: italic;
    padding: 0 16px;
  }
`;

export const Footer = styled.div<CalendarListingProps>`
a {
  color: ${({$pastShow, theme}) => $pastShow ? theme.colors.subtle : ''}
}
`;

export const Icon = styled.img<CalendarListingProps>`
  height: ${({theme}) => theme.space[3]+theme.space[2]}px;
  opacity: ${({theme}) => theme.opacity.faded};
  vertical-align: baseline;
  visibility: ${({$pastShow, theme}) => $pastShow ? 'hidden' : ''}
  
`;

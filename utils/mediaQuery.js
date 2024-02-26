import facepaint from "facepaint";
import {theme} from '../theme';

export const mediaQuery = facepaint(theme.breakpoints.map(
  bp => `@media(min-width: ${bp})`
));
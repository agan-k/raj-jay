import facepaint from "facepaint";
import {theme as staticTheme} from '../theme';

export const mediaQuery = facepaint(staticTheme.breakpoints.map(
  bp => `@media(min-width: ${bp})`
));
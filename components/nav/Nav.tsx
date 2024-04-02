import {MailingList,FlexBox} from "../../components";
import { 
  Container,
  NavRoutes,
  MailingListWrapper,
  MailingListLabel,
  SeparationLine,
} from "./styled";

export interface NavProps {
  navigationRoutes?: any
  $isNavOpen: boolean
}

export const Nav: React.FC<NavProps> = ({navigationRoutes, $isNavOpen}) => {

  return(
    <Container $isNavOpen={$isNavOpen}>
      <NavRoutes>
        <ul>
          {navigationRoutes}
        </ul>
      </NavRoutes>
      <MailingListWrapper>
          <MailingListLabel
          >
          </MailingListLabel>
          <MailingList />
      </MailingListWrapper>
    </Container>
  );
}
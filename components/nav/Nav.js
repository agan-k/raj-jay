import {
  MailingList,
  FlexBox,
} from "../../components"
import { 
  Container,
  NavItem, 
  NavRoutes,
  MailingListWrapper,
  MailingListLabel,
  SeparationLine,
} from "./styled";

export default function Nav({navigationRoutes, $isNavOpen}) {

  return(
    <Container $isNavOpen={$isNavOpen}>
      <NavRoutes>
        <ul>
          {navigationRoutes}
        </ul>
      </NavRoutes>
      <FlexBox $alignItems={'center'}>
        <SeparationLine />
      </FlexBox>
      <MailingListWrapper>
        <FlexBox>
          <MailingListLabel
          >
            mailing list:
          </MailingListLabel>
          <MailingList />
        </FlexBox>
      </MailingListWrapper>
    </Container>
  );
}
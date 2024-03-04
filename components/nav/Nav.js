import {
  MailingList,
  FlexBox,
  Box
} from "../../components"
import { 
  Container,
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
        <SeparationLine $isNavOpen={$isNavOpen} />
      </FlexBox>
      <MailingListWrapper>
          <MailingListLabel
          >
            mailing list:
          </MailingListLabel>
          <MailingList />
      </MailingListWrapper>
    </Container>
  );
}
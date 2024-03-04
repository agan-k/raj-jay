import {
  MailingList,
  FlexBox,
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
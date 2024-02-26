import { useRouter } from "next/router";
import Link from "next/link";
import {
  MailingList,
  FlexBox,
} from "../../components"
import { navLinks, socialLinks as social } from "../../utils/constants";
import { 
  Container,
  NavItem, 
  NavRoutes,
  MailingListWrapper,
  MailingListLabel,
  SeparationLine,
} from "./styled";

export default function Nav({$isNavOpen, handleToggleNav}) {
  const router = useRouter(); 
  const navigationRoutes = navLinks.map(item => 
    <NavItem 
      key={item.name} 
      $active={router.pathname === `${item.url}` ? true : false}
      onClick={handleToggleNav}>
      <Link href={item.url}>
        {item.name}
      </Link>
    </NavItem>
  );

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
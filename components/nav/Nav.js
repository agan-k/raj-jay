import { useRouter } from "next/router";
import Link from "next/link";
import {
  MailingList,
  FlexBox,
  Text,
} from "../../components"
import { navLinks, socialLinks as social } from "../../utils/constants";
import { 
  Container,
  NavItem, 
  NavRoutes,
  SocialAndMailingWrapper,
  SeparationLine,
} from "./styled";

export default function Nav({$isNavOpen}) {
  const router = useRouter(); 
  const navigationRoutes = navLinks.map(item => 
    <NavItem key={item.name} $active={router.pathname === `${item.url}` ? true : false}>
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
      <SocialAndMailingWrapper>
        <FlexBox $alignItems={'start'}>
          <FlexBox>
            <Text 
              letterSpacing={1}
              fontSize={13}
              $textTransform={'lowercase'}
              color={'grey'}
              $padding={'0 .5rem'}
              $whiteSpace={'nowrap'}
            >
              mailing list:
            </Text>&nbsp;
            <MailingList />
          </FlexBox>
        </FlexBox>
      </SocialAndMailingWrapper>
    </Container>
  );
}
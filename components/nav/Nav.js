import { useRouter } from "next/router";
import Link from "next/link";
import {MailingList} from "../../components"
import { navLinks, socialLinks as social } from "../../utils/constants";
import { 
  Container, 
  NavContainer, 
  SocialIcons, 
  NavItem, 
  NavRoutes,
  SocialAndMailingWrapper,
} from "./styled";

export default function Nav({isNavOpen}) {
  const router = useRouter(); 
  const navigationRoutes = navLinks.map(item => 
    <NavItem key={item.name} active={router.pathname === `${item.url}` ? true : false}>
      <Link href={item.url}>
        {item.name}
      </Link>
    </NavItem>
  );
  
  const socialLinks = social.map(item =>
    <a key={item.name} href={item.url} target="_blank">
      <img src={item.icon} alt={item.name} />
    </a>
  );

  return(
    <Container isNavOpen={isNavOpen}>
      <NavRoutes>
        <ul>
          {navigationRoutes}
        </ul>
      </NavRoutes>
      <SocialAndMailingWrapper>
        <SocialIcons>{socialLinks}</SocialIcons>
        <MailingList />
      </SocialAndMailingWrapper>
    </Container>
  );
}
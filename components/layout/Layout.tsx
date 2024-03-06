import {ReactNode} from 'react';
import { Container, PageWrapper } from "./styled";

interface LayoutProps {
  children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return(
    <Container>
      <PageWrapper>
        {children}
      </PageWrapper>
    </Container>
  );
};
export default Layout;
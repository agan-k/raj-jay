
import Head from "next/head";
import { Container, PageWrapper } from "./styled";
import  {Header} from "../../components";

export default function Layout({children, title = 'Rajiv Jayaweera',}) {
  return(
    <Container>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageWrapper>
        {children}
      </PageWrapper>
    </Container>
  );
}

import Head from "next/head";
import { Container, PageWrapper, Banner } from "./styled";
import  {Footer, Header} from "../../components";

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
      <Footer/>
    </Container>
  );
}
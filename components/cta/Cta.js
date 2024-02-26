import Link from "next/link";
import { Container, Image, Action } from "./styled";

export default function Cta({imagePath, action, url}) {
  return(
    <Container>
      <Image src={imagePath} />
      <Link href={url} target="_blank">
        <Action>{action}</Action>
      </Link>
    </Container>
  );
}
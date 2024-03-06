import { ReactNode } from "react";
import Link from "next/link";
import { Container, Image, Action } from "./styled";

interface CtaProps {
  imagePath?: string
  action?: string
  url?: string
}

export const Cta: React.FC<CtaProps> = ({imagePath, action, url}) => {
  return(
    <Container>
      <Image src={imagePath} />
      <Link href={url} target="_blank">
        <Action>{action}</Action>
      </Link>
    </Container>
  );
}
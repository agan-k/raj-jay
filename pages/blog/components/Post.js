import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../../utils/formatPrismicDate";
import HandleMediaLinkModal from "../../../utils/handleMediaLinkModal";
import {Body, Container, Date, Title, TitleImage} from "./styled";

export default function Post({data, setShowModal, setMedia}) {
  console.log(data)
  const hasVideoLink = Boolean(data.data.youtube.url != null);
  const hasTitleImage = Boolean(data.data.title_image.url != null);
  return (
  <Container>
      <aside>
        <Date>{formatPrismicDate(data.data.date)}</Date>
        {hasTitleImage && (
          <TitleImage 
            src={data.data.title_image?.url}
            onClick={() => HandleMediaLinkModal({
              media: data,
              setShowModal: setShowModal,
              setMedia: setMedia,
              })
            }
            pointer={hasVideoLink} 
          /> 
        )}
        <Title
        >
          {data.data.title}
        </Title>
      </aside>
      <Body>
        {RichText.render(data.data.body)}
      </Body>
  </Container>
  );
}
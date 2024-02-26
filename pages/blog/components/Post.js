import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../../utils/formatPrismicDate";
import { FlexBox, Text, Box, BlockTitle } from "../../../components";
import HandleMediaLinkModal from "../../../utils/handleMediaLinkModal";
import {Body, BodyWrapper, Container, Date, Title, TitleImage} from "./styled";

export default function Post({data, setShowModal, setVideoURL}) {
  const hasVideoLink = Boolean(data.youtube.url);
  const hasTitleImage = Boolean(data.title_image.url != null);
  return (
  <Container>
      <aside>
        <Date>{formatPrismicDate(data.date)}</Date>
        {hasTitleImage && (
          <TitleImage 
            src={data.title_image?.url}
            onClick={() => HandleMediaLinkModal({
              url: data.youtube.url,
              setShowModal: setShowModal,
              setMediaURL: setVideoURL,
              })
            }
            pointer={hasVideoLink} 
          /> 
        )}
        <Title
        >
          {data.title}
        </Title>
      </aside>
      <Body>
        {RichText.render(data.body)}
      </Body>
  </Container>
  );
}
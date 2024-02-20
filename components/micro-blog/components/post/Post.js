import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../../../utils/formatPrismicDate";
import HandleVideoLinkModal from "../../../../utils/handleMediaLinkModal";
import {Body, Container, Date, TitleImage} from "./styled";
import { Text } from "../../../../components";

export default function Post({data, setShowModal, setVideoURL}) {
  const hasVideoLink = Boolean(data.youtube.url != null);
  const hasTitleImage = Boolean(data.title_image.url != null);
  const videoLink = hasVideoLink ? data.youtube.url : '';
  return (
  <Container>
    <Date>{formatPrismicDate(data.date)}</Date>
    {hasTitleImage && (
      <TitleImage 
        src={data.title_image?.url}
        onClick={hasVideoLink && (
          () => HandleVideoLinkModal({
          url: videoLink,
          setShowModal: setShowModal,
          setMediaURL: setVideoURL,
          }))
        }
        pointer={hasVideoLink} 
      /> 
    )}
    <Text fontSize={20} margin={'16px 0'} >{data.title}</Text>
    <Body>{RichText.render(data.body)}</Body>
  </Container>
  );
}
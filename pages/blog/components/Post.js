import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../../utils/formatPrismicDate";
import HandleMediaLinkModal from "../../../utils/handleMediaLinkModal";
import {Body, Container, Date, TitleImage} from "./styled";
import { FlexBox, Text, Box, BlockTitle } from "../../../components";

export default function Post({data, setShowModal, setVideoURL}) {
  const hasVideoLink = Boolean(data.youtube.url);
  const hasTitleImage = Boolean(data.title_image.url != null);
  const videoLink = hasVideoLink ? data.youtube.url : '';
  return (
  <Container>
    <FlexBox justifyContent={'space-between'} width={'100%'}>
      <Box width={'50%'}>
        <BlockTitle>
          <Date>{formatPrismicDate(data.date)}</Date>
        </BlockTitle>
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
        <Text 
          fontSize={64} 
          margin={'16px 0'} 
          color={'#e0e0e0'}
          letterSpacing={3}
          >{data.title}</Text>
      </Box>
      <Box width={'50%'}>
        <Body>{RichText.render(data.body)}</Body>
      </Box>

    </FlexBox>
  </Container>
  );
}
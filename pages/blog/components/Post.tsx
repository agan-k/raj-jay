import { RichText } from "prismic-reactjs";
import formatPrismicDate from "../../../utils/formatPrismicDate";
import HandleMediaLinkModal from "../../../utils/handleMediaLinkModal";
import {Body, Container, Date, Title, TitleImage} from "./styled";
import { Dispatch, SetStateAction } from "react";

interface PostProps {
  data: any
  setShowModal: Dispatch<SetStateAction<boolean>>
  setMedia: Dispatch<SetStateAction<any>>
}

export const Post: React.FC<PostProps> = ({
  data, 
  setShowModal, 
  setMedia
}) => {
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
            $pointer={hasVideoLink} 
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
};
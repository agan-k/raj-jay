import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import {Layout, Modal, Banner, BlockTitle, Box} from '../../components';
import HandleMediaLinkModal from '../../utils/handleMediaLinkModal';
import { BANNER_QUOTE } from '../../utils/constants';
import Video from './components/Video'
import {
   Container,
   PhotoGallery,
   VideoGallery,
   Photo,
   PhotoThumb,
} from './styled';

interface MediaProps {
   content: any
}

export const Media: React.FC<MediaProps> = ({content}) => {
   const [showModal, setShowModal] = useState(false);
   const [media, setMedia] = useState(null);
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.filter(item => item.data.press_quote.length > 0); 

   const photosData = content.results.filter(result => 
      result.data.content_type == 'photo'
   );
   const photos = photosData.map(photo => 
      <Photo 
         key={photo.uid} 
         onClick={() => HandleMediaLinkModal({
            media: photo, 
            setShowModal: setShowModal,
            setMedia: setMedia,
         })}>
         <PhotoThumb
            src={photo.data.img.url}
         />
      </Photo>
   );
   const videosData = content.results.filter(result =>
      result.data.content_type == 'video'
   );

   const videos = videosData.map((video) => 
      <Video 
         key={video.uid} 
         setMedia={setMedia}
         setShowModal={setShowModal}
         video={video}
      /> 
   );

   return (
      <Layout>
         <Banner quote={quotes[BANNER_QUOTE.photos]} />
         <Container $blur={showModal ? true : false}>
            <Box $flex={'3'}>
               <BlockTitle $margin={'0 0 16px 0'}>photos</BlockTitle>
               <PhotoGallery>
                  {photos}
               </PhotoGallery>
            </Box>
            <Box $flex={'1'}>
               <BlockTitle $margin={'0 0 16px 0'}>videos</BlockTitle>
               <VideoGallery>
                  {videos}
               </VideoGallery>
            </Box>
         </Container>
         {showModal && (
            <Modal
               closeModal={() => setShowModal(false)}
               media={media}
            />
         )}
      </Layout>
   )    
};
export default Media;

export const getStaticProps = (async() => {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content"),
      { pageSize : 100 }
   );
   return {
      props: {
         content
      }
   };
}) satisfies GetStaticProps;
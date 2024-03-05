import { ArticleLink, Quote } from "..";
import { BlockTitle, Text } from "../../../../components";
import { Container } from "./styled";

interface ArticleListProps {
   content: any
}

export const ArticleList: React.FC<ArticleListProps> = ({content}) => {

  // ---> Reviews
  const press_reviews = content.results.filter(result => 
    result.data.content_type == 'press-reviews'
   );
   const reviews = press_reviews.map((result, index) => 
    <ArticleLink key={result.id} link={result} articleType={result.data.content_type} uid={result.uid} index={index} />
   );

   // ---> Press Releases
   const press_releases = content.results.filter(result => 
    result.data.content_type == 'press-releases'
   );
   const pressReleases = press_releases.map((result, index) => 
    <ArticleLink key={result.id} link={result} articleType={result.data.content_type} uid={result.uid} index={index} />
   );

   // ---> Interviews
   const press_interviews = content.results.filter(result => 
      result.data.content_type == 'press-interviews'
   );
   const interviews = press_interviews.map((result, index) => 
      <ArticleLink key={result.id} link={result} articleType={result.data.content_type} uid={result.uid} index={index} />
   );

   // ---> Features
   const press_features = content.results.filter(result => 
      result.data.content_type == 'press-features'
   );
   const features = press_features.map((result, index) => 
      <ArticleLink key={result.id} link={result} articleType={result.data.content_type} uid={result.uid} index={index} />
   );

   // ---> Quotes
   const quotesData = content.results.filter(result =>
      result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
   );
   const quotes = quotesData.map(quote =>
      <Quote key={quote.id} quote={quote} />
   );

   return(
      <Container>
         <BlockTitle $margin={'0 0 16px 0'}>press releases</BlockTitle>
         <ul>{pressReleases}</ul>

         <BlockTitle $margin={'16px 0'}>reviews</BlockTitle>
         <ul>{reviews}</ul>

         <BlockTitle $margin={'16px 0'}>interviews</BlockTitle>
         <ul>{interviews}</ul>

         <BlockTitle $margin={'16px 0'}>features</BlockTitle>
         <ul>{features}</ul>

         <BlockTitle $margin={'16px 0'}>quotes</BlockTitle>
         <ul>{quotes}</ul>
      </Container>
   );
}
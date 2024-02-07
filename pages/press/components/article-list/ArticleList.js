import { ArticleLink, Quote } from "../../components/";
import { Text } from "../../../../components";
import { Container } from "./styled";


export default function ArticleList({content}) {
  // ---> Reviews
  const press_reviews = content.results.filter(result => 
    result.data.content_type == 'press-reviews'
 )
 const reviews = press_reviews.map(result => 
    <ArticleLink key={result.uid} link={result} articleType={press_reviews} uid={result.uid} />
 )

 // ---> Press Releases
 const press_releases = content.results.filter(result => 
    result.data.content_type == 'press-releases'
 )
 const pressReleases = press_releases.map(result => 
    <ArticleLink key={result.uid} link={result} articleType={press_releases} uid={result.uid} />
 )

 // ---> Interviews
 const press_interviews = content.results.filter(result => 
    result.data.content_type == 'press-interviews'
 )
 const interviews = press_interviews.map(result => 
    <ArticleLink key={result.uid} link={result} articleType={press_interviews} uid={result.uid} />
 )

 // ---> Features
 const press_features = content.results.filter(result => 
    result.data.content_type == 'press-features'
 )
 const features = press_features.map(result => 
    <ArticleLink key={result.uid} link={result} articleType={press_features} uid={result.uid} />
 );

 // ---> Quotes
 const quotes_source = content.results.filter(result =>
    result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
 );
 const quotes = quotes_source.map(quote =>
    <Quote quote={quote} />
 );
  return(
    <Container>
        <Text fontSize={18} letterSpacing={3} fontWeight={600}>press releases</Text>
        <ul>{pressReleases}</ul>

        <Text fontSize={18} letterSpacing={3} fontWeight={600}>reviews</Text>
        <ul>{reviews}</ul>

        <Text fontSize={18} letterSpacing={3} fontWeight={600}>interviews</Text> 
        <ul>{interviews}</ul>

        <Text fontSize={18} letterSpacing={3} fontWeight={600}>features</Text>
        <ul>{features}</ul>
    </Container>
  );
}
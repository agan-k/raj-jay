import {Quote, Box} from "../../components";


export default function QuoteList({content}) {
 const quotes_source = content.results.filter(result =>
    result.data.content_type == 'press-reviews' || result.data.content_type == 'press-interviews'
 );
 const quotes = quotes_source.map(quote =>
    <Quote key={quote.id} quote={quote} />
 );
  return(
    <Box>
      <h4>quotes</h4>
      {quotes}
    </Box>
  );
}
// function handleNewsCard(props) {
//    const news_cards = props.content.results.map(result => result.data.news_card)
//    const video = props.content.results.content_type 
// }


const news_cards = props.content.results.map(result =>
   (result.data.news_card && result.data.content_type !== 'video') ?
      <h1>No video!</h1> : ''
)
import { RichText } from "prismic-reactjs"

{props.press.results.map(item => 
   <li key={item.uid}>
      <Link href="reviews/[id]" as={`reviews/${item.uid}`}>
         <a>
          {RichText.render(item.data.article_title)}
         </a>
      </Link>
  </li>
)
}

const news_cards = props.content.results.map(result => {
   if (result.data.news_card) {
      <div className={styles.grid}>
         <Link href={`${result.content_type}/${result.uid}`} >
            <a>
               {RichText.render(result.data.news_card_blurb)}
            </a>
         </Link>
      </div>
   }
});

{
   RichText.render(result.data.press_body.map(item => 
      item.selectedIndex = 0
      ))
}
console.log(props.press.results[0].data.press_body[0].text)

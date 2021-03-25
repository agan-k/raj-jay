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

const news_cards = props.press.results.map(result => 
   result.
   )
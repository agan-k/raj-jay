

function PressArticle(pressBody, spans) {

   const press = pressBody.map(item => item.map(item => {
      if (item.type == "heading3") {
         return (
            <h3 style={{ width: '100%', margin: '0' }}>{item.text}</h3>
         )
      } else if (item.type == "paragraph") {
         return (
            <p>
               {item.text}
            </p>
         )
      }
   }))

   const link = spans.map(article => article.map(article_spans => {
      if (article_spans > 0 && article_spans.type == "hyperlink")
         return article_spans.type
      }
   ))
   
}

const link = spans.map(article => article.map(article_spans => {
         article_spans.map(item => item.map(item)
}))
     console.log(link)
import { RichText } from "prismic-reactjs"

const news_cards = props.content.results.map(result =>
   result.data.news_card && result.data.content_type == 'video' ?
      alert('klikenzi!') :
      <div key={result.uid} className={styles.card}>
         <Link href={`${result.data.content_type.substr(0, 5)}/${result.uid}`} >
            <a>
               <img src={result.data.img.url}/>
               {RichText.render(result.data.news_card_blurb)}
               <span style={{display: 'block', textAlign: 'right'}}>&rarr;</span>
            </a>
         </Link>
      </div>
)

date.charAt(5) == '' ?
         month = months[date.slice(6, 7) -1] :
         month = months[date.slice(5, 7) - 1]
      return month + ' ' + year
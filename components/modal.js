import React, { Component } from 'react'
import style from './modal.module.css'
import { RichText } from "prismic-reactjs"
import ReactPlayer from 'react-player'




export default class Modal extends Component {
   constructor(props) {
      super(props)
      this.state = {
         count: null
      }
   }
   componentDidMount = () => {
      this.setState({
         count: this.props.index
      })
   }
   render() {
      let detail;
      if (this.props.photos) {
          detail = this.props.photos[this.props.index].data
      } else if (this.props.videos) {
            detail = this.props.videos[this.props.index].data
      } else if (this.props.news_card_video) {
         detail = this.props.news_card_video
      }
      console.log(detail)

      function getImgClassName(dimensions) {
         if (dimensions.height > dimensions.width) {
            return 'vertical'
         } else {
            return 'horizontal'
         }
      }
      return (
         <div className={style.container} onClick={() => this.props.closeModal()}>
             {this.props.photos ?
               <div className={style.img_container}>
                  <img src={detail.img.url}
                     className={`${getImgClassName(detail.img.dimensions)}_img`}
                  />
                  {RichText.render(detail.photo_caption)}
                  <style jsx>{`
                     .vertical_img {
                        height: 80%;
                        margin-top: 5%;
                     }
                     .horizontal_img {
                        height: 60%;
                        margin-top: 10%;
                     }
                  
                  `}</style>
               </div> :
               (this.props.videos || this.props.news_card_video) ?
                  <div className={style.video_container}>
                     <ReactPlayer
                        className='react-player'
                        url={detail.video_link[0].text}
                        controls
                     />
                  </div> : ''
               
         } 
         </div>
      )
   }
}

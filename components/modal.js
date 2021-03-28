import React, { Component } from 'react'
import style from './modal.module.css'
import { RichText } from "prismic-reactjs"



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
      const photo_detail = this.props.photos[this.props.index].data
      console.log(photo_detail.photo_caption.text)

      function getImgClassName(dimensions) {
         if (dimensions.height > dimensions.width) {
            return 'vertical'
         } else {
            return 'horizontal'
         }
      }
      return (
         <div className={style.container} onClick={() => this.props.handleCloseModal()}>
             {this.props.photos ?
               <div className={style.img_container}>
                  <img src={photo_detail.img.url}
                     className={`${getImgClassName(photo_detail.img.dimensions)}_img`}
                  />
                  {RichText.render(photo_detail.photo_caption)}
                  <style jsx>{`
                     .vertical_img {
                        height: 80%;
                        margin-top: 10%;
                     }
                     .horizontal_img {
                        height: 60%;
                        margin-top: 20%;
                     }
                  
                  `}</style>
               </div> : ''
         } 
         </div>
      )
   }
}

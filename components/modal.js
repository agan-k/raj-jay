import React, { Component } from 'react'
import style from './modal.module.css'

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
      const photo_detail = this.props.photos[this.props.index].data.img
      function getImgOrientation(height, width) {
         if (height > width) {
            return 'vertical_img'
         } else {
            return 'horizontal_img'
         }
      }
      return (
         <div className={style.container} onClick={() => this.props.handleCloseModal()}>
             {this.props.photos ?
               <div className={style.img_container}>
                  {/* className does not work. Need different solution to bring over the image orientation from photos/index.js */}
                  <img src={photo_detail.url}
                     className={style[`${() => getImgOrientation(photo_detail.dimensions.hight, photo_detail.dimensions.width)}`]}
                  />
               </div> : ''
         } 
         </div>
      )
   }
}

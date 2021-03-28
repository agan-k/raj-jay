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
                  <img src={photo_detail.url}
                     className={`${getImgClassName(photo_detail.dimensions)}_img`}
                  />
               </div> : ''
         } 
         </div>
      )
   }
}

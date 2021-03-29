import React, { Component } from 'react'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import style from './photos.module.css'
import Modal from '../../components/modal'
import MaskToggleIcon from '../../components/MaskToggleIcon'

export default class Photos extends Component {
   constructor(props) {
      console.log(props)
      super()
      this.state = {
         showModal: false,
         maskImages: true
      }
   }

   toggleMask = () => {
      this.setState({
         maskImages: !this.state.maskImages
      })
   }

   handleShowModal = (index) => {
      let img_height = this.props.content.results[index].data.img.dimensions.height
      let img_width = this.props.content.results[index].data.img.dimensions.width

      this.setState({
         showModal: !this.state.showModal,
         index: index,
         img_dimensions: {
            height: img_height,
            width: img_width,
         }
      })
   }

   handleCloseModal = () => {
      this.setState({
         showModal: !this.state.showModal,
         index: null
      })
   }

   getImgOrientation = (height, width) => {
      if (height > width) {
         return 'vertical_img'
      } else {
         return 'horizontal_img'
      }
   }

   render() {
      const photos = this.props.content.results.filter(result => 
         result.data.content_type == 'photo'
      )

      const gallery = photos.map((photo, index) => 
         <div className={style.photo_container} key={photo.uid}>
            <div className={style[`${this.state.maskImages ? 'img_mask' : 'img_unmask'}`]}>
               <img
                  onClick={() => this.handleShowModal(index)}
                  className={style[`${this.
                     getImgOrientation(photo.data.img.dimensions.height, photo.data.img.dimensions.width)}`]}
                  src={photo.data.img.url} />
            </div>
         </div>
      )

      return (
         <div>
            <h1>photos</h1>
            <div onClick={() => this.toggleMask()}>
              <MaskToggleIcon />
            </div>
            {/* <span onClick={() => this.toggleMask()} className={style.img_mask_toggle}>unmask</span> */}
            <div className={style.gallery_container}>
               {gallery}
            </div>

            {this.state.showModal && (
               <Modal
                  getImageOrientation={this.getImgOrientation}
                  photos={photos}
                  closeModal={this.handleCloseModal}
                  index={this.state.index} />
            )}
         </div>
      )
      
   }
}

export async function getStaticProps() {
   const content = await client.query(
      Prismic.Predicates.at("document.type", "content")
   )
   return {
      props: {
         content
      }
   }
}


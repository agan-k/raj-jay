import React, { Component } from 'react'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import style from './photos.module.css'
import Modal from '../../components/modal'

export default class Photos extends Component {
   constructor(props) {
      console.log(props)
      super()
      this.state = {
         showModal: false
      }
   }
   handleShowModal = (index) => {
      this.setState({
         showModal: !this.state.showModal,
         index: index
      })
   }
   handleCloseModal = () => {
      this.setState({
         showModal: !this.state.showModal,
         index: null
      })
   }
   render() {
      const photos = this.props.content.results.filter(result => 
         result.data.content_type == 'photo'
      )

      const gallery = photos.map((photo, index) => 
         photo.data.img.dimensions.height > photo.data.img.dimensions.width ?
            <div className={style.photo_container} key={photo.uid}>
                  <img onClick={() => handleShowModal(index)} className={style.vertical_img} src={photo.data.img.url} />
            </div> :
            <div className={style.photo_container}>
                  <img onClick={() => handleClick(index)} className={style.horizontal_img} src={photo.data.img.url} /> 
            </div>
      )
      return (
         <div>
            <h1>photos</h1>
            <div className={style.gallery_container}>
               {gallery}
            </div>

            {this.state.showModal && (
               <Modal
                  handleCloseModal={this.handleCloseModal}
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


import React from 'react'
import './Gallery.css'
import { gallery } from '../../assets/gallery'
import ImageGallery from 'react-image-gallery';

const Gallery = () => {
  return (
    <div className="gallery">
      <ImageGallery items={gallery} lazyLoad={true} />
    </div>
  )
}

export default Gallery
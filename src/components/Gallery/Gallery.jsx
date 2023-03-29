import React from 'react'
import './Gallery.css'
import { gallery } from '../../assets/gallery'

const Gallery = () => {
  return (
    <div className="gallery">
      {gallery.map((item) => (
        <img className="gallery-img" src={item.img} alt="" />
      ))}
    </div>
  )
}

export default Gallery
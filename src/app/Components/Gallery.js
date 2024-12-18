"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Gallery.css';

const images = [
  { src: '/images/20230829_111311.jpg', alt: 'Photo 1' },
  { src: '/images/20230829_111351.jpg', alt: 'Photo 2' },
  { src: '/images/ACES-032-Computing-Playstation-Lab.jpg', alt: 'Photo 4' },
  { src: '/images/ACES-036-Computing-Playstation-Lab-2.jpg', alt: 'Photo 5' },
  { src: '/images/Cantor Lecture Theatre 3.jpg', alt: 'Photo 6' },
  { src: '/images/Cantor_atrium_3.jpg', alt: 'Photo 7' },
  { src: '/images/Cantor_atrium_4.jpg', alt: 'Photo 8' },
  { src: '/images/cantor-gallery.jpg', alt: 'Photo 9' },
  { src: '/images/Cantor4.jpg', alt: 'Photo 10' },
  { src: '/images/CantorLectureTheatre4.JPG', alt: 'Photo 11' },
  { src: '/images/CantorLectureTheatre5.JPG', alt: 'Photo 12' },
  { src: '/images/CantorLectureTheatre11.jpg', alt: 'Photo 13' },
  { src: '/images/DSCF5127.jpg', alt: 'Photo 14' },
  { src: '/images/IMG_0170.jpeg', alt: 'Photo 15' },
  { src: '/images/IMG_0523.jpeg', alt: 'Photo 16' },
  { src: '/images/IMG_1005.jpeg', alt: 'Photo 17' },
  { src: '/images/IMG_1087.jpeg', alt: 'Photo 18' },
  { src: '/images/IMG_1089.jpeg', alt: 'Photo 19' },
  { src: '/images/IMG_1099.jpeg', alt: 'Photo 20' },
  { src: '/images/IMG_1298.jpeg', alt: 'Photo 21' },
  { src: '/images/IMG_1318.jpeg', alt: 'Photo 22' },
  { src: '/images/IMG_1437.jpeg', alt: 'Photo 23' },
  { src: '/images/IMG_1441.jpeg', alt: 'Photo 24' },
  { src: '/images/IMG_1642.jpeg', alt: 'Photo 25' },
  { src: '/images/IMG_1808.jpeg', alt: 'Photo 26' },
  { src: '/images/IMG_1809.jpeg', alt: 'Photo 27' },
  { src: '/images/main_2529_image4.png', alt: 'Photo 28' }
];


const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="imageContainer">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={800}
          height={600}
        />
      </div>
      <div className="controls">
        <button className="arrow" onClick={prevImage}>Previous</button>
        <button className="arrow" onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;
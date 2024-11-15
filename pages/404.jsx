import { useEffect, useState } from 'react';

const ImageSlider = () => {
  const images = [
    "https://www.volunteerforever.com/wp-content/uploads/2019/08/african_village_children-min.jpg",
    "https://populationmatters.org/wp-content/uploads/2022/09/African-school-kids_bill-wegener-285004-unsplash_resize.jpg",
    "https://www.adeanet.org/sites/default/files/annie-spratt-unsplash.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

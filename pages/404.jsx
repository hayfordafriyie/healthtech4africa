import { useEffect, useState } from 'react';

const ImageSlider = () => {
  // List of image URLs
  const images = [
    "https://www.volunteerforever.com/wp-content/uploads/2019/08/african_village_children-min.jpg",
    "https://populationmatters.org/wp-content/uploads/2022/09/African-school-kids_bill-wegener-285004-unsplash_resize.jpg",
    "https://www.adeanet.org/sites/default/files/annie-spratt-unsplash.jpg",
    "https://media.licdn.com/dms/image/C4E12AQGTtpSYqa9Ytg/article-cover_image-shrink_720_1280/0/1586200960209?e=2147483647&v=beta&t=yleob4hMLCzmANSInPwb_DIwbUpaewA3MPrHpT2X1FM",
     "https://www.helpersfoundation.org/wp-content/uploads/2022/03/Education-in-Africa.jpg"
  ];

  // Corresponding text for each image
  const textContent = [
    { title: "Health", description: "Innovating data-driven solutions to improve child health outcomes." },
    { title: "Nutrition", description: "Providing actionable insights to address malnutrition and hunger." },
    { title: "Education", description: "Ensuring every child has access to quality education and learning tools." },
    { title: "Children's Rights", description: "Advocating for children's rights and ensuring they are respected globally." },
    { title: "Children's Rights", description: "Advocating for children's rights and ensuring they are respected globally." }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
      {/* Slide container */}
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

      {/* Text Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 md:p-8 bg-gradient-to-t from-black to-transparent"
      >
        <h2 className="text-2xl md:text-4xl font-bold">{textContent[currentIndex].title}</h2>
        <p className="mt-2 text-sm md:text-lg">{textContent[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default ImageSlider;

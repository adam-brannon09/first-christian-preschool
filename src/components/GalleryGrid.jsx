import React, { useState } from 'react';

const images = [
//   '/images/photo1.jpg',
//   '/images/photo2.jpg',
//   '/images/photo3.jpg',
//   '/images/photo4.jpg',
//   '/images/photo5.jpg',
//   '/images/photo6.jpg',
//   // Add more paths here
];

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Photo Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="w-full h-48 object-cover rounded shadow cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-full max-h-full object-contain rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;

// Image Gallery Component

import { useState } from 'react';

export default function ImageGallery({ images = [], alt = 'Property image' }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                No images available
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {/* Main Image */}
            <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden group">
                <img
                    src={images[selectedIndex]}
                    alt={`${alt} ${selectedIndex + 1}`}
                    className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            ←
                        </button>

                        <button
                            onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            →
                        </button>
                    </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                    {selectedIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`
                h-20 rounded-lg overflow-hidden border-2 transition-all
                ${selectedIndex === index
                                    ? 'border-indigo-600 ring-2 ring-indigo-200'
                                    : 'border-transparent hover:border-gray-300'
                                }
              `}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

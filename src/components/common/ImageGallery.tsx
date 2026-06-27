import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type GalleryImage = {
  src: string;
  title?: string;
};

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

export default function ImageGallery({
  images,
  columns = 3,
}: ImageGalleryProps) {
  const [index, setIndex] = useState(-1);

  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[columns];

  return (
    <>
      <div className={`grid grid-cols-1 ${gridClass} gap-5`}>
        {images.map((image, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="group cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              src={image.src}
              alt={image.title}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            {image.title && (
              <div className="bg-[#2d1b5e] p-4">
                <p className="font-semibold text-white">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
        plugins={[Zoom, Thumbnails]}
      />
    </>
  );
}

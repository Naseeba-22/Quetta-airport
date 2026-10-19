import { useState } from "react";
import { X } from "lucide-react";
import { galleryImages } from "../data/mockData";

function Gallery() {

  const [selected, setSelected] = useState(null);

  return (
    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            VISUAL TOUR
          </span>

          <h1>Airport Gallery</h1>

          <p>
            Explore our airport through images.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <div className="gallery-grid">

            {galleryImages.map((image, index) => (

              <button
                className={`gallery-item gallery-${index}`}
                key={index}
                onClick={() => setSelected(image)}
              >

                <img
                  src={image.url}
                  alt={image.title}
                />

                <div className="gallery-caption">
                  {image.title}
                </div>

              </button>

            ))}

          </div>

        </div>

      </section>

      {selected && (

        <div
          className="lightbox"
          onClick={() => setSelected(null)}
        >

          <button className="lightbox-close">
            <X />
          </button>

          <img
            src={selected.url}
            alt={selected.title}
            onClick={(e) => e.stopPropagation()}
          />

        </div>

      )}

    </div>
  );
}

export default Gallery;
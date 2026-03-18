import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './styles/GallerySection.css';

const GallerySection = ({ title, images = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  if (images.length === 0) {
    return (
      <div className="cha-gallery-section cha-gallery-section--empty">
        <h2 className="cha-gallery-section__title">{title}</h2>
        <p className="cha-gallery-section__empty-text">No images yet. Check back soon!</p>
      </div>
    );
  }

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const start = (currentPage - 1) * imagesPerPage;
  const current = images.slice(start, start + imagesPerPage);

  return (
    <div className="cha-gallery-section">
      <div className="cha-gallery-section__header">
        <h2 className="cha-gallery-section__title">{title}</h2>
        <div className="cha-gallery-section__count">{images.length} Photos</div>
      </div>

      <div className="cha-gallery-section__grid">
        {current.map((img, idx) => (
          <div key={idx} className="cha-gallery-section__item">
            <div className="cha-gallery-section__img-wrap">
              <img src={img.url} alt={img.title || title} className="cha-gallery-section__img" loading="lazy" />
              <div className="cha-gallery-section__overlay" />
            </div>
            {img.title && <p className="cha-gallery-section__caption">{img.title}</p>}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="cha-gallery-section__pagination">
          <button
            className="cha-gallery-section__page-btn"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={18} /> Prev
          </button>

          <div className="cha-gallery-section__page-nums">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`cha-gallery-section__page-num${currentPage === i + 1 ? ' cha-gallery-section__page-num--active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            className="cha-gallery-section__page-btn"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GallerySection;

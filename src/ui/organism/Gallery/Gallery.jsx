import { useTranslations } from "next-intl";

import "./Gallery.styled.css";
import { ImagePortfolio } from "../../atoms";

const Gallery = ({ ui = false }) => {
  const t = useTranslations("Gallery");

  const TITLE_COLORS = ["#60a5fa", "#10b981"];

  const BASE_PATH_ADMIN = "/content/admin-app/";

  const BASE_PATH_UI = "/content/ui-app/";

  const GALLERY_ADMIN = [
    { id: 1, file: "criseladmin.webp" },
    { id: 2, file: "admin-1.png" },
    { id: 3, file: "admin-2.png" },
    { id: 4, file: "admin-3.png" },
    { id: 5, file: "admin-4.png" },
    { id: 6, file: "admin-4.png" },
    { id: 7, file: "admin-5.png" },
    { id: 8, file: "admin-6.png" },
    { id: 9, file: "admin-7.png" },
  ];

  const GALLERY_UI = [
    { id: 1, file: "criselui.webp" },
    { id: 2, file: "ui-1.png" },
    { id: 3, file: "ui-2.png" },
    { id: 4, file: "ui-3.png" },
    { id: 5, file: "ui-4.png" },
    { id: 6, file: "ui-5.png" },
    { id: 7, file: "ui-6.png" },
    { id: 8, file: "ui-7.png" },
    { id: 9, file: "ui-8.png" },
    { id: 10, file: "ui-9.png" },
    { id: 11, file: "ui-10.png" },
    { id: 12, file: "ui-11.png" },
    { id: 13, file: "ui-12.png" },
    { id: 14, file: "ui-13.png" },
    { id: 15, file: "ui-14.png" },
  ];

  const dataGallery = ui ? GALLERY_UI : GALLERY_ADMIN;

  const pathGallery = ui ? BASE_PATH_UI : BASE_PATH_ADMIN;

  const formattedGallery = dataGallery?.map((item) => ({
    id: item.id,
    src: pathGallery + item.file,
  }));

  return (
    <div className="container-main-gallery">
      <div className="container-title-gallery">
        {TITLE_COLORS.map((color, index) => {
          const id = index + 1;
          return (
            <h1 key={id} className="title-gallery" style={{ color }}>
              {t(`title-${id}`)}
            </h1>
          );
        })}
      </div>

      <section className="container-images">
        {formattedGallery.map(({ id, src }) => (
          <ImagePortfolio variant="Gallery" key={id} src={src} />
        ))}
      </section>
    </div>
  );
};

export default Gallery;

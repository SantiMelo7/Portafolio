import { Gallery } from '@/components/organisms/Gallery/Gallery';
import { Header } from '@/components/organisms/Header/Header';
import { CRISEL_UI_PAGE_GALLERY } from './utils/criselUI.utils';

export const CriselUIPage = () => {
  return (
    <>
      <Header />

      <Gallery formattedGallery={CRISEL_UI_PAGE_GALLERY} />
    </>
  );
};

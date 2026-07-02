import { Header } from '@/components/organisms/Header/Header';
import { Gallery } from '@/components/organisms/Gallery/Gallery';
import { CRISEL_ADMIN_PAGE_GALLERY } from './utils/criselAdmin.utils';

export const CriselAdminPage = () => {
  return (
    <>
      <Header />

      <Gallery formattedGallery={CRISEL_ADMIN_PAGE_GALLERY} />
    </>
  );
};

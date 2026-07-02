import type { ReactNode } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from './paths';
import { CriselAdminPage } from '@/components/pages/CriselAdminPage/CriselAdminPage';
import { CriselUIPage } from '@/components/pages/CriselUIPage/CriselUIPage';
import { DesingProjectsPage } from '@/components/pages/DesingProjectsPage/DesingProjectsPage';

type AppRoutesProps = {
  home: ReactNode;
};

export const AppRoutes = ({ home }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<>{home}</>} />
      <Route path={PATHS.criselAdmin} element={<CriselAdminPage />} />
      <Route path={PATHS.criselUI} element={<CriselUIPage />} />
      <Route path={PATHS.desingProjects} element={<DesingProjectsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

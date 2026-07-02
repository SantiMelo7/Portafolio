import { Header } from '@/components/organisms/Header/Header';
import { Projects } from '@/components/organisms/Projects/Projects';
import { dataDesing } from './utils/desingProjects.utils';

export const DesingProjectsPage = () => {
  return (
    <>
      <Header />

      <Projects dataProjects={dataDesing} translateKey="projectDesing" />
    </>
  );
};

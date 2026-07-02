import { GitHub } from '@mui/icons-material';
import { Link1Icon } from '@radix-ui/react-icons';

import type { ButtonsProjectsProps, Project } from '../Projects.types';

export const buttonsProjects = (project: Project): ButtonsProjectsProps[] => [
  {
    icon: <GitHub />,
    keyText: 'buttonCode',
    href: project?.visitGit,
    disabled: project?.notCode,
  },
  {
    icon: <Link1Icon />,
    keyText: 'buttonPreview',
    href: project?.visitPrev,
  },
];

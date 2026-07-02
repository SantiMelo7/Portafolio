import type { ReactNode } from 'react';
import { translations } from '@/i18n/translations';

type ProjectTranslationKeys =
  | keyof (typeof translations)['en']['projects']
  | keyof (typeof translations)['en']['projectDesing'];

export interface Project {
  id?: number;
  disabled?: boolean;
  refWork?: boolean;
  notCode?: boolean;
  title?: string;
  img?: string;
  tools?: string[];
  visitGit?: string;
  visitPrev?: string;
  descriptionKey?: ProjectTranslationKeys;
}

export interface ProjectsProps {
  dataProjects?: Project[];
  translateKey?: string;
}

export interface ButtonsProjectsProps {
  icon: ReactNode;
  keyText: string;
  href?: string;
  disabled?: boolean;
}

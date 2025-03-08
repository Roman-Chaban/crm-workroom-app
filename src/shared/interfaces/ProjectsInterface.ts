export interface ProjectsOption {
  label: string;
  value: string;
}

export interface ProjectsNavListItem {
  id: number;
  title: string;
  code: string;
}

export type ProjectsOptions = ProjectsOption[];
export type ProjectsNavList = ProjectsNavListItem[];

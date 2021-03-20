import { ReactNode } from 'react';

export interface Category {
  name: string;
  subLabel: string;
  children: Record<string, SubCategory>;
}

export interface SubCategory {
  name: string;
  id: string;
  children: Template[];
}

export interface Template {
  name: string;
  component: ReactNode;
}

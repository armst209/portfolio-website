import type { StaticImageData } from 'next/image';
import type { LucideIcon } from 'lucide-react';

export interface SectionTile {
  id: number;
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  message: string;
}

export interface KnowYourCollectionTile extends SectionTile {
  href: { link: string; text: string } | null;
}

export type Release = {
  id: string;
  title: string;
  /** Artist name */
  name: string;
  art: StaticImageData;
  type: 'Single' | 'EP' | 'Album';
};

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

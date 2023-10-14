import type { StaticImageData } from 'next/image';

export interface IProjects {
  id: number;
  title: string;
  img: StaticImageData;
  deployUrl: string;
}
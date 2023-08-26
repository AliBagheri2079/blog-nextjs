import { randomId } from '@/utils/helpers';

import Building from '@/assets/images/building.avif';
import Girl from '@/assets/images/girl.avif';
import Book from '@/assets/images/book.avif';
import House from '@/assets/images/house.avif';
import Window from '@/assets/images/window.avif';

export const imageItems = [
  {
    id: randomId(),
    image: Building,
    title: 'old house',
  },
  {
    id: randomId(),
    image: Book,
    title: 'book and chair',
  },
  {
    id: randomId(),
    image: Girl,
    title: 'lady and songs',
  },
  {
    id: randomId(),
    image: House,
    title: 'house and mountain',
  },
  {
    id: randomId(),
    image: Window,
    title: 'window inside a room',
  },
];

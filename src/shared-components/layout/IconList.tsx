import Image, { type StaticImageData } from 'next/image';
import type { ReactNode } from 'react';
import vinylIcon from '@public/assets/vinyl_yellow.svg';

export type IconListItem = {
  id: string;
  content: ReactNode;
  icon?: StaticImageData;
};

/** Bulleted copy with BnG's yellow line icons (vinyl by default) as markers. */
const IconList = ({
  items,
  iconSize = 28,
}: {
  items: IconListItem[];
  iconSize?: number;
}) => (
  <ul className="flex flex-col gap-5">
    {items.map(({ id, content, icon = vinylIcon }) => (
      <li
        key={id}
        className="flex gap-4">
        <Image
          src={icon}
          alt=""
          width={iconSize}
          height={iconSize}
          style={{ width: iconSize, height: iconSize }}
          className="mt-0.5 shrink-0"
        />
        <div className="leading-relaxed text-subdued">{content}</div>
      </li>
    ))}
  </ul>
);

export default IconList;

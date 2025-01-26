import React from 'react';
import Navbarlinks from './navbarlinks';

interface LinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  link: LinkItem[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ link }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {link.map((linkItem, index) => {
        return (
          <li key={index}>
            <Navbarlinks href={linkItem.path} title={linkItem.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
import React from 'react';
import Navbarlinks from './navbarlinks';

const MenuOverlay = ({ link }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {link.map((link, index) => {
        return (
          <li key={index}>
            <Navbarlinks href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
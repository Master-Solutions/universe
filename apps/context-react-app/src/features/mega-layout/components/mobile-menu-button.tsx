import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

type MobileMenuButtonProps = {
  open: boolean
}

const MobileMenuButton = ({open}: MobileMenuButtonProps) => {
  return (
    <div className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </div>
  )
}

export {MobileMenuButton};

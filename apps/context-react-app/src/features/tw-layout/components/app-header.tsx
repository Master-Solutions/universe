import React from 'react';
import { MdUpOnly } from '../../mega-layout/components/md-up-only';
import { MobileMenuButton } from '../../mega-layout/components/mobile-menu-button';
import { Disclosure } from '@headlessui/react';


type AppHeaderProps = {
  brand?: React.ReactNode,
  left?: React.ReactNode,
  right?: React.ReactNode,
  mobileMenu?: React.ReactNode,
  mobileMenuButtonElement?: React.ElementType
}

const AppHeader = ({
                     brand,
                     left,
                     right,
                     mobileMenu,
                     mobileMenuButtonElement = MobileMenuButton
}: React.PropsWithChildren<AppHeaderProps>) => {
  const MobileMenuButtonElement = mobileMenuButtonElement;
  return (
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">

                <div className="flex items-center">
                  {brand}
                  {left}
                </div>

                <MdUpOnly>
                  <div className="ml-4 flex items-center md:ml-6">
                    {right}
                  </div>
                </MdUpOnly>

                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button>
                    <MobileMenuButtonElement open={open} />
                  </Disclosure.Button>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              {mobileMenu}
            </Disclosure.Panel>
          </>
          )}
      </Disclosure>
  )
}

export {AppHeader};

import React, { PropsWithChildren } from 'react';

type AppSubHeaderProps = {
}

const AppSubHeader = ({children}: PropsWithChildren<AppSubHeaderProps>) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
        {children}
      </div>
    </header>
  )
}

export {AppSubHeader};

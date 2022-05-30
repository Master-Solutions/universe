import React from 'react';

type MainContainerProps = {

}

const MainContainer = ({children}: React.PropsWithChildren<MainContainerProps>) => {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  )
}

export {MainContainer};

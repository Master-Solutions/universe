import React from 'react';

type AppLayoutContainerProps = {

}

const AppLayoutContainer = ({children}: React.PropsWithChildren<AppLayoutContainerProps>) => {
  return (
    <div className="lg:w-2/3 mx-auto">
      {children}
    </div>
  )
}

export {AppLayoutContainer};

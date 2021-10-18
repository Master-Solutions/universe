import React from 'react';

type MainLayoutProps = {

}

const MainLayout = ({children}: React.PropsWithChildren<MainLayoutProps>) => {
  return (
    <div style={{width: 600, height: 400, border: "solid 1px blue", margin: 'auto', textAlign: 'center'}}>
      {children}
    </div>
  )
}

export {MainLayout};

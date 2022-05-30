import React from 'react';

type MdUpOnlyProps = {

}

const MdUpOnly = ({children}: React.PropsWithChildren<MdUpOnlyProps>) => {
  return (
    <div className="hidden md:block">
      {children}
    </div>
  )
}

export {MdUpOnly};

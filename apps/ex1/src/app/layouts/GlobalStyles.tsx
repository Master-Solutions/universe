import { css, Global } from '@emotion/core';
import React from 'react';

export const GlobalStyles = () => {
  return <Global
    styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
          body {
            margin: 0;
            padding: 0;
            h1,h2,h3,h4,h5,h6,p { margin: 0 };
            font-family: Poppins, sans-serif;
          }
        `}
  />;
};

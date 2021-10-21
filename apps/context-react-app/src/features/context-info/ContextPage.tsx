import React from 'react';
import { useAppCtx } from '@unvrse/ctx-react-aspect';

export const ContextPage = () => {
  const app = useAppCtx();

  return (
    <pre>
      {JSON.stringify(app, null, 2)}
    </pre>
  )

};

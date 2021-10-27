import React from 'react';
import { useAppCtx } from '@unvrse/ctx-react-aspect';

export const ContextPage = () => {
  const app = useAppCtx();

  const types = Array.from(app.store.types.keys());
  console.log("Types:", types);

  return (
    <div style={{textAlign: 'left'}}>
      Types:<br/>
      <ul>
        {types.map(t => <li key={t}>{t}</li>)}
      </ul>
    </div>
  )

};

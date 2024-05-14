'use client';

import React from 'react';
import { CodeEditor } from './CodeEditor';
import { CodeBlock, transpileCode } from '..';

export function InputField() {
  const [code, setCode] = React.useState('');
  return (
    <>
      <CodeEditor language='typescript' onChange={(v) => setCode(v ?? '')}/>
      <div style={{ marginTop: '2rem' }} />
      <CodeBlock language='javascript' code={transpileCode(code)} />
    </>
  );
}
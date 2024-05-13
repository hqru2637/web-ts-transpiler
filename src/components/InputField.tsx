'use client';

import React from 'react';
import { CodeEditor } from './CodeEditor';
import { Code } from '@chakra-ui/react';

export function InputField() {
  const [code, setCode] = React.useState('');
  return (
    <>
      <CodeEditor language='typescript' onChange={(v) => setCode(v ?? '')}/>
      <Code>{code}</Code>
    </>
  )
}
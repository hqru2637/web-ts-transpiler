'use client';

import React from 'react';
import { CodeEditor } from './CodeEditor';
import { Textarea } from '@chakra-ui/react';
import { transpileCode } from '..';

export function InputField() {
  const [code, setCode] = React.useState('');
  return (
    <>
      <CodeEditor language='typescript' onChange={(v) => setCode(v ?? '')}/>
      <Textarea value={transpileCode(code)} maxHeight='15em' readOnly/>
    </>
  )

}
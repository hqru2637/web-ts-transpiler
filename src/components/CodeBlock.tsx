import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
  language: 'javascript' | 'typescript';
  code: string;
}

export function CodeBlock(props: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      style={theme}
      showLineNumbers
      lineNumberStyle={{ color: 'gray' }}
      customStyle={{ fontSize: '0.85em' }}
    >
      {props.code}
    </SyntaxHighlighter>
  );
}

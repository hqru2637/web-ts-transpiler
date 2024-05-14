import { CodeiumEditor, CodeiumEditorProps } from '@codeium/react-code-editor';

interface CodeEditorProps {
  language: 'javascript' | 'typescript';
  onChange?: CodeiumEditorProps['onChange'];
  style?: CodeiumEditorProps['containerStyle'];
}

export function CodeEditor(props: CodeEditorProps) {
  return (
    <CodeiumEditor
      language={props.language}
      theme='vs-dark'
      defaultValue=''
      containerStyle={props.style}
      onChange={props.onChange}
    />
  )
}
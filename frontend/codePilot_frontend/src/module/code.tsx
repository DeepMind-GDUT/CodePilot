// components/CodeEditor.tsx
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import axios from 'axios';

export default function CodeEditor() {
  const editorRef = useRef<any>(null);
  const { setContainer } = useCodeMirror({
    container: editorRef.current!,
    extensions: [javascript()],
    initialDoc: `function hello() {\n  console.log("Hello, CodePilot!");\n}`,
  });
}

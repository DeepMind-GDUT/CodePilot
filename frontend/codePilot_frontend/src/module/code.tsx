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

  const handleSubmit = async () => {
    const code = editorRef.current?.view.state.doc.toString();
    const resp = await axios.post('/api/code-review/submit', { code });
    // 这里假设后台立即返回 AI 反馈任务 ID
    alert(`提交成功，任务 ID：${resp.data.taskId}`);
  };

  return (
    <div>
      <div ref={el => { editorRef.current = el; setContainer(el!); }} className="border rounded h-64" />
      <Button className="mt-4" onClick={handleSubmit}>
        提交评阅
      </Button>
    </div>
  );
}

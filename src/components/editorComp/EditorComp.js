import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useState, useEffect } from 'react';

function EditorComp({code, setCode, height}) {

  const [h, setH] = useState(height !== undefined ? height : '80vh')

  return (
    <div className="editor-comp">
      <Editor height={h} defaultLanguage="python" defaultValue={code} value={code} theme="vs-dark" wordWrap={"off"} onChange={setCode} />
    </div>
  );
}

export default EditorComp;

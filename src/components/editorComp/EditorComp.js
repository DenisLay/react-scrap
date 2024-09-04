import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useState } from 'react';

function EditorComp(props) {

  const [code, setCode] = useState(props.code)

  return (
    <div className="editor-comp">
      <Editor height="80vh" defaultLanguage="html" defaultValue={props.code} />
    </div>
  );
}

export default EditorComp;

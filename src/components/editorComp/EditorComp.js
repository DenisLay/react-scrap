import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useState, useEffect } from 'react';

function EditorComp({code}) {

  useEffect(() => {
    console.log('EditorComp code:', code);
  }, [code]);

  return (
    <div className="editor-comp">
      <Editor height="80vh" defaultLanguage="html" defaultValue={code} value={code} />
    </div>
  );
}

export default EditorComp;

import { useState, useEffect } from 'react';
import EditorComp from '../editorComp/EditorComp';

function EditorWrap({code}) {  

  useEffect(() => {
    console.log('EditorWrap code:', code);
  }, [code]);

  return (
    <div className="editor-wrap">
      <EditorComp code={code}/>
    </div>
  );
}

export default EditorWrap;

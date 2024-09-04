import { useState } from 'react';
import EditorComp from '../editorComp/EditorComp';

function EditorWrap(props) {  

  const [code, setCode] = useState(props.code)

  return (
    <div className="editor-wrap">
      <EditorComp code={code}/>
    </div>
  );
}

export default EditorWrap;

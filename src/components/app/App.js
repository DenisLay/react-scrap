import './App.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import EditorWrap from '../editorWrap/EditorWrap';

function App() {

  const [code, setCode] = useState('<!-- some comment -->')

  function updateCode() {
    setCode(prevCode => prevCode + prevCode)
    console.log(code)
  }

  return (
    <div className="App">
      <Container>
        <header className="App-header">
        </header>
        <div className='app-body'>
          <Button variant='contained' onClick={() => updateCode()}>Add code</Button>
          <div className='break-1'></div>
          <EditorWrap code={code}/>
        </div>
      </Container>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import EditorWrap from '../editorWrap/EditorWrap';

function App() {

  async function getCode() {
    const res = await fetch('https://flasktest-lchz.onrender.com/', {
                              method: 'GET',
                              mode: 'cors',
                              headers: {
                                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
                                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                                'accept-encoding': 'gzip, deflate, br, zstd'
                              }
                        })
                        .then(response => {
                          console.log(response);
                          return response;
                        }) 
                        .catch(error => {
                          return error;
                        });

    return res;
  }

  const [code, setCode] = useState('<!-- some comment -->')
  //const [code, setCode] = useState(await getCode())

  function updateCode() {
    setCode(code + code)
    console.log(getCode())
  }

  return (
    <div className="App">
      <Container>
        <header className="App-header">
        </header>
        <div className='app-body'>
          <Button variant='contained' onClick={updateCode}>Add code</Button>
          <div className='break-1'></div>
          <EditorWrap code={code}/>
        </div>
      </Container>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import { Button, TextField, Stack, Tab, Tabs, Card, Typography, Box, Divider } from '@mui/material';
import EditorWrap from '../editorWrap/EditorWrap';
import Header from '../header/Header';
import { BrowserRouter } from 'react-router-dom';
import TabPanel from '../tabPanel/TabPanel';

function App() {

  const [code, setCode] = useState('<!-- some comment -->')
  const [url, setUrl] = useState('')
  const [tabIndex, setTabIndex] = useState(0)
  const [cardItems, setCardItems] = useState([
    {
      code: '<!-- some comment -->'
    },
    {
      code: '<!-- some comment -->'
    },
    {
      code: '<!-- some comment -->'
    },
    {
      code: '<!-- some comment -->'
    },
    {
      code: '<!-- some comment -->'
    },
    {
      code: '<!-- some comment -->'
    },
  ])
  
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  async function getPage() {
    const res = await fetch('https://www.google.com')
                .then(response => { console.log(response) })
                .catch(error => console.log(error));
  }

  function updateCode() {
    setCode(prevCode => prevCode + prevCode)
    console.log(code)
  }

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Container>
            <div className='app-body'>
              <Stack spacing={2}>
                <Button variant='contained' onClick={() => getPage()}>Get page</Button>

                <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                  <TextField id="outlined-basic" label="XPath" variant="outlined" />
                  <TextField id="outlined-basic" label="Regex" variant="outlined" />
                  <Button variant='contained'>Parse</Button>
                </Stack>

                <Tabs
                  value={tabIndex}
                  onChange={handleChange}>

                  <Tab label="Editor" id={0} />
                  <Tab label="Cards" id={1} />

                </Tabs>

                <TabPanel value={tabIndex} index={0}>
                  <EditorWrap code={code}/>
                </TabPanel>

                <TabPanel value={tabIndex} index={1}>
                  <Stack spacing={4}>
                    {
                      cardItems.map(card => (
                        <Card variant="outlined" sx={{ maxWidth: 360 }}>
                          <Box sx={{ p: 2 }}>
                            <Typography gutterBottom variant="body2">
                              {card.code}
                            </Typography>
                          </Box>
                          <Divider />
                          <Stack
                              direction="row"
                              sx={{ justifyContent: 'end', alignItems: 'center' }}
                            >
                              <Button>Actions</Button>
                          </Stack>
                        </Card>
                      ))
                    }
                  </Stack>
                </TabPanel>

              </Stack>
            </div>
          </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;

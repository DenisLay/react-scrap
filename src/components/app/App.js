import './App.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import { Button, TextField, Stack, Tab, Tabs, Card, Typography, Box, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import EditorWrap from '../editorWrap/EditorWrap';
import Header from '../header/Header';
import { BrowserRouter } from 'react-router-dom';
import TabPanel from '../tabPanel/TabPanel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {

  const steps = [
    'Download page',
    'Set block divide method',
    'Result',
  ];

  const [code, setCode] = useState('<!-- some comment -->');
  const [previewCode, setPreviewCode] = useState('<!-- some comment -->');
  const [xpath, setXpath] = useState('');
  const [url, setUrl] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
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
  ]);
  const [step, setStep] = useState(0)
  
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  async function getPage() {
    const res = await fetch(url)
                .then(response => console.log(response))
                .catch(error => console.log(error));
  }

  async function postQuery() {
    const res = await fetch(url, 
                { 
                  method: 'POST', 
                  body: JSON.stringify({ link: targetUrl }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                .then(function(response) {
                  return response.text();
                }).then(function(data) {
                  setCode(data);
                  setPreviewCode(data);
                })
                .catch(error => console.error(error));
  }

  function getItemsByXPath(src) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(src, 'text/html');

    const result = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);

    let node;
    const nodes = [];
    while ((node = result.iterateNext())) {
        nodes.push(node);
    }

    const items = [];
    
    nodes.forEach(node => items.push({ code: node.outerHTML }));

    setCardItems(items);
  }

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Container>
            <div className='app-body' style={{'padding-top': '20px'}}>
              <Stack spacing={2}>
                <Button variant='contained' onClick={() => { postQuery() }}>Get page</Button>

                <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                  <TextField id="outlined-basic" label="XPath" variant="outlined" value={xpath} onChange={(event) => { setXpath(event.target.value) }}  />
                  <TextField id="outlined-basic" label="Regex" variant="outlined" />
                  <TextField id="outlined-basic" label="Target Url" variant="outlined" value={targetUrl} onChange={(event) => { setTargetUrl(event.target.value) }} />
                  <TextField id="outlined-basic" label="Url" variant="outlined" value={url} onChange={(event) => { setUrl(event.target.value) }} />
                  <Button variant='contained' onClick={() => { getItemsByXPath(code) }}>Parse</Button>
                </Stack>

                <Tabs
                  value={tabIndex}
                  onChange={handleChange}>

                  <Tab label="Editor" id={0} />
                  <Tab label="Preview" id={1} />
                  <Tab label="Cards" id={2} />

                </Tabs>

                <TabPanel value={tabIndex} index={0}>
                  <EditorWrap code={code} style={{'display': 'none'}}/>
                </TabPanel>

                <TabPanel value={tabIndex} index={1}>
                  <div dangerouslySetInnerHTML={{ __html: previewCode }} />
                </TabPanel>

                <TabPanel value={tabIndex} index={2}>
                  <Stack spacing={4}>
                    {
                      cardItems.map(card => (
                        <Card variant="outlined" sx={{ maxWidth: 360 }}>
                          <Box sx={{ p: 2 }}>
                            <Typography gutterBottom variant="body2">
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                >
                                  XPath result
                                </AccordionSummary>
                                <AccordionDetails>
                                  {card.code}
                                </AccordionDetails>
                              </Accordion>
                            </Typography>
                            <Divider/>
                            <div dangerouslySetInnerHTML={{ __html: card.code }} />
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

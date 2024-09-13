import {Button, Stack, TextField, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import EditorWrap from "../../components/editorWrap/EditorWrap";
import EditorComp from "../../components/editorComp/EditorComp";

const ScraperConfigView = (props) => {
    const scrapers = useSelector((state) => state.scrapers.scrapers);
    const [code, setCode] = useState('undef');
    const [result, setResult] = useState('');
    const [currentScraper, setCurrentScraper] = useState({});
    const [url, setUrl] = useState('');

    const parse = async () => {
        console.log(code)
        console.log(typeof code)
        const res = await fetch(url,
                {
                  method: 'POST',
                  body: JSON.stringify({ src: code }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                .then(function(response) {
                  return response.text();
                }).then(function(data) {
                  console.log(data);
                  setResult(data);
                })
                .catch(error => console.error(error));
    }

    useEffect(() => {
        scrapers.map(item => {
            if (item.payload.id == props.currentScraperId) {
                setCurrentScraper(item.payload);
            }
        })
    }, []);

    return (
        <>
            <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                <Typography>Name: {currentScraper.name}</Typography>
                <Button variant='outlined' onClick={props.back}>Back</Button>
            </div>
            <Typography>Description: {currentScraper.description}</Typography>

            <EditorComp code={code} setCode={setCode} height={'60vh'}/>

            <TextField
                id="outlined-basic"
                label="Server"
                variant="outlined"
                value={url}
                onChange={(event) => { setUrl(event.target.value) }}
                style={{'width' : '80%'}}
            />

            <Button
                onClick={parse}
                style={{'width' : '20%', 'marginTop': '15px'}}
            >
                Parse
            </Button>

            <EditorComp code={result} setCode={setResult} height={'20vh'}/>
        </>
    )
}

export default ScraperConfigView;
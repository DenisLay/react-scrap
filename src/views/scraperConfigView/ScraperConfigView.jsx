import {Button, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const ScraperConfigView = (props) => {
    const scrapers = useSelector((state) => state.scrapers.scrapers);
    const [currentScraper, setCurrentScraper] = useState({});

    useEffect(() => {
        scrapers.map(item => {
            if (item.payload.id == props.currentScraperId) {
                setCurrentScraper(item.payload);
            }
        })
    }, []);

    return (
        <>
            <Typography>ScraperConfigView</Typography>
            <Typography>{currentScraper.name}</Typography>
            <Button variant='outlined' onClick={props.back}>Back</Button>
        </>
    )
}

export default ScraperConfigView;
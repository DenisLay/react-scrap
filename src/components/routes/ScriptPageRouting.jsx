import {Route, Routes} from "react-router-dom";
import ScrapersView from "../../views/scrapersView/ScrapersView";

const ScriptPageRouting = () => {
    return (
        <Routes>
            <Route index path='scrapers' element={<ScrapersView/>}/>
        </Routes>
    )
}

export default ScriptPageRouting;
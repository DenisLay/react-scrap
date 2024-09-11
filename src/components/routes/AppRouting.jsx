import { BrowserRouter, Routes, Route } from "react-router-dom"
import LabPage from "../../pages/labPage/LabPage"
import ScriptPage from "../../pages/scriptPage/ScriptPage"
import Header from "../header/Header"
import { Container } from "@mui/material"

const AppRouting = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Container>
                <Routes>
                    <Route index={true} path='/' element={<LabPage/>} />
                    <Route path='/script' element={<ScriptPage/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default AppRouting;
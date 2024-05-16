import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import History from "./pages/History/History";
import Medi_Detail from "./pages/Medi_Detail/Medi_Detail";
import Drug_Search from "./pages/Drug_Search/Drug_Search";
import Drug_Detail from "./pages/Drug_Detail/Drug_Detail";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/medi_history" element={<History />} />
                <Route path="/medi_detail" element={<Medi_Detail />} />
                <Route path="/drug_search" element={<Drug_Search />} />
                <Route path="/drug_detail" element={<Drug_Detail />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import History from "./pages/History/History";
import MediDetail from "./pages/Medi_Detail/Medi_Detail";
import DrugSearch from "./pages/Drug_Search/Drug_Search";
import DrugDetail from "./pages/Drug_Detail/Drug_Detail";
import ServerConnect from "./ServerConnect";

function App() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="" element={<Login />} />
                <Route path="/medi_history" element={<History />} />
                <Route path="/medi_detail" element={<MediDetail />} />
                <Route path="/drug_search" element={<DrugSearch />} />
                <Route path="/drug_detail" element={<DrugDetail />} />
                <Route path="/serverconnect" element={<ServerConnect />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;
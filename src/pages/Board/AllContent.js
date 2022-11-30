import Keywordbar from "../../components/Board/Keywordbar";
import BoardTable from "../../components/Board/BoardTable";
import KeywordBoardTable from "../../components/Board/KeywordBoardTable";
import{BrowserRouter,Route,Routes} from "react-router-dom";

export default function AllContent(){
    return(
        <>
        <Keywordbar
            keyword="전체"/>
        <BoardTable/>
        
        </>
    )
}
/*<Routes>
                <Route path=":1" element={<BoardTable/>}/>
                <Route path="" element={<KeywordBoardTable/>}/>
        </Routes>
        */
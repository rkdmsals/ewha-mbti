import "./Result.css";
import Chemistry from "./Chemistry";
import ResultOthers from "./ResultOthers";
import Logo from "../../Footer/Logo";
import { useParams } from "react-router-dom";
import resultData from "./results.json";
// import resultData from "./AllResults.json";

function Result() {
    let params = useParams();
    let pageData = resultData.results[params.id - 1];
    // console.log(params.id)
    return (
        <div className="ResultPage">
            <div className="ResultImageFrame">
                <span className="ResultTitle">나와 어울리는 이화여자대학교 건물은</span>
                <div className="ResultMiddletext">{pageData.subname}</div>
                <div className="TypeName">{pageData.name}</div>
                <img className="TypeImg" alt="auditorium_img" src="/img/auditorium.png" />
                <div className="SameMbti">전체 테스트 참여자 중 7.37%가 같은 유형입니다.</div>
            </div>
            {/*외향, 내향 등의 비율을 나타내는 부분 */}
            <div className="ResultFrame">
                <div className="ResultPercent">
                    <div className="EAndI"></div>
                    <div className="NAndS"></div>
                    <div className="TAndF"></div>
                    <div className="PAndJ"></div>
                </div>
                <div className="ResultText">
                    {pageData.text}
                </div>
                <Chemistry />
                <ResultOthers />
                <Logo />
            </div>
        </div >
    );
}

export default Result;
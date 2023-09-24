import "./Result.css";
import Chemistry from "./Chemistry";
import ResultOthers from "./ResultOthers";
import Logo from "../../Footer/Logo";
import { useParams } from "react-router-dom";
import resultData from "./results.json";

import { useNavigate } from "react-router-dom";
function Result() {
    let params = useParams();
    let pageData = resultData.results[params.id - 1];
    // console.log(params.id)
    const navigate = useNavigate();
    return (
        <div className="ResultPage">
            <div className="ResultImageFrame">

                <span className="ResultTitle">나와 어울리는 이화여자대학교 건물은</span>
                <div className="ResultMiddletext">{pageData.subname}</div>
                <div className="TypeName">{pageData.name}</div>
                <img className="TypeImg" alt="auditorium_img" src={pageData.img_path} />
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
                {console.log(pageData.text)};
                {pageData.text ? pageData.text.map((eachText, idx) =>
                    <div div className="ResultText" key={idx} >
                        <div>-</div>
                        <div className="resultEachText">{eachText}</div>
                    </div>)
                    : <div></div>}
                <Chemistry />
                <ResultOthers />
                <button className="AllTypesButton" onClick={() => navigate("/viewAllResult")}>모든 유형 보러가기</button>
                <button className="ReTestButton" onClick={() => navigate("/")}>테스트 다시하기</button>
                <Logo />
            </div>
        </div >
    );
}

export default Result;
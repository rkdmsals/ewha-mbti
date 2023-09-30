import "./Result.css";
import ResultOthers from "./ResultOthers";
import Logo from "../../Footer/Logo";
import { useParams } from "react-router-dom";
import resultData from "./results.json";
import { useLocation } from "react-router-dom";
// import html2canvas from 'html2canvas';

import { useNavigate } from "react-router-dom";
function Result() {

    const location = useLocation();
    let params = useParams();
    let pageData = resultData.results[params.id - 1];
    let type1 = location.state[0]
    let type2 = location.state[1]
    let type3 = location.state[2]
    let type4 = location.state[3]
    // console.log(params.id)
    // let captureDiv = document.querySelector('.ResultImageCapture');  
    const navigate = useNavigate();
    // function DownImg() {
    //     html2canvas(captureDiv).then(canvas => {
    //         saveImg(canvas.toDataURL('image/jpg'), 'image.jpg');
    //     });
    // }
    // function CopyImg() {
    //     html2canvas(captureDiv).then(canvas => {
    //         window.copy(canvas);
    //     });
    // }
    // const saveImg = (uri, filename) => {
    //     let link = document.createElement('a');
    //     document.body.appendChild(link);
    //     link.href = uri;
    //     link.download = filename;
    //     link.click();

    //     document.body.removeChild(link);
    // };
    return (
        <div className="ResultPage">
            <div className="ResultImageFrame">
                <span className="ResultTitle">나와 어울리는 이화여자대학교 건물은</span>
                <div className="ResultMiddletext">{pageData.subname}</div>
                <div className="TypeName">{pageData.name}</div>
                <img className="TypeImg" alt="auditorium_img" src={pageData.img_path} />
                {/* <div className="SameMbti">전체 테스트 참여자 중 7.37%가 같은 유형입니다.</div> */}

            </div>
            {/*외향, 내향 등의 비율을 나타내는 부분 */}
            <div className="ResultFrame">
                <div className="ResultPercent">
                    <img className="ResultPercentEach" src={`/img/ResultSection/type1_section` + type1 + '.png'} />
                    <img className="ResultPercentEach" src={`/img/ResultSection/type2_section` + type2 + '.png'} />
                    <img className="ResultPercentEach" src={`/img/ResultSection/type3_section` + type3 + '.png'} />
                    <img className="ResultPercentEach" src={`/img/ResultSection/type4_section` + type4 + '.png'} />
                </div>
                <div className="ResultPercentText">
                    <div className="PercentTextEach" style={{ color: "#D28A8A" }}>외향</div><div className="PercentTextEach" style={{ color: "#FBC376" }}>직관</div><div className="PercentTextEach " style={{ color: "#93CCA0" }}>감성</div><div className="PercentTextEach" style={{ color: "#96C5D7" }}>계획</div>
                </div>
                {pageData.text ? pageData.text.map((eachText, idx) =>
                    <div div className="ResultText" key={idx} >
                        <div>-</div>
                        <div className="resultEachText">{eachText}</div>
                    </div>)
                    : <div></div>}

                <div className="ChemistryPage">
                    <div className="Chemistries">
                        <div className="ChemiTitle">환상의 케미</div>
                        <img className="ChemiImg" alt="환상의 케미 이미지" src={pageData.BestImg}></img>
                        <div className="ChemiMiddle">{pageData.BestSubname}</div>
                        <div className="ChemiName">{pageData.BestChemi}</div>
                    </div>
                    <div className="Chemistries">
                        <div className="ChemiTitle">환장의 케미</div>
                        <img className="ChemiImg" alt="환장의 케미 이미지" src={pageData.img_path}></img>
                        <div className="ChemiMiddle">자유로운 영혼</div>
                        <div className="ChemiName">조형예술관</div>
                    </div>
                </div>
                <ResultOthers />
                <button className="AllTypesButton" onClick={() => navigate("/viewAllResult")}>모든 유형 보러가기</button>
                <button className="ReTestButton" onClick={() => navigate("/")}>테스트 다시하기</button>
                <Logo />
            </div>
        </div >
    );
}

export default Result;
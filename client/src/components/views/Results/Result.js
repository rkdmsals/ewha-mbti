import "./Result.css";
import ResultOthers from "./ResultOthers";
import Logo from "../../Footer/Logo";
import resultData from "./results.json";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import html2canvas from 'html2canvas';
import $ from "jquery"
function Result() {
    const location = useLocation();
    let params = useParams();
    let pageData = resultData.results[params.id - 1];
    let type1, type2, type3, type4 = 0;
    // let captureDiv = document.querySelector('.ResultImageCapture');  
    const navigate = useNavigate();
    //try catch문으로 배열이 제대로 전송되지 않은 경우 처리
    try {
        type1 = location.state[0]
        type2 = location.state[1]
        type3 = location.state[2]
        type4 = location.state[3]
        var typename1, typename2, typename3, typename4;
        var id = params.id;
        if (id % 2 == 1) {
            typename1 = "외향"
        } else {
            typename1 = "내향"
        }
        if ((id / 2) % 2 == 1) {
            typename2 = "상상"
        } else {
            typename2 = "직관"
        } if ((id / 4) % 2 == 1) {
            typename3 = "이성"
        } else {
            typename3 = "감성"
        } if ((id / 8) % 2 == 1) {
            typename4 = "즉흥"
        } else {
            typename4 = "계획"
        }
        // $(window).on('load', function () {
        //     $('#loading').hide();
        // });

        $(document).ready(function () {
            setTimeout(function () {
                window.scrollTo(0, 0);
                $('#loading').hide();
                $('.GoGuideButton').css("display", "block")
            }, 4500);
        });

        if (type1 == 3) {
            $('#Percent1').css("padding-left", "2%");
            $('#Percent1').css("padding-right", "2%");
        }
        return (
            <div className="ResultPage">
                <div id="loading">
                    <div><img src="/img/ResultPage/loading.gif"></img></div>
                    <div>당신과 잘 어울리는</div>
                    <div>이화여자대학교 건물은요...</div>
                </div>
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
                        <img className="ResultPercentEach" id="Percent1" src={`/img/ResultSection/type1_section` + type1 + '.png'} />
                        <img className="ResultPercentEach" src={`/img/ResultSection/type2_section` + type2 + '.png'} />
                        <img className="ResultPercentEach" src={`/img/ResultSection/type3_section` + type3 + '.png'} />
                        <img className="ResultPercentEach" src={`/img/ResultSection/type4_section` + type4 + '.png'} />
                    </div>
                    <div className="ResultPercentText">
                        <div className="PercentTextEach" style={{ color: "#D28A8A" }}>{typename1}</div><div className="PercentTextEach" style={{ color: "#FBC376" }}>{typename2}</div><div className="PercentTextEach " style={{ color: "#93CCA0" }}>{typename3}</div><div className="PercentTextEach" style={{ color: "#96C5D7" }}>{typename4}</div>
                    </div>
                    {pageData.text ? pageData.text.map((eachText, idx) =>
                        <div div className="ResultText" key={idx} >
                            {/* <div>-</div> */}
                            <div className="resultEachText">{eachText}</div>
                        </div>)
                        : <div></div>}

                    <div className="ChemistryPage">
                        <div className="Chemistries">
                            <div className="ChemiTitle">환상의 케미</div>
                            <img className="ChemiImg" alt="환상의 케미 이미지" src={pageData.BestImg} ></img>
                            <div className="ChemiMiddle">{pageData.BestSubname}</div>
                            <div className="ChemiName">{pageData.BestChemi}</div>
                        </div>
                        <div className="Chemistries">
                            <div className="ChemiTitle">환장의 케미</div>
                            <img className="ChemiImg" alt="환장의 케미 이미지" src={pageData.WorstImg}  ></img>
                            <div className="ChemiMiddle">{pageData.WorstSubname}</div>
                            <div className="ChemiName">{pageData.WorstChemi}</div>
                        </div>
                    </div>
                    <ResultOthers />
                    <button className="AllTypesButton" onClick={() => navigate("/viewAllResult")}>모든 유형 보러가기</button>
                    <button className="ReTestButton" onClick={() => navigate("/")}>테스트 다시하기</button>
                    <Logo />
                </div>
            </div >
        );

    } catch (error) {
        console.log("에러는 " + error)
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
                    {pageData.text ? pageData.text.map((eachText, idx) =>
                        <div div className="ResultText" key={idx} >
                            {/* <div>-</div> */}
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
                            <img className="ChemiImg" alt="환장의 케미 이미지" src={pageData.WorstImg}></img>
                            <div className="ChemiMiddle">{pageData.WorstSubname}</div>
                            <div className="ChemiName">{pageData.WorstChemi}</div>
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




}

export default Result;
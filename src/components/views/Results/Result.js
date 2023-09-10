import "./Result.css";
import Chemistry from "./Chemistry";
import ResultOthers from "./ResultOthers";
import Logo from "../../Footer/Logo";
// import resultData from "./AllResults.json";
function Result() {
    return (
        <div className="ResultPage">
            <div className="ResultImageFrame">
                <span className="ResultTitle">나와 어울리는 이화여자대학교 건물은</span>
                <div className="ResultMiddletext">엄.근.진</div>
                <div className="TypeName">대강당</div>
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
                    벗에게 추천하는 이화여대 건물은 바로 기숙사입니다! 기숙사는 편안한 공간과 아늑한 분위기로, ISFP 유형이 좋아하는 휴식과 집 안에서의 편안함을 제공하는 곳입니다.
                    기숙사 유형의 벗은 자연스러운 예술가로서 자신만의 독특한 감성과 창의력을 소중히 여깁니다. 집안에서 편안하게 쉬고 자신만의 세계를 만들어가는 것을 즐기며, 기숙사는 그런 모습을 잘 반영한 공간입니다.
                    기숙사는 마치 두 번째 집처럼 따뜻한 분위기를 갖추고 있어, 기숙사 유형의 벗들이 안락함을 느끼며 여유롭게 시간을 보낼 수 있는 장소입니다. 자신만의 공간에서 자유로운 생각과 창의적인 아이디어를 키워낼 수 있을 것입니다.
                    누워서 책을 읽거나 그림을 그리는 등의 여유로운 시간을 보내는 것은 기숙사 유형의 벗에게 큰 만족감을 줄 것입니다. 기숙사는 그런 소중한 순간들을 위한 완벽한 장소로, 그들의 성장과 창의력 발휘를 지원해줄 것입니다.
                    기숙사에서 벗들과 함께 나누는 소중한 시간들과 함께, 자신만의 개성을 표현하고 성장할 수 있는 환경을 찾게 될 것입니다.
                </div>
                <Chemistry />
                <ResultOthers />
                <Logo />
            </div>
        </div >
    );
}

export default Result;
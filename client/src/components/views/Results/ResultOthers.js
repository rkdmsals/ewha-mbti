import "./ResultOthers.css"
import { Link } from "react-router-dom";
import Kakao from "./Kakao";
import resultData from "./results.json";
import { useParams } from "react-router-dom";
//이미지 로딩 속도가 느린 것을 개선하기 위해 아래 부분은 deconding="async"를 넣어 화면이 보여질 때 로딩되도록 수정함
function ResultOthers() {

    let params = useParams();
    let pageData = resultData.results[params.id - 1];
    const url = encodeURI(window.location.href);
    const imageUrl = pageData.shareImg_path;
    const ShareKakao = () => {
        //init 안에 API key 변경해서 넣으면 됨
        if (!Kakao.isInitialized()) {
            Kakao.init('9ffafc59b49ca4a20ae876b0a1742b22');
        }
        //카카오 메시지 템플릿 기능 이용, 템플릿 생성 후 templateId만 변경하면 됨
        Kakao.Share.createCustomButton({
            container: '#KakaoButton',
            templateId: 98548,
            templateArgs: {
                //서버에 이미지 파일 올려야 가능한 기능
                // ResultImg: "public"+imageUrl,
                title: '나와 잘어울리는 이화여대 건물은?',
                description: '링크에서 테스트해보기',
            },
        });
    }

    //이미지 저장 함수
    const saveImage = () => {
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = 'EWHA_building_test.png';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        alert("이미지가 저장되었습니다!");
    };

    const ShareLink = () => {
        try {
            navigator.clipboard.writeText(url).then(res => { alert("링크가 복사되었습니다!") })

        } catch (error) {
            const textArea = document.createElement('textarea');
            document.body.appendChild(textArea);
            textArea.value = url;
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert("링크가 복사되었습니다!");
        }
    }

    return (
        <div className="ResultOthers">
            <div className="ShareText"><img src="/img/ResultPage/Buttons/share.png"></img><span>공유하기</span></div>
            <div className="ShareButtons">
                <div className="SNSButton" id="KakaoButton" onClick={ShareKakao}>
                    <img
                        src="/img/ResultPage/Buttons/kakao.png"
                        alt="kakaotalk"
                        className="Images"
                    /></div>
                <div className="SNSButton" onClick={saveImage} ><img
                    src="/img/ResultPage/Buttons/ImageDown.png" // 이미지는 임시이미지
                    alt="imageSave"
                    className="Images"
                /></div>
                <div className="SNSButton" onClick={ShareLink}><img
                    src="/img/ResultPage/Buttons/link.png"
                    alt="link"
                    className="Images"
                /></div>

            </div>
            <img className="GuideImg" alt="rabbit_guide" src="/img/guide_image.png" ></img>
            <Link to={'http://ewhaianrenewalinfo.com'} className="GoGuideButton">
                리뉴얼 사이트 미리보기</Link>

        </div >
    )
}

export default ResultOthers
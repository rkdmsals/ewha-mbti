import "./ResultOthers.css"
import { Link, useNavigate } from "react-router-dom";
import Kakao from "./Kakao";
import resultData from "./results.json";
import { useParams } from "react-router-dom";

function ResultOthers() {

    let params = useParams();
    let pageData = resultData.results[params.id - 1];

    const url = encodeURI(window.location.href);
    const text = '나와 잘어울리는 이화여대 건물은?'
    const navigate = useNavigate();
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
                title: '나와 잘어울리는 이화여대 건물은?',
                description: '링크에서 테스트해보기',
            },
        });

    }

    //이미지 저장 함수
    const saveImage = () => {
        const imageUrl = pageData.shareImg_path;
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = 'EWHA_building_test.png';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };


    /*
    const ShareInstagram = async () => {
        // 서버에 Instagram 스토리 URL을 요청
        try {
            const response = await fetch('/shareInstagramStory'); // 서버 엔드포인트
            const data = await response.json();
 
            if (response.status === 200) {
                // Instagram 스토리 URL 가져오기 성공
                const instagramStoryURL = data.storyURL;
                // Instagram 스토리 URL을 사용하여 Instagram 스토리를 엽니다.
                window.open(instagramStoryURL, '_blank');
            } else {
                // 오류 처리 로직
                console.error('Instagram 스토리 URL 요청 오류:', data.error);
            }
        } catch (error) {
            console.error('Instagram 스토리 URL 요청 중에 오류 발생:', error);
        }
    };
    */
    /*
        const ShareInstagram = () => {
            const currentURL = window.location.href;
    
            const instagramStoryURL = `https://www.instagram.com/add_to_story?url=${encodeURIComponent(currentURL)}`;
            window.open(instagramStoryURL, '_blank');
        };
    */
    /*
    //https://developers.facebook.com/docs/instagram/sharing-to-stories
    const ShareInstagram = () => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1397734924482042',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v18.0'
            });
        };
 
        // var intent = ("com.instagram.share.ADD_TO_STORY");
 
        // // Attach your App ID to the intent
        // var sourceApplication = "1397734924482042"; // This is your application's FB ID
        // intent.putExtra("source_application", sourceApplication);
 
        // // Attach your image to the intent from a URI
        // var backgroundAssetUri = Uri.parse("/img/auditorium.png");
        // intent.setDataAndType(backgroundAssetUri, MEDIA_TYPE_JPEG);
 
        // // Grant URI permissions for the image
        // intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
 
        // // Instantiate an activity
        // var activity = getActivity();
 
        // // Verify that the activity resolves the intent and start it
        // if (activity.getPackageManager().resolveActivity(intent, 0) != null) {
        //     activity.startActivityForResult(intent, 0);
        // }
        // window.open("https://api.instagram.com/oauth")
 
        // 전달할 URL
        window.open("http://www.facebook.com/sharer/sharer.php?href=" + url);
    }
 
    */
    const ShareTwitter = () => {
        window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + url)
    }
    const ShareLink = () => {
        try {
            navigator.clipboard.writeText(url);
            alert("링크가 복사되었습니다!")
        } catch (error) {
            const textArea = document.createElement('textarea');
            document.body.appendChild(textArea);
            textArea.value = url;
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    }

    return (
        <div className="ResultOthers">
            <div className="ShareText"><img src="/img/ResultPage/Buttons/share.png"></img><span>내 결과 공유하기</span></div>
            <div className="ShareButtons">
                <div className="SNSButton" id="KakaoButton" onClick={ShareKakao}>
                    <img
                        src="/img/ResultPage/Buttons/kakao.png"
                        alt="kakaotalk"
                        className="Images"
                    /></div>
                <div className="SNSButton"><img
                    src="/img/ResultPage/Buttons/ImageDown.png" // 이미지는 임시이미지
                    alt="imageSave"
                    className="Images"
                    onClick={saveImage} /></div>
                <div className="SNSButton"><img
                    src="/img/ResultPage/Buttons/link.png"
                    alt="link"
                    className="Images"
                    onClick={ShareLink} /></div>

            </div>
            <img className="GuideImg" alt="rabbit_guide" src="/img/guide_image.png"></img>
            <Link to={'http://ewhaianrenewalinfo.com'} className="GoGuideButton">
                안내 사이트 보러가기</Link>

        </div >
    )
}

export default ResultOthers
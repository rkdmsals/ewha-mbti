import { Navigate } from "react-router-dom";
import "./ResultOthers.css"
import { useNavigate } from "react-router-dom";
import Kakao from "./Kakao";
import FB from "./Facebook";
function ResultOthers() {

    const url = encodeURI(window.location.href);
    const text = '지금 우리 MBTI는?'
    const navigate = useNavigate();
    const ShareKakao = () => {
        //init 안에 API key 변경해서 넣으면 됨
        if (!Kakao.isInitialized()) {
            Kakao.init('2bd28143574c5b9492e6fa599d43726c');
        }
        //카카오 메시지 템플릿 기능 이용, 템플릿 생성 후 templateId만 변경하면 됨
        Kakao.Share.sendCustom({
            templateId: 98537,
            templateArgs: {
                title: '나와 잘어울리는 이화여대 건물은?',
                description: '링크에서 테스트해보기',
            },
        });
    }
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
        navigator.clipboard.writeText(url);
    }

    return (
        <div className="ResultOthers">
            <div className="ShareText"><img src="/img/ResultPage/Buttons/share.png"></img><span>내 결과 공유하기</span></div>
            <div className="ShareButtons">
                <div className="SNSButton"><img
                    src="/img/ResultPage/Buttons/kakao.png"
                    alt="kakaotalk"
                    className="Images"
                    onClick={ShareKakao} /></div>
                <div className="SNSButton"><img
                    src="/img/ResultPage/Buttons/instagram.png"
                    alt="instagram"
                    className="Images"
                    onClick={ShareInstagram} /></div>
                <div className="SNSButton"> <img
                    src="/img/ResultPage/Buttons/twitter.png"
                    alt="twitter"
                    className="Images"
                    onClick={ShareTwitter} /></div>
                <div className="SNSButton"><img
                    src="/img/ResultPage/Buttons/link.png"
                    alt="link"
                    className="Images"
                    onClick={ShareLink} /></div>
            </div>
            <img className="GuideImg" alt="rabbit_guide" src="/img/guide_image.png"></img>
            <button className="GoGuideButton">
                안내 사이트 보러가기</button>
            <button className="AllTypesButton" onClick={() => navigate("/viewAllResult")}>모든 유형 보러가기</button>
            <button className="ReTestButton" onClick={() => navigate("/")}>테스트 다시하기</button>
        </div >
    )
}

export default ResultOthers
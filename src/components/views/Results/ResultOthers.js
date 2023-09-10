import "./ResultOthers.css"
function ResultOthers() {
    const url = encodeURI(window.location.href);
    const text = '지금 우리 MBTI는?'
    const ShareKakao = () => {

    }
    //https://developers.facebook.com/docs/instagram/sharing-to-stories
    const ShareInstagram = () => {
        window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + url)
    }
    const ShareTwitter = () => {
        window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + url)
    }
    const ShareLink = () => {
        navigator.clipboard.writeText(url);
    }

    return (
        <div className="ResultOthers">
            <div className="ShareText"><img src="img/ResultPage/Buttons/share.png"></img><span>내 결과 공유하기</span></div>
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
            <img className="GuideImg" alt="rabbit_guide" src="img/guide_image.png"></img>
            <button className="GoGuideButton">
                안내 사이트 보러가기</button>
            <button className="AllTypesButton">모든 유형 보러가기</button>
            <button className="ReTestButton">테스트 다시하기</button>
        </div >
    )
}

export default ResultOthers